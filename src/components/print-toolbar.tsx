"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PrintToolbar({
  description = "Готовый файл резюме. На странице тот же вид, что в PDF.",
  pdfHref = "/murzamatov-aleksandr.pdf",
  downloadName = "Мурзаматов_Александр_резюме.pdf",
  downloadLabel = "Скачать PDF",
  printLabel = "Печать",
  alternateHref = "/en",
  alternateLabel = "English",
}: {
  description?: string;
  pdfHref?: string;
  downloadName?: string;
  downloadLabel?: string;
  printLabel?: string;
  alternateHref?: string;
  alternateLabel?: string;
}) {
  return (
    <div className="no-print mx-auto flex w-full max-w-[210mm] flex-col gap-3 px-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm leading-6 text-muted-foreground">{description}</p>
      <div className="flex flex-wrap gap-2">
        <a
          href={alternateHref}
          className={cn(buttonVariants({ variant: "outline" }), "min-h-11 px-4")}
        >
          {alternateLabel}
        </a>
        <a
          href={pdfHref}
          download={downloadName}
          className={cn(buttonVariants({ variant: "default" }), "min-h-11 px-4")}
        >
          {downloadLabel}
        </a>
        <Button
          type="button"
          variant="outline"
          className="min-h-11 shrink-0 px-4"
          data-print-resume=""
        >
          {printLabel}
        </Button>
      </div>
    </div>
  );
}
