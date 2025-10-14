import React from "react";
import { useFormContext } from "react-hook-form";
function PersonalInfoForm() {
  const { register } = useFormContext();
  return (
    <>
      <div>
        <h2>Personal Information</h2>
        <div className="field-container">
          <input
            {...register("name", { required: true })}
            placeholder="Full name"
            className="border rounded-2xl px-3 py-2"
          />
          <input
            {...register("name", { required: true })}
            placeholder="Full name"
            className="border rounded-2xl px-3 py-2"
          />
          <input
            {...register("name", { required: true })}
            placeholder="Full name"
            className="border rounded-2xl px-3 py-2"
          />
        </div>
      </div>
    </>
  );
}

export default PersonalInfoForm;
