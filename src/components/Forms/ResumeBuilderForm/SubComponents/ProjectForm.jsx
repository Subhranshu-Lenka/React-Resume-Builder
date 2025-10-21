import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import SelfResizableTextArea from "../../../TextArea/SelfResizableTextArea";
import InputError from "../../InputErrors/InputError";

function ProjectForm() {
  const { register, control, formState: { errors } } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "project",
  });
  return (
    <>
      <h2 className="text-xl font-semibold mb-3">Projects</h2>
      {fields.map((item, index) => (
        <div key={item.id} className="grid grid-cols-2 gap-3">
          <div>
            <input
              {...register(`project.${index}.name`)}
              placeholder="Project Name"
              className={`border rounded px-3 py-2 flex-1 ${errors.project?.[index]?.name ? "border-red-500" : ""}`}
            />
            <InputError message={errors.project?.[index]?.name?.message} />
          </div>
          <div>
            <input
              {...register(`project.${index}.link`)}
              placeholder="Project Link"
              className={`border rounded px-3 py-2 flex-1 ${errors.project?.[index]?.link ? "border-red-500" : ""}`}
            />
            <InputError message={errors.project?.[index]?.link?.message} />
          </div>
          <div className="col-span-2 grid grid-col-[1fr_auto]">
            <SelfResizableTextArea
              valueTitle={`project.${index}.description`}
              placeholderValue={"Project Description"}
              isRequired={true}
              minWidth={200}
            />

            <button onClick={() => remove(index)} className="text-red-500">
              x
            </button>
          </div>
        </div>
      ))}

      <button
        onClick={() => append({ name: "", link: "", description: "" })}
        className="mt-2 text-blue-500 text-sm"
      >
        + Add Project
      </button>
    </>
  );
}

export default ProjectForm;
