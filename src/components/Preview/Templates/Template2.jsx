import React from "react";

function Template2({data}) {
    return (
      <>
  <div className="border border-gray-300 preview-container p-8 bg-white shadow-sm">
    {/* Header Section */}
    <section className="personal-data border-b-2 border-gray-800 pb-4 mb-6">
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">
          {data.name || "John Doe"}
        </h1>
        <p className="text-xl text-gray-700 font-medium">
          {data.headline || "Professional Headline"}
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
        {data.email && (
          <div className="flex items-center">
            <span className="mr-1">📧</span>
            <span>{data.email}</span>
          </div>
        )}
        {data.profileLink && (
          <div className="flex items-center">
            <span className="mr-1">🔗</span>
            <span>{data.profileLink}</span>
          </div>
        )}
        {data.address && (
          <div className="flex items-center">
            <span className="mr-1">📍</span>
            <span>{data.address}</span>
          </div>
        )}
      </div>
    </section>

    {/* Profile Summary */}
    <section className="profile-data mb-6">
      <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-2 border-b border-gray-300 pb-1">
        Professional Summary
      </h3>
      <p className="text-gray-700 leading-relaxed text-justify">
        {data.profileSummary ||
          "Hard-working and results-driven professional with 5+ years of experience in [Your Field]. Proven ability to [Key Skill 1] and [Key Skill 2], with a track record of [Key Achievement]. Seeking to leverage my skills to contribute to a [Type of Company] organization"}
      </p>
    </section>

    {/* Skills Section */}
    <section className="skills mb-6">
      <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-3 border-b border-gray-300 pb-1">
        Skills
      </h3>
      {data.skills && data.skills.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, index) => (
            <span 
              key={index}
              className="bg-gray-100 border border-gray-300 text-gray-800 px-3 py-1 rounded text-sm"
            >
              {skill.name}
            </span>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 italic">No skills added yet.</p>
      )}
    </section>

    {/* Experience Section */}
    <section className="experience mb-6">
      <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-3 border-b border-gray-300 pb-1">
        Professional Experience
      </h3>
      {data.experience && data.experience.length > 0 ? (
        <div className="space-y-4">
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-semibold text-gray-900 text-lg">{exp.role}</h4>
                <span className="text-gray-600 text-sm">
                  {exp.startDate} - {exp.endDate || "Present"}
                </span>
              </div>
              <p className="text-gray-700 font-medium mb-2">{exp.company}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 italic">No experience added yet.</p>
      )}
    </section>

    {/* Education Section */}
    <section className="education mb-6">
      <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-3 border-b border-gray-300 pb-1">
        Education
      </h3>
      {data.education && data.education.length > 0 ? (
        <div className="space-y-3">
          {data.education.map((edu, index) => (
            <div key={index} className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                <p className="text-gray-700">{edu.institution}</p>
              </div>
              <span className="text-gray-600 text-sm">
                {edu.graduationDate}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 italic">No education added yet.</p>
      )}
    </section>

    {/* Projects Section */}
    <section className="project mb-6">
      <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-3 border-b border-gray-300 pb-1">
        Projects
      </h3>
      {data.project && data.project.length > 0 ? (
        <div className="space-y-3">
          {data.project.map((proj, index) => (
            <div key={index} className="mb-3">
              <h4 className="font-semibold text-gray-900">{proj.name}</h4>
              <p className="text-gray-600 text-sm mb-1">{proj.description}</p>
              {proj.link && (
                <p className="text-gray-500 text-sm">Link: {proj.link}</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 italic">No projects added yet.</p>
      )}
    </section>

    {/* Certifications Section */}
    <section className="certification">
      <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-3 border-b border-gray-300 pb-1">
        Certifications
      </h3>
      {data.certification && data.certification.length > 0 ? (
        <div className="space-y-2">
          {data.certification.map((cert, index) => (
            <div key={index} className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                <p className="text-gray-600 text-sm">{cert.issuedBy}</p>
              </div>
              {cert.link && (
                <span className="text-gray-500 text-sm">Verify</span>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 italic">No certifications added yet.</p>
      )}
    </section>
  </div>
</>
  )
}

export default Template2;
