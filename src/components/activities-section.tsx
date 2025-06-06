"use client"

import { RevealWrapper } from "./reveal-wrapper"
import Image from "next/image"
import { useTranslation } from "@/contexts/language-context"
import { MoveUpRight } from "lucide-react"

export function ActivitiesSection() {
  const { t } = useTranslation()

  // Définir les tableaux directement dans le composant
  const networkingItems = [
    t("activities.networking.items.0"),
    t("activities.networking.items.1"),
    t("activities.networking.items.2"),
  ]

  const coachingItems = [
    t("activities.coaching.items.0"),
    t("activities.coaching.items.1"),
    t("activities.coaching.items.2"),
    t("activities.coaching.items.3"),
  ]

  const grantItems = [
    t("activities.grant_advice.items.0"),
    t("activities.grant_advice.items.1"),
    t("activities.grant_advice.items.2"),
    t("activities.grant_advice.items.3"),
    t("activities.grant_advice.items.4"),
  ]

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <RevealWrapper delay={0.1} direction="up" className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl  font-bold">{t("activities.title")}</h2>
        </RevealWrapper>

        <div className="grid grid-cols-1 gap-12 md:gap-16">
          <RevealWrapper delay={0.3} direction="left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-4xl px-6 py-10">
              <div className="">
                <Image
                  src="/e2.jpg"
                  alt="Networking event"
                  width={300}
                  height={300}
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl lg:text-5xl font-bold mb-6">{t("activities.networking.title")}</h3>
                <ul className="space-y-4">
                  {networkingItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 bg-pink-600 rounded-full p-1 text-white">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-fit mt-6 bg-pink-600 text-white px-6 py-2 rounded-full font-medium inline-flex items-center gap-4 hover:bg-pink-700 transition-colors">
                  {t("activities.learnMore")}
                  <div className="rounded-full bg-white p-2">
                    <MoveUpRight className="text-pink-600" />
                  </div>
                </button>
              </div>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={0.3} direction="right">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-4xl px-6 py-10">
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl lg:text-5xl font-bold mb-6">{t("activities.coaching.title")}</h3>
                <ul className="space-y-4">
                  {coachingItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 bg-pink-600 rounded-full p-1 text-white">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-fit mt-6 bg-pink-600 text-white px-6 py-2 rounded-full font-medium inline-flex items-center gap-4 hover:bg-pink-700 transition-colors">
                  {t("activities.learnMore")}
                  <div className="rounded-full bg-white p-2">
                    <MoveUpRight className="text-pink-600" />
                  </div>
                </button>
              </div>
              <div className="">
                <Image
                  src="/e2.jpg"
                  alt="Coaching session"
                  width={300}
                  height={300}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={0.3} direction="left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-4xl px-6 py-10">
              <div className="">
                <Image
                  src="/e2.jpg"
                  alt="Networking event"
                  width={300}
                  height={300}
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl lg:text-5xl font-bold mb-6">{t("activities.grant_advice.title")}</h3>
                <ul className="space-y-4">
                  {grantItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 bg-pink-600 rounded-full p-1 text-white">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-fit mt-6 bg-pink-600 text-white px-6 py-2 rounded-full font-medium inline-flex items-center gap-4 hover:bg-pink-700 transition-colors">
                  {t("activities.learnMore")}
                  <div className="rounded-full bg-white p-2">
                    <MoveUpRight className="text-pink-600" />
                  </div>
                </button>
              </div>
            </div>
          </RevealWrapper>

        </div>
      </div>
    </section>
  )
}
