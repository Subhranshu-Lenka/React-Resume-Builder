import { FormProvider, useForm, useFormContext } from "react-hook-form";
import PersonalInfoForm from "./SubComponents/PersonalInfoForm";
import EducationForm from "./SubComponents/EducationForm";
import ProfileInfoForm from "./SubComponents/ProfileInfoForm";
import SkillsForm from "./SubComponents/SkillsForm";
import { email } from "zod";
function MainForm() {
  // const { register } = useFormContext();
  const methods = useForm({
    defaultValues: {
      name: "",
      email: "",
      education: [{ degree: "", institution: "" }],
      experience: [],
      skills: [{ name: "" }],
    },
  });

  const onSubmit = (data) => {
    console.log("Final Resume Data:", data);
  };

  return (
    <>
      <div className="border-2 rounded-xl form-container">
        <FormProvider {...methods}>
          <form
            action=""
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex flex-col mt-6 px-4 gap-4"
          >
            <PersonalInfoForm />
            <ProfileInfoForm />
            <SkillsForm />
            <EducationForm />
          </form>
        </FormProvider>
      </div>
    </>
  );
}

export default MainForm;
