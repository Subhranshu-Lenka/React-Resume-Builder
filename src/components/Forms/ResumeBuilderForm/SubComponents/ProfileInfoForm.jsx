import { useState, useRef, useEffect } from "react";
import { useFormContext } from "react-hook-form";

function ProfileInfoForm() {
  const { register } = useFormContext();
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;

    const resize = () => {
      if (!textarea) return;
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    };

    resize();

    textarea.addEventListener("input", resize);
    return () => textarea.removeEventListener("input", resize);
  }, []);

  return (
    <>
      <h2 className="text-xl font-semibold mb-3">Profile Summary</h2>
      <textarea
        {...register("profileSummary", { required: true })}
        placeholder="Enter a concise profile summary (e.g., 3–4 lines about your experience and skills)."
        className="border rounded px-3 py-2 resize-none overflow-hidden"
        ref={textareaRef}
      />
    </>
  );
}

export default ProfileInfoForm;
