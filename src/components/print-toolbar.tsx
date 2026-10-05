"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PrintToolbar() {
  return (
    <div className="no-print mx-auto flex w-full max-w-[210mm] flex-col gap-3 px-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm leading-6 text-muted-foreground">
        Готовый файл резюме. На странице тот же вид, что в PDF.
      </p>
      <div className="flex flex-wrap gap-2">
        <a
          href="/murzamatov-aleksandr.pdf"
          download="Мурзаматов_Александр_резюме.pdf"
          className={cn(buttonVariants({ variant: "default" }), "min-h-11 px-4")}
        >
          Скачать PDF
        </a>
        <Button
          type="button"
          variant="outline"
          className="min-h-11 shrink-0 px-4"
          data-print-resume=""
        >
          Печать
        </Button>
      </div>
    </div>
  );
}
