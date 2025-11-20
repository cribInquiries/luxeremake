"use client"

import dynamic from "next/dynamic"

const HouseHeroParallax = dynamic(() => import("./customUI/Parallax/HouseHeroParallax"), { ssr: false })

export default function HeroClient() {
  return <HouseHeroParallax />
}
