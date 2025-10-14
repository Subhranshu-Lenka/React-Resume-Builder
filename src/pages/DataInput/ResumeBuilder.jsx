import MainForm from "../../components/Forms/ResumeBuilderForm/MainForm";
import Preview from "../../components/Preview/Preview";
function ResumeBuilder() {
  return (
    <div className="grid grid-cols-2 gap-6 p-4 min-h-[90vh]">
      <Preview />
      <MainForm />
    </div>
  );
}

export default ResumeBuilder;
