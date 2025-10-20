import { useEffect, useRef } from "react";
import { useFormContext, } from "react-hook-form";
import InputError from "../Forms/InputErrors/InputError";

function SelfResizableTextArea({
  valueTitle,
  placeholderValue,
  isRequired = false,
  minWidth = 0,
}) {

  const { register, formState: { errors } } = useFormContext();
  const textareaRef = useRef(null);

  if (
    typeof valueTitle !== "string" ||
    typeof placeholderValue !== "string" ||
    typeof isRequired !== "boolean" ||
    typeof minWidth !== "number" ||
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

    if (typeof minWidth !== "number") {
      errors.push(
        `❌ "minWidth" must be a number (received: ${typeof minWidth})`
      );
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
      <div>
        <textarea
          {...register(`${valueTitle}`, { required: isRequired })}
          placeholder={placeholderValue}
          className={
            `border rounded px-3 py-2 flex-1 resize-none overflow-hidden w-full ${errors[`${valueTitle}`] ? "border-red-500" : ""}`
          }
          style={{ minWidth: minWidth > 0 ? `${minWidth}px` : "auto" }}
          ref={(e) => {
            textareaRef.current = e;
            register(`${valueTitle}`).ref(e);
          }}
        />
        <InputError message={errors[`${valueTitle}`]?.message} />
      </div>
    </>
  );
}

export default SelfResizableTextArea;
