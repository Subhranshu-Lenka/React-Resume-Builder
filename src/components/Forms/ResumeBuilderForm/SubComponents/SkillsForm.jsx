import { useFieldArray, useFormContext } from "react-hook-form";
import InputError from "../../InputErrors/InputError";

function SkillsForm() {
  const { register, control, formState: { errors } } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });
  return (
    <>
      <h2 className="text-xl font-semibold mb-3">Skills</h2>
      <div className="flex gap-3 flex-wrap">
        {fields.map((item, index) => (
          <div key={item.id} className="flex gap-1">
            <input
              {...register(`skills.${index}.name`)}
              placeholder="Skill"
              className={`border rounded px-3 py-2 w-full ${errors.skills?.[index]?.name?.message ? "border-red-500" : ""}`}
              type="text"
            />
            <InputError message={errors.skills?.[index]?.name?.message} />
            <button onClick={() => remove(index)} className="text-red-500">
              x
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={() => append({ name: "" })}
        className="mt-1 text-blue-500 text-sm"
      >
        + Add Skill
      </button>
    </>
  );
}

export default SkillsForm;
