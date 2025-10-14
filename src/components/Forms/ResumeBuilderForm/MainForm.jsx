import { FormProvider, useForm, useFormContext } from "react-hook-form";
import PersonalInfoForm from "./SubComponents/PersonalInfoForm";
import { email } from "zod";
function MainForm() {
  // const { register } = useFormContext();
  const methods = useForm({
    defaultValues: {
      name: "",
      email: "",
      education: [{ degree: "", institution: "" }],
      experience: [],
      skills: [],
    },
  });

  const onSubmit = (data) => {
    console.log("Final Resume Data:", data);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form
          action=""
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col"
        >
          <PersonalInfoForm />
          <label htmlFor="">This is the Form Starting Point</label>
        </form>
      </FormProvider>
    </>
  );
}

export default MainForm;
