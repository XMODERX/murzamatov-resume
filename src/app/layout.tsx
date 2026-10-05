import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Мурзаматов Александр — Программист",
  description:
    "Резюме Мурзаматова Александра Кабылжановича: программист, Сургут. Телефон, Telegram, ВКонтакте и GitHub.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#eef1f4] font-sans text-black">
        {children}
      </body>
    </html>
  );
}
