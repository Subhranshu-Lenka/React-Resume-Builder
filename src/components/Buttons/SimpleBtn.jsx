import React from "react";
import { useNavigate } from "react-router-dom";

function SimpleBtn({ btnLabel, btnStyle = "", navigationPath }) {
  const navigate = useNavigate();

  const hasBgOverride = btnStyle.includes("bg-");
  const hasTextOverride = btnStyle.includes("text-");
  const hasHoverOverride = btnStyle.includes("hover:");

  return (
    <button
      onClick={() =>
        navigationPath
          ? navigate(navigationPath)
          : console.error(
              `navigationPath attribute is not set for ${btnLabel} "Simple" Button`
            )
      }
      className={`
        primary text-lg font-bold px-7 py-[14px] border-none rounded-3xl 
        ${hasBgOverride ? "" : "bg-white"}
        ${hasTextOverride ? "" : "text-black"} 
        ${hasHoverOverride ? "" : "hover:bg-gray-500 hover:text-white"} 
        ${btnStyle}
        `}
    >
      {btnLabel}
    </button>
  );
}

export default SimpleBtn;
