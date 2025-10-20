import { useFieldArray, useFormContext } from "react-hook-form";
import InputError from "../../InputErrors/InputError";

function CertificationForm() {
  const { register, control, formState: { errors } } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "certification",
  });
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Certifications</h2>
      {fields.map((item, index) => (
        <div key={item.id} className="grid grid-cols-2 gap-3">
          <div>
            <input
              {...register(`certification.${index}.name`)}
              placeholder="Certification Name"
              className={`border rounded px-3 py-2 flex-1 ${errors.certification?.[index]?.name ? "border-red-500" : ""}`}
            />
            <InputError message={errors.certification?.[index]?.name?.message} />
          </div>
          <div>
            <input
              {...register(`certification.${index}.issuedBy`)}
              placeholder="Issued By"
              className={`border rounded px-3 py-2 flex-1 ${errors.certification?.[index]?.issuedBy ? "border-red-500" : ""}`}
            />
            <InputError message={errors.certification?.[index]?.issuedBy?.message} />
          </div>
          <div className="col-span-2 grid gap-1">
            <input
              {...register(`certification.${index}.link`)}
              placeholder="Certification Link"
              className={`border rounded px-3 py-2 flex-1 ${errors.certification?.[index]?.link ? "border-red-500" : ""}`}
            />

            <InputError message={errors.certification?.[index]?.link?.message} />
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
