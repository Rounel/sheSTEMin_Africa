"use client"

import { RevealWrapper } from "./reveal-wrapper"
import Image from "next/image"
import { useTranslation } from "@/contexts/language-context"

export function ContributeSection() {
  const { t } = useTranslation()

  return (
    <section className="w-full py-14  text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-pink-500 gap-8 items-center rounded-4xl p-15">
          <RevealWrapper delay={0.1} direction="left">
            <div className="s">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 w-52 ">{t("contribute.title")}</h2>
              <p className="text-s: text-pink-100 mb-8">{t("contribute.description")}</p>
              <button className="bg-white text-pink-600 px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:bg-pink-100 transition-colors">
                {t("contribute.button")}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={0.3} direction="right">
            <div className="relative">
              <div className="absolute -top-6 -right-6">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                  className="opacity-20"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <Image
                src="/placeholder.svg?height=400&width=500&query=African woman volunteer with VOLUNTEER t-shirt"
                alt="Volunteer"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
