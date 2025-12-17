import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import DraggableBtn from "../../components/Buttons/DraggableBtn";
import MainForm from "../../components/Forms/ResumeBuilderForm/MainForm";
import Preview from "../../components/Preview/Preview";
import resumeSchema from "../../components/Forms/ZodSchemas/resumeSchema.zod";
import { zodResolver } from "@hookform/resolvers/zod";

function ResumeBuilder() {
  const [showPreview, setShowPreview] = useState(false);
  const [isPreviewActive, setPreviewActive] = useState(false);

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

  /*TRY 1*/
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

  /*TRY 2*/
  // return (
  //   <FormProvider {...methods}>
  //     {/* Large screens: show both form and preview side by side */}
  //     <div className="hidden lg:grid lg:grid-cols-2 gap-6 p-4 h-screen">
  //       <div className="overflow-y-auto">
  //         <Preview />
  //       </div>
  //       <div className="overflow-y-auto">
  //         <MainForm />
  //       </div>
  //     </div>

  //     {/* ---------- Small/Medium Screens: Toggle View ---------- */}
  //     <div className="block lg:hidden relative h-screen overflow-hidden">
  //       <div
  //         className={`transition-transform duration-500 ease-in-out h-full ${
  //           showPreview ? "translate-y-full" : "translate-y-0"
  //         }`}
  //       >
  //         {/* Main Form (visible when preview hidden) */}
  //         <MainForm />
  //         {/* <button
  //           type="button"
  //           onClick={() => setShowPreview(true)}
  //           className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md"
  //         >
  //           Check Preview
  //         </button> */}

  //         <DraggableBtn
  //           btnLabel="Check Preview"
  //           onClick={() => setShowPreview(true)}
  //         />
  //       </div>

  //       {/* Preview (slides up from bottom)  */}
  //       <div
  //         className={`absolute inset-0 bg-white z-50 overflow-y-auto transition-transform duration-500 ease-in-out ${
  //           showPreview ? "translate-y-0" : "translate-y-full"
  //         }`}
  //       >
  // <button
  //   type="button"
  //   onClick={() => setShowPreview(false)}
  //   className="absolute top-3 right-3 bg-red-500 rounded-full p-2"
  // >
  //   ✕
  // </button>
  //         <Preview />
  //       </div>
  //     </div>
  //   </FormProvider>
  // );

  /*TRY 3*/
  return (
    <FormProvider {...methods}>
      <div className="global-container grid relative lg:grid-cols-2 md:grid-cols-1 gap-5 p-4 h-screen overflow-hidden">
        <section
          className={`preview-container lg:order-1 overflow-y-auto h-screen 
            ${isPreviewActive ? "order-1" : "order-2"}`}
        >
          {isPreviewActive && (
            <button
              type="button"
              onClick={() => setPreviewActive(false)}
              className="absolute top-3 right-3 bg-red-500 rounded-full p-2 block lg:hidden"
            >
              ✕
            </button>
          )}
          <Preview />
        </section>

        <section
          className={`inputForm-container lg:order-2 overflow-y-auto h-screen block
             ${isPreviewActive ? "order-2" : "order-1"}
            `}
        >
          {!isPreviewActive && (
            <DraggableBtn
              btnLabel="Check Preview"
              onClick={() => setPreviewActive(true)}
              btnStyle="block lg:hidden
              "
            />
          )}
          <MainForm />
        </section>
      </div>
    </FormProvider>
  );
}

export default ResumeBuilder;
