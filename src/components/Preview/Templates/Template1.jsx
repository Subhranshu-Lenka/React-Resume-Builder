// import React from "react"; src={URL.createObjectURL(data.photo[0])}

function Template1({ data }) {
  return (
    <>
      <div className="border-2 border-gray-200 rounded-xl preview-container p-6 bg-white shadow-lg">
        {/* Actual preview container */}
        <div className="border border-gray-100 rounded-lg p-6 bg-gradient-to-br from-white to-gray-50">
          {/* Personal Data Section */}
          <section className="personal-data mb-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  {data.name || "Your Name"}
                </h1>
                <p className="text-xl text-blue-600 font-semibold mb-3">
                  {data.headline || "Professional Headline"}
                </p>
              </div>
              {data.photo && (
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300 shadow-md">
                  <img
                    src={URL.createObjectURL(data.photo[0])}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-gray-600 mt-3">
              {data.email && (
                <div className="flex items-center gap-1">
                  <span className="text-gray-400">📧</span>
                  <span>{data.email}</span>
                </div>
              )}
              {data.profileLink && (
                <div className="flex items-center gap-1">
                  <span className="text-gray-400">🔗</span>
                  <a
                    href={data.profileLink}
                    className="text-blue-500 hover:underline"
                  >
                    Portfolio
                  </a>
                </div>
              )}
              {data.address && (
                <div className="flex items-center gap-1">
                  <span className="text-gray-400">📍</span>
                  <span>{data.address}</span>
                </div>
              )}
            </div>
          </section>

          {/* Profile Summary */}
          <section className="profile-data mb-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-justify">
                {data.profileSummary?.trim() ||
                  `Your profile summary goes here.
                  `}
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section className="skills mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 pb-2 border-b-2 border-gray-200">
              Skills
            </h3>
            {data.skills && data.skills.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm"
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
            <h3 className="text-xl font-semibold text-gray-800 mb-3 pb-2 border-b-2 border-gray-200">
              Experience
            </h3>
            {data.experience && data.experience.length > 0 ? (
              <div className="space-y-4">
                {data.experience.map((exp, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-green-500 pl-4 py-2 bg-white rounded-r-lg shadow-sm"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <h4 className="font-semibold text-gray-800 text-lg">
                        {exp.role}
                      </h4>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {exp.startDate} - {exp.endDate || "Present"}
                      </span>
                    </div>
                    <p className="text-blue-600 font-medium mb-1">
                      {exp.company}
                    </p>
                    <p className="text-gray-600 text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic">No experience added yet.</p>
            )}
          </section>

          {/* Education Section */}
          <section className="education mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 pb-2 border-b-2 border-gray-200">
              Education
            </h3>
            {data.education && data.education.length > 0 ? (
              <div className="space-y-3">
                {data.education.map((edu, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-start p-3 bg-gray-50 rounded-lg border-l-4 border-yellow-500"
                  >
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {edu.degree}
                      </h4>
                      <p className="text-gray-600">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-gray-500 bg-white px-2 py-1 rounded border">
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
            <h3 className="text-xl font-semibold text-gray-800 mb-3 pb-2 border-b-2 border-gray-200">
              Projects
            </h3>
            {data.project && data.project.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2">
                {data.project.map((proj, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {proj.name}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">
                      {proj.description}
                    </p>
                    {proj.link && (
                      <a
                        href={proj.link}
                        className="text-blue-500 text-sm hover:underline flex items-center gap-1"
                      >
                        <span>🔗</span>
                        View Project
                      </a>
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
            <h3 className="text-xl font-semibold text-gray-800 mb-3 pb-2 border-b-2 border-gray-200">
              Certifications
            </h3>
            {data.certification && data.certification.length > 0 ? (
              <div className="space-y-3">
                {data.certification.map((cert, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-gradient-to-r from-gray-50 to-white rounded-lg border"
                  >
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {cert.name}
                      </h4>
                      <p className="text-gray-600 text-sm">{cert.issuedBy}</p>
                    </div>
                    {cert.link && (
                      <a
                        href={cert.link}
                        className="text-blue-500 text-sm hover:underline mt-2 sm:mt-0"
                      >
                        Verify Certificate
                      </a>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic">
                No certifications added yet.
              </p>
            )}
          </section>
        </div>
      </div>
    </>
  );
}

export default Template1;
