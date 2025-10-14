import React from "react";
import { useFormContext } from "react-hook-form";
function PersonalInfoForm() {
  const { register } = useFormContext();
  return (
    <>
      <section>
        <h2 className="text-xl font-semibold mb-3">Personal Information</h2>
        <div className="grid grid-cols-[auto_1fr_2%] gap-4 field-container">
          <input
            {...register("photo")}
            placeholder="Profile Pic"
            className="border rounded-[50%] px-3 py-2 aspect-square w-30 sm:w-20 md:w-25"
          />
          <div className="grid gap-3 w-full">
            <input
              {...register("name", { required: true })}
              placeholder="Full name"
              className="border rounded px-3 py-2"
            />
            <input
              {...register("email", { required: true })}
              placeholder="Email"
              className="border rounded px-3 py-2"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default PersonalInfoForm;
