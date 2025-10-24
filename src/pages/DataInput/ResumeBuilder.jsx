import { FormProvider, useForm } from "react-hook-form";

import MainForm from "../../components/Forms/ResumeBuilderForm/MainForm";
import Preview from "../../components/Preview/Preview";
import resumeSchema from "../../components/Forms/ZodSchemas/resumeSchema.zod";
import { zodResolver } from "@hookform/resolvers/zod";

function ResumeBuilder() {
  const methods = useForm({
    resolver: zodResolver(resumeSchema),
    mode: "onChange",
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
  return (
    <FormProvider {...methods}>
      <div className="grid grid-cols-2 gap-6 p-4 min-h-[90vh]">
        <Preview />
        <MainForm />
      </div>
    </FormProvider>
  );
}

export default ResumeBuilder;
