import { FormProvider, useForm } from "react-hook-form";
import PersonalInfoForm from "./SubComponents/PersonalInfoForm";
import ProfileInfoForm from "./SubComponents/ProfileInfoForm";
import SkillsForm from "./SubComponents/SkillsForm";
import WorkExperienceForm from "./SubComponents/WorkExperienceForm";
import EducationForm from "./SubComponents/EducationForm";
import ProjectForm from "./SubComponents/ProjectForm";
import CertificationForm from "./SubComponents/CertificationForm";

import resumeSchema from "../ZodSchemas/resumeSchema.zod";
import { zodResolver } from "@hookform/resolvers/zod";

function MainForm() {
  const methods = useForm({
    resolver: zodResolver(resumeSchema),
    mode: "onSubmit",
    resolver: zodResolver(resumeSchema),
    mode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      photo: "",
      headline: "",
      profileLink: "",
      address: "",
      profileSummary: "",
      skills: [{ name: "" }],
      education: [{ degree: "", institution: "", graduationDate: "" }],
      experience: [
        // { company: "", role: "", startDate: "", endDate: "", description: "" }, //optional : experience not required
      ],
      project: [
        // { name: "", description: "", link: "" } //optional : project not required
      ],
      certification: [
        // { name: "", issuedBy: "", link: "" }  //optional : certification not required
      ],
    },
  });

  const handleFormSubmit = (data) => {
    console.log("✅ Form Submitted Successfully!");
    console.log("Final Resume Data:", data);
  };

  const handleFormError = (errors) => {
    console.error("❌ Validation Errors:", errors);
  };

  return (
    <div className="border-2 rounded-xl form-container p-6">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(handleFormSubmit, handleFormError)}
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
      </FormProvider>
    </div>
  );
}

export default MainForm;
