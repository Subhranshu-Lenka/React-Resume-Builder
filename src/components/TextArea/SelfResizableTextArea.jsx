import { useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";

function SelfResizableTextArea({
  valueTitle,
  placeholderValue,
  isRequired = false,
}) {
  if (
    typeof valueTitle !== "string" ||
    typeof placeholderValue !== "string" ||
    typeof isRequired !== "boolean" ||
    !valueTitle ||
    !placeholderValue
  ) {
    const errors = [];

    if (!valueTitle) {
      errors.push(`❌ "valueTitle" is required`);
    }

    if (!placeholderValue) {
      errors.push(`❌ "placeholderValue" is required`);
    }

    if (typeof isRequired !== "boolean") {
      errors.push(
        `❌ "isRequired" must be a boolean (received: ${typeof isRequired})`
      );
    }
    if (typeof valueTitle !== "string") {
      errors.push(
        `❌ "valueTitle" must be a string (received: ${typeof valueTitle})`
      );
    }
    if (typeof placeholderValue !== "string") {
      errors.push(
        `❌ "placeholderValue" must be a string (received: ${typeof placeholderValue})`
      );
    }

    throw new Error(
      `Invalid prop(s) passed to <SelfResizableTextArea>:\n${errors.join("\n")}`
    );
  }

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
      <textarea
        {...register(`${valueTitle}`, { required: isRequired })}
        placeholder={placeholderValue}
        className="border rounded px-3 py-2 resize-none overflow-hidden"
        ref={textareaRef}
      />
    </>
  );
}

export default SelfResizableTextArea;
