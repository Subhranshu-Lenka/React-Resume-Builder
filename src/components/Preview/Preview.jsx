import { useFormContext, useWatch } from "react-hook-form";
function Preview() {
  const { control } = useFormContext();
  const formData = useWatch({ control }); // this hook watches every form field.

  return (
    <>
      <div className="border-2 rounded-xl preview-container">
        <div className="border p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">Preview</h2>
          <p>
            <strong>Name:</strong> {formData.name}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Headline:</strong> {formData.headline}
          </p>
          <p>
            <strong>Skills:</strong>{" "}
            {formData.skills?.map((s) => s.name).join(", ")}
          </p>
        </div>
      </div>
    </>
  );
}

export default Preview;
