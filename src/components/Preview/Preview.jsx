import { useFormContext, useWatch } from "react-hook-form";
function Preview() {
  const { control } = useFormContext();
  const formData = useWatch({ control }); // this hook watches every form field.

  return (
    <>
      <div className="border-2 rounded-xl preview-container p-4">
        {/* Actual preview container */}
        <div className="border p-4">
          <section className="personal-data">
            <p>
              {/* name,email,photo,headline, profile-link, address */}
              <strong>{formData.name || "John Died"}</strong>
            </p>
            <p>
              <span>{formData.email || "Email Address"}</span>
              <span>{formData.profileLink || "pro"}</span>
              <span></span>
            </p>
          </section>

          <section className="profile-data">
            
          </section>
          <section className="skills"></section>
          <section className="experience"></section>
          <section className="education"></section>
          <section className="project"></section>
          <section className="certification"></section>
        </div>
      </div>
    </>
  );
}

export default Preview;
