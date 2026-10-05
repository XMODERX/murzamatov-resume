import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";

const skills = [
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "SASS",
  "Angular",
  "Python",
  "C#",
  "1С",
  "SQL",
  "MySQL",
  "PostgreSQL",
  "SQLite",
  "REST API",
  "HTTP",
  "ООП",
  "Linux",
  "Windows",
  "Agile",
  "Scrum",
  "Kanban",
];

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="mt-8 text-[22px] font-bold leading-7 tracking-normal text-black">
      {children}
    </h2>
  );
}

function Fact({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-1 sm:grid-cols-[210px_minmax(0,1fr)] sm:gap-6">
      <div className="text-[16px] leading-6 text-black">{label}</div>
      <div className="text-[16px] leading-6 text-black">{children}</div>
    </div>
  );
}

export function ResumeDocument() {
  return (
    <article className="resume-sheet mx-auto w-full max-w-[860px] bg-white px-5 py-8 text-black sm:px-10 sm:py-10">
      <header>
        <h1 className="text-[32px] font-bold leading-[38px] tracking-normal">
          Мурзаматов Александр Кабылжанович
        </h1>
        <p className="mt-3 text-[16px] leading-6">Мужчина, 20 лет, холост, детей нет</p>
        <p className="mt-3 text-[16px] leading-7">
          <a href="tel:+79226505952">+7 (922) 650-59-52</a>
          <span> — предпочитаемый способ связи</span>
          <span className="text-[#767676]"> • </span>
          <span>Telegram: </span>
          <a href="https://t.me/moderzx">@moderzx</a>
          <span className="text-[#767676]"> • </span>
          <span>ВКонтакте: </span>
          <a href="https://vk.ru/moderzx">vk.ru/moderzx</a>
        </p>
        <p className="text-[16px] leading-6">
          <a href="mailto:Ashyrovsasha19@gmail.com">Ashyrovsasha19@gmail.com</a>
        </p>
        <p className="mt-3 text-[16px] leading-6">
          Проживает: Сургут, Ханты-Мансийский АО — Югра
        </p>
        <p className="text-[16px] leading-6">Гражданство: Россия</p>
        <p className="text-[16px] leading-6">
          Не готов к переезду, не готов к командировкам
        </p>
      </header>

      <section>
        <SectionTitle>Желаемая должность и зарплата</SectionTitle>
        <p className="mt-3 text-[20px] font-bold leading-7">Программист</p>
        <p className="mt-3 text-[16px] leading-6">Специализации:</p>
        <p className="text-[16px] leading-6">— Программист, разработчик</p>
        <p className="mt-3 text-[16px] leading-6">
          Тип занятости: полная занятость
        </p>
        <p className="text-[16px] leading-6">График работы: полный день</p>
        <p className="text-[16px] leading-6">
          Формат работы: на месте работодателя
        </p>
      </section>

      <section>
        <SectionTitle>Опыт работы</SectionTitle>
        <p className="mt-3 text-[16px] leading-6">
          Коммерческий опыт работы не указан. Ниже — знания и учебная
          подготовка, на которые опираюсь при поиске первой работы
          программистом.
        </p>

        <h3 className="mt-5 text-[16px] font-bold leading-6">
          Языки программирования
        </h3>
        <ul className="mt-2 list-disc pl-5 text-[16px] leading-6">
          <li>Базовые знания Python, C# и 1С.</li>
          <li>JavaScript.</li>
          <li>Понимание основных алгоритмов и структур данных.</li>
          <li>
            Знание принципов объектно-ориентированного программирования
            (ООП).
          </li>
        </ul>

        <h3 className="mt-5 text-[16px] font-bold leading-6">Веб-разработка</h3>
        <ul className="mt-2 list-disc pl-5 text-[16px] leading-6">
          <li>HTML5, CSS3, SASS.</li>
          <li>Адаптивная вёрстка.</li>
          <li>Основы Angular и TypeScript.</li>
          <li>Базовое понимание работы HTTP и REST API.</li>
        </ul>

        <h3 className="mt-5 text-[16px] font-bold leading-6">
          Работа с базами данных
        </h3>
        <ul className="mt-2 list-disc pl-5 text-[16px] leading-6">
          <li>
            Создание таблиц, запросы SELECT, INSERT, UPDATE и DELETE.
          </li>
          <li>Работа с MySQL, PostgreSQL или SQLite.</li>
        </ul>

        <h3 className="mt-5 text-[16px] font-bold leading-6">
          Дополнительные знания
        </h3>
        <ul className="mt-2 list-disc pl-5 text-[16px] leading-6">
          <li>Основы работы с операционными системами Windows и Linux.</li>
          <li>
            Понимание жизненного цикла разработки программного обеспечения
            (SDLC).
          </li>
          <li>Основы Agile: Scrum и Kanban.</li>
          <li>Навыки работы с технической документацией.</li>
        </ul>
      </section>

      <section>
        <SectionTitle>Образование</SectionTitle>
        <p className="mt-3 text-[16px] leading-6">Среднее профессиональное</p>
        <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-6">
          <p className="text-[16px] font-bold leading-6">2026</p>
          <div>
            <p className="text-[16px] leading-6">Среднее профессиональное</p>
            <p className="text-[16px] font-bold leading-6">
              Сургутский институт экономики, управления и права
            </p>
            <p className="text-[16px] leading-6">
              Информационные системы и программирование, Программист
            </p>
            <p className="text-[16px] leading-6">Очная форма обучения</p>
          </div>
        </div>
      </section>

      <section>
        <SectionTitle>Навыки</SectionTitle>
        <div className="mt-4 flex flex-col gap-4">
          <Fact label="Знание языков">
            <p>Русский — родной</p>
            <p>Английский</p>
          </Fact>
          <Fact label="Навыки">
            <ul className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li key={skill}>
                  <Badge
                    variant="secondary"
                    className="h-auto min-h-8 whitespace-normal px-2.5 py-1 text-sm font-normal"
                  >
                    {skill}
                  </Badge>
                </li>
              ))}
            </ul>
          </Fact>
        </div>
      </section>

      <section>
        <SectionTitle>Дополнительная информация</SectionTitle>
        <div className="mt-4">
          <Fact label="Обо мне">
            <div className="flex flex-col gap-3">
              <p>
                Ищу первую работу программистом на полную занятость, полный
                день, в Сургуте. К переезду и командировкам не готов.
              </p>
              <p>
                Системно и аналитически подхожу к задачам, быстро осваиваю
                новые технологии и довожу работу до результата. Внимателен к
                качеству кода, стандартам разработки и срокам. Умею читать
                техническую документацию и применять её на практике.
              </p>
              <p>Медицинская книжка есть.</p>
              <p>Буду рад познакомиться.</p>
            </div>
          </Fact>
        </div>
        <div className="mt-5 flex flex-col gap-1 text-[16px] leading-6">
          <p>
            Телефон: <a href="tel:+79226505952">+7 (922) 650-59-52</a>
          </p>
          <p>
            Телеграм: <a href="https://t.me/moderzx">@moderzx</a>
          </p>
          <p>
            ВКонтакте: <a href="https://vk.ru/moderzx">https://vk.ru/moderzx</a>
          </p>
          <p>
            GitHub: <a href="https://github.com/XMODERX">https://github.com/XMODERX</a>
          </p>
          <p>
            Почта:{" "}
            <a href="mailto:Ashyrovsasha19@gmail.com">
              Ashyrovsasha19@gmail.com
            </a>
          </p>
        </div>
      </section>

      <footer className="mt-10 border-t border-[#e6e6e6] pt-4 text-[13px] leading-5 text-[#767676]">
        Мурзаматов Александр • Резюме обновлено 5 октября 2026
      </footer>
    </article>
  );
}
