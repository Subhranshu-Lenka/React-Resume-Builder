import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

function CertificationForm() {
  const { register, control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "certification",
  });
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Certificate</h2>
      {fields.map((item, index) => (
        <div key={item.id} className="grid grid-row-3">
          <input
            {...register(`certificate.${index}.name`)}
            placeholder="name"
            className="border rounded px-3 py-2"
          />
          <input
            {...register(`certificate.${index}.issuedBy`)}
            placeholder="issuedBy"
            className="border rounded px-3 py-2"
          />
          <input
            {...register(`certificate.${index}.link`)}
            placeholder="Certificate Link"
            className="border rounded px-3 py-2"
          />
          <button onClick={() => remove(index)} className="text-red-500">
            x
          </button>
        </div>
      ))}
      <button onClick={() => append({ name: "", issuedBy: "", link: "" })}>
        + Add Certificate
      </button>
    </div>
  );
}

export default CertificationForm;
