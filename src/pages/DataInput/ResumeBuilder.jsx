import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import MainForm from "../../components/Forms/ResumeBuilderForm/MainForm";
import Preview from "../../components/Preview/Preview";
import resumeSchema from "../../components/Forms/ZodSchemas/resumeSchema.zod";
import { zodResolver } from "@hookform/resolvers/zod";

function ResumeBuilder() {
  const [showPreview, setShowPreview] = useState(false);

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
  // return (
  //   <FormProvider {...methods}>
  //     <div className="grid grid-cols-2 gap-6 p-4 h-screen ">
  //       <div className="overflow-y-auto">
  //         <Preview />
  //       </div>
  //       <div className="overflow-y-auto">
  //         <MainForm />
  //       </div>
  //     </div>
  //   </FormProvider>
  // );

  return (
    <FormProvider {...methods}>
      {/* Large screens: show both form and preview side by side */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-6 p-4 h-screen">
        <div className="overflow-y-auto">
          <Preview />
        </div>
        <div className="overflow-y-auto">
          <MainForm />
        </div>
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////////// */}
      {/* ---------- Small/Medium Screens: Toggle View ---------- */}
      <div className="block lg:hidden relative h-screen overflow-hidden">
        {/* Main Form (visible when preview hidden) */}
        <div
          className={`transition-transform duration-500 ease-in-out h-full ${
            showPreview ? "translate-y-full" : "translate-y-0"
          }`}
        >
          <MainForm />
          <button
            type="button"
            onClick={() => setShowPreview(true)}
            className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md"
          >
            Preview
          </button>
        </div>

        {/* Preview (slides up from bottom) */}
        <div
          className={`absolute inset-0 bg-white z-50 overflow-y-auto transition-transform duration-500 ease-in-out ${
            showPreview ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <button
            type="button"
            onClick={() => setShowPreview(false)}
            className="absolute top-3 right-3 bg-gray-200 rounded-full p-2 hover:bg-gray-300"
          >
            ✕
          </button>
          <Preview />
        </div>
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////////// */}
    </FormProvider>
  );
}
/*

*/
      // {/* Small/Medium screens: toggle between form and preview */}
      // <div className="block lg:hidden relative h-screen">
      //   {/* Main Form (visible when preview is hidden) */}
      //   {!showPreview && (
      //     <div className="overflow-y-auto h-full">
      //       <MainForm />
      //       <button
      //         type="button"
      //         onClick={() => setShowPreview(true)}
      //         className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md"
      //       >
      //         Preview
      //       </button>
      //     </div>
      //   )}

      //   {/* Preview Overlay (visible when preview is shown) */}
      //   {showPreview && (
      //     <div className="absolute inset-0 bg-white z-50 overflow-y-auto transition-transform duration-300">
      //       <button
      //         type="button"
      //         onClick={() => setShowPreview(false)}
      //         className="absolute top-3 right-3 bg-red-500 rounded-full p-2 hover:bg-red-700"
      //       >
      //         ✕
      //       </button>
      //       <Preview />
      //     </div>
      //   )}
      // </div>
export default ResumeBuilder;
