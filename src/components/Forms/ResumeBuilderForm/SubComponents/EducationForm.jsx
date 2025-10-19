import { useFormContext, useFieldArray } from "react-hook-form";
function EducationForm() {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Education</h2>
      {fields.map((item, index) => (
        <div key={item.id} className="flex flex-wrap gap-3 mb-2">
          <input
            {...register(`education.${index}.degree`)}
            placeholder="Degree"
            className="border rounded px-3 p-2"
          />
          <input
            {...register(`education.${index}.institution`)}
            placeholder="Institution"
            className="border rounded px-3 p-2"
          />
          <input
            {...register(`education.${index}.graduationDate`)}
            placeholder="Date of Graduation"
            className="border rounded px-3 p-2"
            type="date"
          />
          <button onClick={() => remove(index)} className="text-red-500">
            x
          </button>
        </div>
      ))}

      <button
        onClick={() =>
          append({ degree: "", institution: "", graduationDate: "" })
        }
        className="mt-2 text-blue-500 text-sm"
      >
        + Add Education
      </button>
    </div>
  );
}

export default EducationForm;
