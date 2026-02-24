import { Button } from "@/components/ui/button"
import type { Competition, Feature, HomeStat, SponsorMessage, Testimonial, UpcomingChallenge } from "./constants"
import Image from "next/image"

export function StatCard({ label, value }: HomeStat) {
  return (
    <div>
      <div className="mb-2 text-4xl font-urbanist font-bold text-[#7C3AED]">{value}</div>
      <div className="font-anaheim text-gray-600">{label}</div>
    </div>
  )
}

export function FeatureCard({ description, icon, title }: Feature) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <div className="mb-4 flex h-16 w-16 items-center justify-center">
        <div className="text-4xl">{icon}</div>
      </div>
      <h3 className="mb-3 text-xl font-urbanist font-bold text-[#D97706]">{title}</h3>
      <p className="text-sm font-poppins text-gray-600">{description}</p>
    </div>
  )
}

export function UpcomingChallengeCard({ description, title }: UpcomingChallenge) {
  return (
    <div className="rounded-2xl bg-gray-50 p-4">
      <h4 className="mb-2 text-lg font-urbanist font-bold text-[#7C3AED]">{title}</h4>
      <p className="text-sm leading-relaxed font-poppins text-gray-700">{description}</p>
    </div>
  )
}

export function CompetitionCard({ description, imageAlt, imageSrc, index, theme, title }: Competition) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
          <div className="text-6xl leading-none font-urbanist font-bold sm:text-8xl">{index}</div>
          <div>
            <h3 className="mb-2 text-2xl font-urbanist font-bold text-[#7C3AED] sm:text-3xl">{title}</h3>
            <p className="mb-4 text-sm font-anaheim text-gray-500">{theme}</p>
            <p className="mb-6 font-poppins text-gray-700">{description}</p>
            <Button className="bg-[#D97706] font-anaheim font-bold text-white hover:bg-[#B45309]">LEARN MORE</Button>
          </div>
        </div>
        <div className="relative h-64 overflow-hidden rounded-xl">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="(min-width: 768px) 45vw, 100vw" />
        </div>
      </div>
    </div>
  )
}

export function TestimonialCard({ author, quote, role }: Testimonial) {
  return (
    <div className="rounded-xl bg-[#92400E] p-6 text-white">
      <div className="mb-4 text-4xl font-urbanist">&quot;</div>
      <p className="mb-6 text-sm font-poppins">{quote}</p>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gray-600"></div>
        <div>
          <p className="text-sm font-urbanist font-semibold">{author}</p>
          <p className="text-xs font-anaheim text-white/70">{role}</p>
        </div>
      </div>
    </div>
  )
}

export function SponsorMessageCard({ message, sponsor }: SponsorMessage) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <p className="mb-4 text-sm leading-relaxed font-poppins text-gray-700">{message}</p>
      <p className="text-sm font-urbanist font-bold text-[#7C3AED]">{sponsor}</p>
    </div>
  )
}
