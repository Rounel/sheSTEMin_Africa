"use client"

import { RevealWrapper } from "./reveal-wrapper"
import Image from "next/image"
import { useTranslation } from "@/contexts/language-context"

export function EventsSection() {
  const { t } = useTranslation()

  const events = [
    {
      title: "L'essentiel pour débuter sur LinkedIn",
      date: "15 Jun 2023",
      image: "/e1.jpg",
    },
    {
      title: "Boosting Your Professional Experience",
      date: "22 Jun 2023",
      image: "/e1.jpg",
    },
    {
      title: "Mastering Tech Career Skills",
      date: "29 Jun 2023",
      image: "/e1.jpg",
    },
    {
      title: "Women in STEM Leadership",
      date: "06 Jul 2023",
      image: "/e1.jpg",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-pink-50">
      <div className=" mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center mb-12">
          <RevealWrapper delay={0.1} direction="up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">{t("events.title")}</h2>
          </RevealWrapper>

          <RevealWrapper delay={0.2} direction="left">
            <a
              href="#"
              className="text-pink-600 font-medium flex items-center gap-2 hover:text-pink-700 transition-colors"
            >
              {t("events.seeAll")}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </RevealWrapper>
        </div>

        <div className="flex flex-row flex-nowrap overflow-x-auto gap-6 pb-5 h-96">
          {[...events, ...events, ...events].map((event, index) => (
            <RevealWrapper key={index} delay={0.3 + index * 0.1} direction="up">
              <div className="shadow-md p-4 rounded-4xl overflow-hidden hover:shadow-md transition-shadow min-w-80 bg-white h-96 flex flex-col justify-between">
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                  <div className="text-xs text-gray-500 mb-2">{event.date}</div>
                  {/* <a
                    href="#"
                    className="text-pink-600 text-sm font-medium flex items-center gap-1 hover:text-pink-700 transition-colors"
                  >
                    {t("events.register")}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a> */}
                </div>
                <div className="relative h-52 rounded-2xl overflow-hidden">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
