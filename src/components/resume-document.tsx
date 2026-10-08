import type { ReactNode } from "react";

const skills = [
  "C#",
  ".NET",
  "ASP.NET Core",
  "EF Core",
  "SQL",
  "PostgreSQL",
  "REST API",
  "LINQ",
  "DI",
  "Docker",
  "Git",
  "ООП",
  "SOLID",
  "Unit-тесты",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "SCSS/SASS",
  "Angular",
  "RxJS",
  "Адаптивная вёрстка",
  "Linux",
  "Agile",
  "Scrum",
  "Kanban",
];

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="mt-[18px] border-b border-[#d9d9d9] pb-1 text-[14.5px] font-normal leading-5 text-[#767676]">
      {children}
    </h2>
  );
}

function Entry({
  when,
  note,
  children,
}: {
  when?: string;
  note?: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-3.5 grid grid-cols-1 gap-1 sm:grid-cols-[148px_minmax(0,1fr)] sm:gap-x-6">
      <div>
        {when ? <p className="text-[14px] font-bold leading-5">{when}</p> : null}
        {note ? <p className="text-[13px] leading-5 text-[#767676]">{note}</p> : null}
      </div>
      <div className="text-[14px] leading-[1.45]">{children}</div>
    </div>
  );
}

export function ResumeDocument() {
  return (
    <article className="resume-sheet mx-auto w-full max-w-[210mm] bg-white px-[14mm] pb-8 pt-0 text-[#222] shadow-[0_1px_4px_rgba(0,0,0,0.08)]">
      <div className="resume-topbar -mx-[14mm] -mt-[12mm] mb-6 h-12 bg-[#efefef]" />

      <header>
        <h1 className="text-[28px] font-bold leading-8 tracking-normal">
          Мурзаматов Александр Кабылжанович
        </h1>
        <p className="mt-1 text-[14px] leading-5">Мужчина, 20 лет</p>
        <p className="mt-3 text-[14px] leading-5">
          <a href="tel:+79226505952">+7 (922) 6505952</a>
          <span> — предпочитаемый способ связи</span>
        </p>
        <p className="text-[14px] leading-5">
          <a href="mailto:Ashyrovsasha19@gmail.com">Ashyrovsasha19@gmail.com</a>
        </p>
        <p className="text-[14px] leading-5">
          telegram: <a href="https://t.me/moderzx">@moderzx</a>
        </p>
        <p className="text-[14px] leading-5">
          vk: <a href="https://vk.ru/moderzx">https://vk.ru/moderzx</a>
        </p>
        <p className="text-[14px] leading-5">
          github: <a href="https://github.com/XMODERX">https://github.com/XMODERX</a>
        </p>
        <p className="mt-3 text-[14px] leading-5">
          Проживает: Сургут, Ханты-Мансийский АО — Югра
        </p>
        <p className="text-[14px] leading-5">
          Гражданство: Россия, есть разрешение на работу: Россия
        </p>
        <p className="text-[14px] leading-5">
          Не готов к переезду, не готов к командировкам
        </p>
      </header>

      <section>
        <SectionTitle>Желаемая должность и зарплата</SectionTitle>
        <p className="mt-2.5 text-[16px] font-bold leading-6">
          Junior C#/.NET-разработчик
        </p>
        <p className="mt-2 text-[14px] leading-5">Специализации:</p>
        <p className="text-[14px] leading-5">— Программист, разработчик</p>
        <p className="mt-2 text-[14px] leading-5">Тип занятости: полная занятость</p>
        <p className="text-[14px] leading-5">
          Формат работы: на месте работодателя, удалённо, гибрид
        </p>
      </section>

      <section>
        <SectionTitle>Опыт работы — 1 год 6 месяцев</SectionTitle>

        <Entry when="2026" note="проект">
          <p className="font-bold leading-5">Проектная разработка</p>
          <p className="font-bold leading-5">
            Инструмент калькуляции себестоимости товара
          </p>
          <p className="mt-2">
            Проект для предприятия: инструмент калькуляции себестоимости
            товара по данным предприятия.
          </p>
          <p className="mt-2">
            Создал инструмент калькуляции себестоимости товара по данным
            предприятия и автоматизировал процессы расчёта себестоимости.
          </p>
        </Entry>

        <Entry when="2026" note="проект">
          <p className="font-bold leading-5">Администрирование проектов</p>
          <p className="mt-2">Администрировал проекты.</p>
        </Entry>

        <Entry when="2026" note="проект">
          <p className="font-bold leading-5">
            Администрирование и поддержка серверов и плагинов
          </p>
          <p className="mt-2">
            Администрировал серверы и поддерживал плагины.
          </p>
        </Entry>
      </section>

      <section className="break-inside-avoid">
        <SectionTitle>Образование</SectionTitle>
        <p className="mt-2.5 text-[16px] font-bold leading-6">
          Среднее специальное
        </p>
        <Entry when="2026" note="Среднее специальное">
          <p className="font-bold leading-5">
            Сургутский институт экономики, управления и права
          </p>
          <p>Информационные системы и программирование, Программист</p>
        </Entry>
      </section>

      <section className="break-inside-avoid">
        <SectionTitle>Навыки</SectionTitle>
        <div className="mt-3 grid grid-cols-1 gap-1 sm:grid-cols-[148px_minmax(0,1fr)] sm:gap-x-6">
          <p className="text-[14px] leading-5 text-[#767676]">Знание языков</p>
          <div className="text-[14px] leading-5">
            <p>Русский — Родной</p>
            <p>Английский — A2 — Элементарный</p>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-[148px_minmax(0,1fr)] sm:gap-x-6">
          <p className="text-[14px] leading-5 text-[#767676]">Навыки</p>
          <ul className="flex flex-wrap gap-1.5">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-sm bg-[#ececec] px-2 py-1 text-[13px] leading-4 text-[#333]"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="break-inside-avoid">
        <SectionTitle>Дополнительная информация</SectionTitle>
        <div className="mt-3 grid grid-cols-1 gap-1 sm:grid-cols-[148px_minmax(0,1fr)] sm:gap-x-6">
          <p className="text-[14px] leading-5 text-[#767676]">Обо мне</p>
          <div className="flex flex-col gap-3 text-[14px] leading-[1.45]">
            <p>
              Программист с опытом 1,5 года. Самостоятельно веду задачи от
              разбора требований и проектирования решения до реализации,
              поддержки и релиза. Создал инструмент калькуляции себестоимости
              товара и автоматизировал расчёты.
            </p>
            <div>
              <p>
                num: <a href="tel:+79226505952">+7 922 650-59-52</a>
              </p>
              <p>
                tg: <a href="https://t.me/moderzx">@moderzx</a>
              </p>
              <p>
                vk: <a href="https://vk.ru/moderzx">https://vk.ru/moderzx</a>
              </p>
              <p>
                email:{" "}
                <a href="mailto:Ashyrovsasha19@gmail.com">
                  Ashyrovsasha19@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="screen-footer mt-8 text-[11px] leading-4 text-[#b0b0b0]">
        Мурзаматов Александр • Резюме обновлено 8 октября 2026
      </footer>
    </article>
  );
}
