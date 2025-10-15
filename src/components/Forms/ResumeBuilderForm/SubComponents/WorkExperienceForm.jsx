import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

function WorkExperienceForm() {
  const { register, control } = useFormContext();
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
          <input
            {...register(`experience.${index}.company`)}
            placeholder="Company Name"
            className="border rounded px-3 py-2 flex-1"
            type="text"
          />
          <input
            {...register(`experience.${index}.role`)}
            placeholder="Role/Designation"
            className="border rounded px-3 py-2 flex-1"
            type="text"
          />
          <fieldset className="flex flex-col">
            <label className="text-sm font-medium mb-1">Start Date</label>
            <input
              {...register(`experience.${index}.startDate`)}
              placeholder="Start Date"
              className="border rounded px-3 py-2"
              type="date"
            />
          </fieldset>
          <fieldset className="flex flex-col">
            <label className="text-sm font-medium mb-1">End Date</label>
            <input
              {...register(`experience.${index}.endDate`)}
              placeholder="End Date"
              className="border rounded px-3 py-2"
              type="date"
            />
          </fieldset>
          <textarea
            {...register(`experience.${index}.description`)}
            placeholder="Role Description"
            className="border rounded px-3 py-2 flex-1 min-w-[200px] resize-none"
            rows={2}
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
