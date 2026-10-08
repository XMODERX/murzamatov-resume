import type { ReactNode } from "react";

const skillGroups = [
  {
    label: "Backend",
    items: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "EF Core",
      "SQL",
      "PostgreSQL",
      "REST API",
      "LINQ",
      "DI",
    ],
  },
  {
    label: "Frontend",
    items: [
      "Angular",
      "TypeScript",
      "JavaScript",
      "RxJS",
      "HTML",
      "CSS",
      "SCSS/SASS",
      "Responsive layout",
    ],
  },
  {
    label: "Practices",
    items: [
      "OOP",
      "SOLID",
      "Unit tests",
      "Docker",
      "Git",
      "Linux",
      "Agile",
      "Scrum",
      "Kanban",
    ],
  },
];

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="mt-3.5 border-b border-[#d9d9d9] pb-1 text-[14.5px] font-normal leading-5 text-[#767676]">
      {children}
    </h2>
  );
}

function Dashes({ items }: { items: string[] }) {
  return (
    <ul className="mt-1.5 flex flex-col gap-1">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span aria-hidden="true">—</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
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
    <div className="mt-3 grid break-inside-avoid grid-cols-1 gap-1 sm:grid-cols-[188px_minmax(0,1fr)] sm:gap-x-5">
      <div>
        {when ? <p className="text-[14px] font-bold leading-5">{when}</p> : null}
        {note ? <p className="text-[13px] leading-5 text-[#767676]">{note}</p> : null}
      </div>
      <div className="text-[14px] leading-[1.45]">{children}</div>
    </div>
  );
}

export function ResumeDocumentEn() {
  return (
    <article
      lang="en"
      className="resume-sheet mx-auto w-full max-w-[210mm] bg-white px-[14mm] pb-2 pt-0 text-[#222] shadow-[0_1px_4px_rgba(0,0,0,0.08)]"
    >
      <div className="resume-topbar -mx-[14mm] -mt-[12mm] mb-6 h-12 bg-[#efefef]" />

      <header>
        <h1 className="text-[28px] font-bold leading-8 tracking-normal">
          Aleksandr Murzamatov
        </h1>
        <p className="mt-1 text-[14px] leading-5">Male, 20</p>
        <p className="mt-3 text-[14px] leading-5">
          <a href="tel:+79226505952">+7 (922) 6505952</a>
          <span> — preferred contact</span>
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
          Location: Surgut, Khanty-Mansi Autonomous Okrug — Yugra, Russia
        </p>
        <p className="text-[14px] leading-5">
          Citizenship: Russia. Work authorization: Russia
        </p>
        <p className="text-[14px] leading-5">
          Not open to relocation or business travel. Open to remote roles
        </p>
      </header>

      <section>
        <SectionTitle>Target role</SectionTitle>
        <p className="mt-2.5 text-[16px] font-bold leading-6">
          Junior C#/.NET Developer
        </p>
        <p className="mt-2 text-[14px] leading-5">Specialization:</p>
        <p className="text-[14px] leading-5">— Software developer</p>
        <p className="mt-2 text-[14px] leading-5">Employment: full-time</p>
        <p className="text-[14px] leading-5">
          Work format: on-site, remote, hybrid
        </p>
      </section>

      <section>
        <SectionTitle>Experience — 1 year 6 months</SectionTitle>

        <Entry when="January 2026 — Present" note="10 months">
          <p className="font-bold leading-5">Project development</p>
          <p className="font-bold leading-5">Product costing tool</p>
          <p className="mt-1 text-[13px] leading-5 text-[#767676]">
            Project engagement, alongside server administration
          </p>
          <p className="mt-2">
            Built for a small trading sole proprietorship, where the owner and
            one employee calculate cost from the product list, purchase price,
            materials, and labor. I confirmed the data they needed and built
            the costing tool myself, replacing the manual calculation.
          </p>
          <Dashes
            items={[
              "Handed the tool to the owner and the employee. One item now takes a few minutes instead of about an hour by hand.",
              "Designed the data model and REST API. Implemented the calculation in C# and ASP.NET Core, and stored data in PostgreSQL with EF Core.",
              "Built the input screen in Angular with a responsive layout so cost can be calculated from a phone.",
              "Covered the formulas with unit tests and, before handover, checked the results against a manual calculation on control items.",
            ]}
          />
        </Entry>

        <Entry when="September 2025 — Present" note="1 year 2 months">
          <p className="font-bold leading-5">
            Server and plugin administration
          </p>
          <p className="mt-1 text-[13px] leading-5 text-[#767676]">
            Part-time, in parallel with project development
          </p>
          <p className="mt-2">
            Administered Linux servers and maintained plugins: updated
            configuration and ran services in Docker. After each release I
            checked that the service worked, and I kept configuration changes
            in Git so a failed check could be rolled back.
          </p>
        </Entry>

        <Entry when="April 2025 — December 2025" note="9 months">
          <p className="font-bold leading-5">Project administration</p>
          <p className="mt-1 text-[13px] leading-5 text-[#767676]">
            Project work, April–December 2025
          </p>
          <p className="mt-2">
            Ran small C# and .NET projects: split requirements into tasks and
            carried changes through to release. Moved the work in short Agile
            iterations with Scrum and Kanban.
          </p>
        </Entry>
      </section>

      <section className="break-inside-avoid">
        <SectionTitle>Education</SectionTitle>
        <p className="mt-2.5 text-[16px] font-bold leading-6">
          Vocational diploma
        </p>
        <Entry when="2026" note="Vocational">
          <p className="font-bold leading-5">
            Surgut Institute of Economics, Management and Law
          </p>
          <p>Information Systems and Programming, Programmer</p>
        </Entry>
      </section>

      <section className="break-inside-avoid">
        <SectionTitle>Skills</SectionTitle>
        <div className="mt-3 grid grid-cols-1 gap-1 sm:grid-cols-[148px_minmax(0,1fr)] sm:gap-x-6">
          <p className="text-[14px] leading-5 text-[#767676]">Languages</p>
          <div className="text-[14px] leading-5">
            <p>Russian — Native</p>
            <p>English — A2 — Elementary</p>
          </div>
        </div>
        <div className="mt-2.5 flex flex-col gap-1.5">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="grid grid-cols-1 gap-1 sm:grid-cols-[148px_minmax(0,1fr)] sm:gap-x-6"
            >
              <p className="text-[14px] leading-5 text-[#767676]">{group.label}</p>
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-sm bg-[#ececec] px-2 py-1 text-[13px] leading-4 text-[#333]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="break-inside-avoid">
        <SectionTitle>Additional information</SectionTitle>
        <div className="mt-3 grid grid-cols-1 gap-1 sm:grid-cols-[148px_minmax(0,1fr)] sm:gap-x-6">
          <p className="text-[14px] leading-5 text-[#767676]">About</p>
          <div className="flex flex-col gap-3 text-[14px] leading-[1.45]">
            <p>
              Junior C#/.NET developer with 1.5 years of experience. I carry a
              task from requirements and design through implementation,
              verification, and release. With C#, ASP.NET Core, and Angular I
              built a product costing tool and cut the calculation for one item
              from about an hour to a few minutes.
            </p>
            <div>
              <p>
                phone: <a href="tel:+79226505952">+7 922 650-59-52</a>
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
        Aleksandr Murzamatov • Resume updated 8 October 2026
      </footer>
    </article>
  );
}
