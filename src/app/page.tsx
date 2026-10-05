import { PrintToolbar } from "@/components/print-toolbar";
import { ResumeDocument } from "@/components/resume-document";

const printOnClick = `
document.addEventListener("click", function (event) {
  var target = event.target && event.target.closest && event.target.closest("[data-print-resume]");
  if (!target) return;
  window.print();
});
`;

export default function Home() {
  return (
    <div className="resume-page min-h-full bg-[#eef1f4] pb-12">
      <script dangerouslySetInnerHTML={{ __html: printOnClick }} />
      <PrintToolbar />
      <div className="px-0 pt-4 sm:px-4">
        <ResumeDocument />
      </div>
    </div>
  );
}
