import SelfResizableTextArea from "../../../TextArea/SelfResizableTextArea";

function ProfileInfoForm() {
  return (
    <>
      <h2 className="text-xl font-semibold mb-3">Profile Summary</h2>
      <SelfResizableTextArea
        valueTitle={"profileSummary"}
        placeholderValue={
          "Enter a concise profile summary (e.g., 3–4 lines about your experience and skills)."
        }
        isRequired={true}
      />
    </>
  );
}

export default ProfileInfoForm;
