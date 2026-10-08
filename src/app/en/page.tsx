import type { Metadata } from "next";
import { PrintToolbar } from "@/components/print-toolbar";
import { ResumeDocumentEn } from "@/components/resume-document-en";

const printOnClick = `
document.addEventListener("click", function (event) {
  var target = event.target && event.target.closest && event.target.closest("[data-print-resume]");
  if (!target) return;
  window.print();
});
`;

export const metadata: Metadata = {
  title: "Aleksandr Murzamatov — Junior C#/.NET Developer",
  description:
    "Resume of Aleksandr Murzamatov, junior C#/.NET developer in Surgut. Remote, hybrid, or on-site.",
};

export default function EnglishResumePage() {
  return (
    <div className="resume-page min-h-full bg-[#eef1f4] pb-12">
      <script dangerouslySetInnerHTML={{ __html: printOnClick }} />
      <PrintToolbar
        description="English resume for companies outside Russia. Same layout as the PDF."
        pdfHref="/murzamatov-aleksandr-en.pdf"
        downloadName="Murzamatov_Aleksandr_resume.pdf"
        downloadLabel="Download PDF"
        printLabel="Print"
        alternateHref="/"
        alternateLabel="Русская версия"
      />
      <div className="px-0 pt-4 sm:px-4">
        <ResumeDocumentEn />
      </div>
    </div>
  );
}
