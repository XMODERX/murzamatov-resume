"use client";

import { Button } from "@/components/ui/button";

export function PrintToolbar() {
  return (
    <div className="no-print mx-auto flex w-full max-w-[860px] flex-col gap-3 px-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm leading-6 text-muted-foreground">
        Резюме в формате hh.ru. Фотографии нет. Чтобы сохранить файл, откройте
        печать и выберите «Сохранить как PDF».
      </p>
      <Button
        type="button"
        variant="outline"
        className="min-h-11 shrink-0 px-4"
        data-print-resume=""
      >
        Сохранить PDF
      </Button>
    </div>
  );
}
