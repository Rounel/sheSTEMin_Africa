"use client"

import { RevealWrapper } from "./reveal-wrapper"
import Image from "next/image"
import { useTranslation } from "@/contexts/language-context"
import { useEffect, useRef } from "react"
import { MoveUpRight } from "lucide-react"

export function NewsSection() {
  const { t } = useTranslation()
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (!scroller || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Ajouter l'attribut `data-animated="true"`
    scroller.setAttribute("data-animated", "true");

    const scrollerInner = scroller.querySelector(".scroller__inner") as HTMLElement | null;
    if (scrollerInner) {
      const scrollerContent = Array.from(scrollerInner.children);
      // Cloner et ajouter chaque élément à `.scroller__inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });
    }

  }, []);

  const newsItems = [
    {
      title: "Rapport d'activité détaillé 2023 - 2024 de l'association SheSTEMin Africa",
      date: "15 Mar 2023",
      image: "/e2.jpg",
    },
    {
      title: "Rapport d'activité détaillé 2023 - 2024 de l'association SheSTEMin Africa",
      date: "02 Apr 2023",
      image: "/e2.jpg",
    },
    {
      title: "Rapport d'activité détaillé 2023 - 2024 de l'association SheSTEMin Africa",
      date: "10 May 2023",
      image: "/e2.jpg",
    },
    {
      title: "Rapport d'activité détaillé 2023 - 2024 de l'association SheSTEMin Africa",
      date: "25 May 2023",
      image: "/e2.jpg",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center mb-12">
          <RevealWrapper delay={0.1} direction="up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">{t("news.title")}</h2>
          </RevealWrapper>

          <RevealWrapper delay={0.2} direction="left">
            <a
              href="#"
              className="text-pink-600 font-medium flex items-center gap-2 hover:text-pink-700 transition-colors"
            >
              {t("news.seeAll")}
              <button className="bg-white text-pink-600 px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:bg-pink-100 transition-colors">
                {t("challenges.readMore")}
                <div className="rounded-full bg-pink-600 p-2">
                  <MoveUpRight className="text-white" />
                </div>
              </button>
            </a>
          </RevealWrapper>
        </div>

        <RevealWrapper delay={0.3} direction="up" className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsItems.map((item, index) => (
                <div key={`fgd${item}gfdg`} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow grid grid-cols-2 gap-8 w-full">
                  <div className="p-4 flex flex-col justify-between">
                    <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                    <h3 className="font-semibold text-2xl mb-2">{item.title}</h3>
                    <a
                      href="#"
                      className="text-pink-600 text-sm font-medium flex items-center gap-1 hover:text-pink-700 transition-colors"
                    >
                      {t("news.readMore")}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                  <div className="relative h-96">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div>
                </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
