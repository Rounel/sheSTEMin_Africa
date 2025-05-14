"use client"

import { RevealWrapper } from "./reveal-wrapper"
import Image from "next/image"
import { useTranslation } from "@/contexts/language-context"
import { MoveUpRight } from "lucide-react"

export function ChallengesSection() {
  const { t } = useTranslation()

  const challenges = [
    {
      title: t("challenges.imbalance.title"),
      percentage: "35%",
      description: t("challenges.imbalance.description"),
    },
    {
      title: t("challenges.nonValuation.title"),
      percentage: "30%",
      description: t("challenges.nonValuation.description"),
    },
    {
      title: t("challenges.scarcity.title"),
      percentage: "165K+",
      description: t("challenges.scarcity.description"),
    },
    {
      title: t("challenges.lossOfMoney.title"),
      percentage: "$30,000B",
      description: t("challenges.lossOfMoney.description"),
    },
  ]

  return (
    <section className="w-full max-w-7xl mx-auto py-16 bg-slate-50">
      <div className="mx-auto px-4 md:px-8">
        <RevealWrapper delay={0.1} direction="up" className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">{t("challenges.title")}</h2>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
            {challenges.map((challenge, index) => (
              <RevealWrapper key={index} delay={0.2 + index * 0.1} direction="up">
                <div className="rounded-md pt-4 bg-white p-5 justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-px w-6 bg-pink-300 flex-1"></div>
                    <span className="text-gray-900 uppercase text-lg font-medium">{challenge.title}</span>
                    <div className="h-px w-6 bg-pink-300 flex-1"></div>
                  </div>
                  <div className="text-6xl font text-center text-pink-600 mb-2">{challenge.percentage}</div>
                  <p className="text-sm text-gray-600 w-72">{challenge.description}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>

          <div className="flex items-center justify-center relative">
            <RevealWrapper delay={0.6} direction="left">
              <div className="relative">
                <Image
                  src="/e2.jpg"
                  alt="African woman in science lab"
                  width={500}
                  height={400}
                  className="rounded-lg"
                />
                <div className="absolute -bottom-4 -left-4 text-pink-400 opacity-50">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>

        <RevealWrapper delay={0.7} direction="up" className="mt-16">
          <div className="bg-pink-600 text-white p-8 md:p-12 rounded-4xl text-center relative overflow-hidden w-full">
            <div className="absolute top-4 right-4 text-pink-400 opacity-30">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-4xl lg:py-6 lg:px-36 font-medium mb-6 flex justify-center items-center">
                {t("challenges.blogCta")}
            </h3>
            <button className="bg-white text-pink-600 px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:bg-pink-100 transition-colors">
              {t("challenges.readMore")}
              <div className="rounded-full bg-pink-600 p-2">
                <MoveUpRight className="text-white" />
              </div>
            </button>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
