import { PrintToolbar } from "@/components/print-toolbar";
import { ResumeDocument } from "@/components/resume-document";

export default function Home() {
  return (
    <div className="resume-page min-h-full bg-[#eef1f4] pb-12">
      <PrintToolbar />
      <div className="px-0 pt-4 sm:px-4">
        <ResumeDocument />
      </div>
    </div>
  );
}
