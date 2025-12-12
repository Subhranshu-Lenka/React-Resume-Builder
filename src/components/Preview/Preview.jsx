import { useFormContext, useWatch } from "react-hook-form";
import { useMemo, useState } from "react";

import TemplateImporter from "./TemplateImporter/TemplateImporter";

const Preview = () => {
  const { control } = useFormContext();
  const formData = useWatch({ control }); // this hook watches every form field.
  
  const [selectedTemplate, setSelectedTemplate] = useState("template1");
  const templatesModules = useMemo(() => Object.entries(TemplateImporter), []);
  
  const templates = useMemo(() => {
    const out = {};
    for (const [path, value] of templatesModules) {
      const key = path
        .split("/")
        .pop()
        .replace(/\.(jsx|tsx)$/, "")
        .toLowerCase(); // "template1"
  
      out[key] = value.default;
      console.log({ key });
    };

    return out;
  }, [templatesModules]);

  // const templates = {
  //   template1: <Template1 data={formData} />,
  //   template2: <Template2 data={formData} />,
  // };
  

  const SelectedTemplateComponent = templates[selectedTemplate];

  /*
    Base Template- base for all the template components- self written
    <>
      <div className="border-2 rounded-xl preview-container p-4">
        // Actual preview container
        <div className="border p-4">
          <section className="personal-data">
            <p>
              // name,email,photo,headline, profile-link, address
              <strong>{formData.name || "John Died"}</strong>
            </p>
            <p>{formData.photo || ""}</p>
            <p className="flex gap-2  ">
              <span>{formData.email || "Email Address"}</span>
              <span>{formData.profileLink || "profile-link"}</span>
              <span>{formData.address || "address"}</span>
            </p>
          </section>
   
          <section className="profile-data">
            <span>
              {formData.profileSummary ||
                "Hard-working and results-driven professional with 5+ years of experience in [Your Field]. Proven ability to [Key Skill 1] and [Key Skill 2], with a track record of [Key Achievement]. Seeking to leverage my skills to contribute to a [Type of Company] organization"}
            </span>
            <span>{formData.headline || "Headline"}</span>
          </section>
   
          <section className="skills">
            <h3>Skills</h3>
            {formData.skills && formData.skills.length > 0 ? (
              <div className="flex gap-4">
                {formData.skills.map((skill, index) => (
                  <div key={index}>{skill.name}</div>
                ))}
              </div>
            ) : (
              <p>No Skills added yet.</p>
            )}
          </section>
   
          <section className="experience">
            <h3>Experience</h3>
            {formData.experience && formData.experience.length > 0 ? (
              <div className="flex gap-4">
                {formData.experience.map((exp, index) => (
                  <div key={index}>
                    <span>{exp.company}</span>
                    <span>{exp.role}</span>
                    <span>{exp.startDate}</span>
                    <span>{exp.endDate}</span>
                    <span>{exp.description}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p>No Experience added yet.</p>
            )}
          </section>
          <section className="education">
            <h3>Education</h3>
            {formData.education && formData.education.length > 0 ? (
              <div className="flex gap-4">
                {formData.education.map((edu, index) => (
                  <div key={index}>
                    <span>{edu.degree}</span>
                    <span>{edu.institution}</span>
                    <span>{edu.graduationDate}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p>No Education added yet.</p>
            )}
          </section>
          <section className="project">
            <h3>Project</h3>
            {formData.project && formData.project.length > 0 ? (
              <div className="flex gap-4">
                {formData.project.map((proj, index) => (
                  <div key={index}>
                    <span>{proj.name}</span>
                    <span>{proj.description}</span>
                    <span>{proj.link}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p>No Project added yet.</p>
            )}
          </section>
          <section className="certification">
            <h3>Certification</h3>
            {formData.certification && formData.certification.length > 0 ? (
              <div className="flex gap-4">
                {formData.certification.map((cert, index) => (
                  <div key={index}>
                    <span>{cert.name}</span>
                    <span>{cert.issuedBy}</span>
                    <span>{cert.link}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p>No Certification added yet.</p>
            )}
          </section>
        </div>
      </div>
    </>
  */

  return (
    <>
      <div className="preview-container">
        <div className="template-selector flex gap-2 mb-3">
          {/* <button onClick={() => setSelectedTemplate("template1")}>
            Modern
          </button>
          <button onClick={() => setSelectedTemplate("template2")}>
            Classic
          </button> */}

          {Object.keys(templates).map((key) => (
            <button key={key} onClick={() => setSelectedTemplate(key)}>
              {key}
            </button>
          ))}
        </div>

        <div className="resume-preview border p-4 rounded bg-white">
          {/* {templates[selectedTemplate]} */}
          {SelectedTemplateComponent && (
            <SelectedTemplateComponent data={formData} />
          )}

        </div>
      </div>
    </>
  );
};
export default Preview;
