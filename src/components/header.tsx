"use client"

import Image from "next/image"
import { LanguageSwitcher } from "./language-switcher"
import { useTranslation } from "@/contexts/language-context"
import { MoveUpRight } from "lucide-react"

export function Header() {
  const { t } = useTranslation()

  return (
    <header className="w-full max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image src="/shestemssafrica_logo.jpg" alt="She STEM Africa Logo" width={40} height={40} className="h-10 w-auto" />
      </div>
      <div className="flex items-center gap-4">
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm uppercase font-medium hover:text-pink-600 transition-colors">
            {t("header.about")}
          </a>
          <a href="#" className="text-sm uppercase font-medium hover:text-pink-600 transition-colors">
            {t("header.blog")}
          </a>
          <a href="#" className="text-sm uppercase font-medium hover:text-pink-600 transition-colors">
            {t("header.contributions")}
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <LanguageSwitcher />
        <button className="border border-pink-600 text-pink-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-pink-700 transition-colors flex items-center gap-4">
          {t("header.contact")}
          <div className="rounded-full bg-pink-600 p-2">
            <MoveUpRight className="text-white" />
          </div>
        </button>
      </div>
    </header>
  )
}
