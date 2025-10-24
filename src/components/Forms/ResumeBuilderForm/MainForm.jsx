import PersonalInfoForm from "./SubComponents/PersonalInfoForm";
import ProfileInfoForm from "./SubComponents/ProfileInfoForm";
import SkillsForm from "./SubComponents/SkillsForm";
import WorkExperienceForm from "./SubComponents/WorkExperienceForm";
import EducationForm from "./SubComponents/EducationForm";
import ProjectForm from "./SubComponents/ProjectForm";
import CertificationForm from "./SubComponents/CertificationForm";
import { useFormContext } from "react-hook-form";

function MainForm() {
  const { handleSubmit } = useFormContext();

  const handleFormSubmit = (data) => {
    console.log("✅ Form Submitted Successfully!");
    console.log("Final Resume Data:", data);
  };

  const handleFormError = (errors) => {
    console.error("❌ Validation Errors:", errors);
  };

  return (
    <div className="border-2 rounded-xl form-container p-6">
        <form
          onSubmit={handleSubmit(handleFormSubmit, handleFormError)}
          className="flex flex-col gap-4"
        >
          <PersonalInfoForm />
          <ProfileInfoForm />
          <SkillsForm />
          <WorkExperienceForm />
          <EducationForm />
          <ProjectForm />
          <CertificationForm />

          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700"
          >
            Generate
          </button>
        </form>
    </div>
  );
}

export default MainForm;
