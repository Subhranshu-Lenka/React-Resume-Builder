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
      <h2 className="text-xl font-semibold mb-3">Certifications</h2>
      {fields.map((item, index) => (
        <div key={item.id} className="grid grid-cols-2 gap-3">
          <input
            {...register(`certificate.${index}.name`)}
            placeholder="Certification Name"
            className="border rounded px-3 py-2"
          />
          <input
            {...register(`certificate.${index}.issuedBy`)}
            placeholder="Issued By"
            className="border rounded px-3 py-2"
          />
          <div className="col-span-2 grid gap-1">
            <input
              {...register(`certificate.${index}.link`)}
              placeholder="Certification Link"
              className="border rounded px-3 py-2"
            />
            <button onClick={() => remove(index)} className="text-red-500">
              x
            </button>
          </div>
        </div>
      ))}
      <button
        className="text-blue-500 text-sm"
        onClick={() => append({ name: "", issuedBy: "", link: "" })}
      >
        + Add Certificate
      </button>
    </div>
  );
}

export default CertificationForm;
