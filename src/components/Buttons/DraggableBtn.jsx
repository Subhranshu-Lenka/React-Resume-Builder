// import { useEffect, useRef, useState } from "react";

// function DraggableBtn({
//   btnLabel = "Label",
//   btnStyle = "",
//   initialPosition = { x: 20, y: 20 },
//   onClick = () => {},
// }) {
//   const btnRef = useRef(null);

//   const [dragging, setDragging] = useState(false);
//   const [position, setPosition] = useState(initialPosition);
//   const [offset, setOffset] = useState({ x: 0, y: 0 });

//   const startDrag = (e) => {
//     e.preventDefault();
//     console.log("Dragging starts at", e.clientX, e.clientY);
//     setDragging(true);
//     const rect = btnRef.current.getBoundingClientRect();
//     setOffset({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top,
//     });
//   };

//   const onDrag = (e) => {
//     if (!dragging) return;
//     console.log("Dragging at", e.clientX, e.clientY);
//     setPosition({
//       x: e.clientX - offset.x,
//       y: e.clientY - offset.y,
//     });
//   };

//   const stopDrag = () => setDragging(false);

//   useEffect(() => {
//     document.addEventListener("mousemove", onDrag);
//     document.addEventListener("mouseup", stopDrag);
//     return () => {
//       document.removeEventListener("mousemove", onDrag);
//       document.removeEventListener("mouseup", stopDrag);
//     };
//   },[onDrag,stopDrag]);

//   return (
//     <button
//       ref={btnRef}
//       type="button"
//       onClick={onClick}
//       onMouseDown={startDrag}
//       style={{
//         position: "fixed",
//         left: `${position.x}px`,
//         top: `${position.y}px`,
//         cursor: dragging ? "grabbing" : "grab",
//         zIndex: 1000,
//       }}
//       className={`bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md select-none ${btnStyle}`}
//     >
//       {btnLabel}
//     </button>
//   );
// }

// export default DraggableBtn;

///////////////////////////////////////////////////////////////////////////////////////////////

// DraggableBtn.js
import React, { useRef, useState, useEffect } from "react";

export default function DraggableBtn({
  btnLabel = "Check Preview",
  btnStyle = "",
  initialPosition = { x: 20, y: 20 },
  onClick = () => {},
}) {
  const btnRef = useRef(null);

  // visible position state (used to render)
  const [position, setPosition] = useState(initialPosition);
  // refs to avoid stale closures in event listeners
  const draggingRef = useRef(false);
  const offsetRef = useRef({ x: 0, y: 0 });

  // start dragging (pointerdown)
  const startDrag = (e) => {
    // only left button or touch/pointer
    if (e.pointerType === "mouse" && e.button !== 0) return;

    // prevent text selection / default behavior
    e.preventDefault();

    const rect = btnRef.current.getBoundingClientRect();
    // compute pointer offset inside the element
    offsetRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    draggingRef.current = true;

    // capture the pointer so we keep receiving events even if the pointer leaves the button
    try {
      btnRef.current.setPointerCapture(e.pointerId);
    } catch (err) {
      // some browsers may throw if capture fails, ignore
    }
  };

  // pointermove handler (attached to document)
  useEffect(() => {
    let rafId = null;

    const onPointerMove = (e) => {
      if (!draggingRef.current) return;
      e.preventDefault();

      // throttle with rAF for smoothness
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const newX = e.clientX - offsetRef.current.x;
        const newY = e.clientY - offsetRef.current.y;
        setPosition((prev) => {
          // optionally clamp to viewport if desired:
          const clampedX = Math.max(0, Math.min(window.innerWidth - (btnRef.current?.offsetWidth || 0), newX));
          const clampedY = Math.max(0, Math.min(window.innerHeight - (btnRef.current?.offsetHeight || 0), newY));
          // only update if changed to avoid extra renders
          if (clampedX === prev.x && clampedY === prev.y) return prev;
          return { x: clampedX, y: clampedY };
        });
      });
    };

    const onPointerUp = (e) => {
      if (!draggingRef.current) return;
      draggingRef.current = false;
      try {
        btnRef.current?.releasePointerCapture?.(e.pointerId);
      } catch (err) {}
    };

    document.addEventListener("pointermove", onPointerMove, { passive: false });
    document.addEventListener("pointerup", onPointerUp, { passive: false });
    // cleanup
    return () => {
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerup", onPointerUp);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <button
      ref={btnRef}
      type="button"
      onPointerDown={startDrag}
      onClick={onClick}
      style={{
        position: "fixed",
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: draggingRef.current ? "grabbing" : "grab",
        zIndex: 1000,
        touchAction: "none", // important: prevents touch panning while dragging
      }}
      className={`bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md select-none ${btnStyle}`}
    >
      {btnLabel}
    </button>
  );
}

///////////////////////////////////////////////////////////////////////////////////////////////