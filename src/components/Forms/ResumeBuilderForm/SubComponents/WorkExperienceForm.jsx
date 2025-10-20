import { useFieldArray, useFormContext } from "react-hook-form";
import SelfResizableTextArea from "../../../TextArea/SelfResizableTextArea";
import InputError from "../../InputErrors/InputError";
function WorkExperienceForm() {
  const { register, control, formState: { errors } } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "experience",
  });
  return (
    <>
      <h2 className="text-xl font-semibold mb-3">Work Experience</h2>
      {fields.map((item, index) => (
        <div
          key={item.id}
          className="border rounded-lg p-4 mb-4 flex flex-col md:flex-row md:flex-wrap gap-4 items-start"
        >
          <div>
            <input
              {...register(`experience.${index}.company`)}
              placeholder="Company Name"
              className={`border rounded px-3 py-2 flex-1 ${errors.experience?.[index]?.company ? "border-red-500" : ""}`}
              type="text"
            />
            <InputError message={errors.experience?.[index]?.company?.message} />
          </div>
          <div>
            <input
              {...register(`experience.${index}.role`)}
              placeholder="Role/Designation"
              className={`border rounded px-3 py-2 flex-1 ${errors.experience?.[index]?.role ? "border-red-500" : ""}`}
              type="text"
            />
            <InputError message={errors.experience?.[index]?.role?.message} />
          </div>
          <fieldset className="flex flex-col">
            <label className="text-sm font-medium mb-1">Start Date</label>
            <input
              {...register(`experience.${index}.startDate`)}
              placeholder="Start Date"
              className={`border rounded px-3 py-2 flex-1 ${errors.experience?.[index]?.startDate ? "border-red-500" : ""}`}
              type="date"
            />
            <InputError message={errors.experience?.[index]?.startDate?.message} />
          </fieldset>
          <fieldset className="flex flex-col">
            <label className="text-sm font-medium mb-1">End Date</label>
            <input
              {...register(`experience.${index}.endDate`)}
              placeholder="End Date"
              className={`border rounded px-3 py-2 flex-1 ${errors.experience?.[index]?.endDate ? "border-red-500" : ""}`}
              type="date"
            />
            <InputError message={errors.experience?.[index]?.endDate?.message} />
          </fieldset>
          <SelfResizableTextArea
            valueTitle={`experience.${index}.description`}
            placeholderValue={"Role Description"}
            minWidth={200}
          />
          <button onClick={() => remove(index)} className="text-red-500">
            x
          </button>
        </div>
      ))}

      <button
        onClick={() =>
          append({
            company: "",
            role: "",
            startDate: "",
            endDate: "",
            description: "",
          })
        }
        className="mt-2 text-blue-500 text-sm"
      >
        + Add Experience
      </button>
    </>
  );
}

export default WorkExperienceForm;
