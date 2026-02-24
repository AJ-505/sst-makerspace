import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  CompetitionCard,
  FeatureCard,
  SponsorMessageCard,
  StatCard,
  TestimonialCard,
  UpcomingChallengeCard,
} from "@/components/home/cards";
import {
  COMPETITIONS,
  HOME_FEATURES,
  HOME_STATS,
  SPONSOR_MESSAGES,
  TESTIMONIALS,
  UPCOMING_CHALLENGES,
} from "@/components/home/constants";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header + Hero share the same background for seamless blending */}
      <div className="hero-top-bg">
        <Header />

        {/* Hero Section */}
        <section className="relative px-8 py-15 text-white">
          <div className="relative mx-auto max-w-7xl text-center">
            <h1 className="font-urbanist mb-6 text-5xl font-bold md:text-6xl">
              More Than Robots.
              <br />
              <span className="text-[#D97706]">A Movement.</span>
            </h1>
            <p className="font-poppins mx-auto mb-8 max-w-2xl text-lg text-gray-300">
              SST Makerspace is your launchpad for building change. Come
              explore, build, and experience what happens when creativity meets
              engineering.
            </p>
            <Button className="font-urbanist bg-[#7C3AED] px-8 py-6 text-lg font-bold text-white hover:bg-[#6D28D9]">
              JOIN US
            </Button>
          </div>
        </section>
      </div>

      {/* Stats Section */}
      <section className="bg-white px-8 py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 text-center md:grid-cols-4">
          {HOME_STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      {/* What is SST Makerspace */}
      <section className="bg-gray-50 px-8 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-urbanist mb-6 text-4xl font-bold text-[#D97706]">
              What is SST Makerspace?
            </h2>
            <p className="font-poppins leading-relaxed text-gray-700">
              SST Makerspace is a student-driven platform at Pan-Atlantic
              University dedicated to bridging the gap between theory and
              practice. At its core, Makerspace is about learning by
              doing—fostering creativity, innovation, and problem-solving
              through real-world tech challenges.
            </p>
          </div>
          <div className="relative h-80 overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/makerspace-workshop-with-students-gathered-on-mult.webp"
              alt="SST Makerspace workshop"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 45vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 px-8 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          {HOME_FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      {/* Hardware Solutions */}
      <section className="px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-[#7C3AED] p-8 text-white sm:p-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div className="max-w-2xl">
                <h2 className="font-urbanist mb-4 text-3xl font-bold">
                  Hardware Solutions Used By Our Participants
                </h2>
                <p className="font-poppins text-white/90">
                  SST Makerspace participants use Arduino and ESP32 boards,
                  motor drivers, sensors, and wireless modules to build
                  remote-controlled robots. They also prototype with 3D-printed
                  parts, grippers, and batteries.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 md:justify-end">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
                  <span className="text-2xl">🔧</span>
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
                  <span className="text-2xl">📡</span>
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
                  <span className="text-2xl">🍓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitions */}
      <section className="bg-gray-50 px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-urbanist mb-12 text-center text-4xl font-bold text-[#D97706]">
            Our Competitions
          </h2>

          <div className="mb-8 rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <p className="font-anaheim mb-3 text-sm font-bold tracking-wide text-[#7C3AED]">
                  UPCOMING
                </p>
                <h3 className="font-urbanist mb-3 text-2xl font-bold text-[#7C3AED] sm:text-3xl">
                  Upcoming Competitions at SST Makerspace
                </h3>
                <p className="font-poppins mb-6 text-gray-700">
                  New to SST Makerspace? Start here. Explore the two competition
                  tracks, choose your challenge, and build practical solutions
                  with your team.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {UPCOMING_CHALLENGES.map((challenge) => (
                    <UpcomingChallengeCard
                      key={challenge.title}
                      {...challenge}
                    />
                  ))}
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl border border-black/5 bg-gray-100">
                <Image
                  src="/sstms-2026-competitions-flyer.webp"
                  alt="SST Makerspace upcoming competitions flyer"
                  width={1080}
                  height={1350}
                  className="h-full w-full object-cover"
                  sizes="(min-width: 768px) 45vw, 100vw"
                />
              </div>
            </div>
          </div>

          {COMPETITIONS.map((competition) => (
            <div
              key={competition.title}
              className={competition.index === "1" ? "mb-8" : undefined}
            >
              <CompetitionCard {...competition} />
            </div>
          ))}
        </div>
      </section>

      {/* Past Sponsors */}
      <section className="bg-white px-8 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-urbanist mb-12 text-center text-4xl font-bold text-[#D97706]">
            Our Past Sponsors
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-12">
            <div className="group relative">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#00979D]">
                <span className="text-3xl font-bold text-white">∞</span>
              </div>
              <span className="font-anaheim pointer-events-none absolute top-full left-1/2 z-10 mt-2 -translate-x-1/2 rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                Arduino
              </span>
            </div>
            <div className="group relative">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-black">
                <span className="text-xl font-bold text-white">BYBIT</span>
              </div>
              <span className="font-anaheim pointer-events-none absolute top-full left-1/2 z-10 mt-2 -translate-x-1/2 rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                BYBIT
              </span>
            </div>
            <div className="group relative">
              <div className="flex h-20 w-20 items-center justify-center">
                <div className="flex gap-1">
                  <div className="h-8 w-8 rounded-full bg-red-500"></div>
                  <div className="-ml-2 h-8 w-8 rounded-full bg-orange-500"></div>
                </div>
              </div>
              <span className="font-anaheim pointer-events-none absolute top-full left-1/2 z-10 mt-2 -translate-x-1/2 rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                Mastercard
              </span>
            </div>
            <div className="group relative">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-gray-200 bg-white">
                <div className="text-center">
                  <div className="mb-1 flex justify-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-black"></div>
                    <div className="h-2 w-2 rounded-full bg-black"></div>
                    <div className="h-2 w-2 rounded-full bg-black"></div>
                  </div>
                  <div className="h-6 w-12 rounded-lg bg-black"></div>
                </div>
              </div>
              <span className="font-anaheim pointer-events-none absolute top-full left-1/2 z-10 mt-2 -translate-x-1/2 rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                Tesla
              </span>
            </div>
            <div className="group relative">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600">
                <div className="h-8 w-8 rounded bg-white"></div>
              </div>
              <span className="font-anaheim pointer-events-none absolute top-full left-1/2 z-10 mt-2 -translate-x-1/2 rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                Tech Partner
              </span>
            </div>
            <div className="group relative">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#00979D]">
                <span className="text-3xl font-bold text-white">∞</span>
              </div>
              <span className="font-anaheim pointer-events-none absolute top-full left-1/2 z-10 mt-2 -translate-x-1/2 rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                Arduino
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#C2410C] px-8 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-urbanist mb-4 text-center text-4xl font-bold text-white">
            Voices from SST Makerspace
          </h2>
          <p className="font-anaheim mb-12 text-center text-white/80">
            Stories from participants, volunteers, and faculty who have
            experienced the journey firsthand.
          </p>

          <div className="mb-6 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.slice(0, 3).map((testimonial, idx) => (
              <TestimonialCard
                key={`${testimonial.author}-${idx}`}
                {...testimonial}
              />
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.slice(3).map((testimonial, idx) => (
              <TestimonialCard
                key={`${testimonial.author}-more-${idx}`}
                {...testimonial}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-urbanist mb-4 text-center text-4xl font-bold text-[#D97706]">
            What Sponsors Gained
          </h2>
          <p className="font-anaheim mx-auto mb-10 max-w-3xl text-center text-gray-600">
            Curated sponsor outcomes from recent partnership snapshots and
            sponsorship-impact slides.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {SPONSOR_MESSAGES.map((message) => (
              <SponsorMessageCard key={message.sponsor} {...message} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gray-50 px-4 py-20 sm:px-8">
        <div className="absolute top-0 left-0 h-full w-10 sm:w-32">
          <svg viewBox="0 0 100 400" className="h-full w-full">
            <path d="M 0 200 Q 50 100 100 200 Q 50 300 0 400" fill="#7C3AED" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 h-full w-10 sm:w-32">
          <svg viewBox="0 0 100 400" className="h-full w-full">
            <path d="M 100 0 Q 50 100 0 200 Q 50 300 100 400" fill="#D97706" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl rounded-3xl bg-white p-6 shadow-xl sm:p-12">
          <h2 className="font-urbanist mb-6 text-center text-3xl font-bold text-[#7C3AED] sm:text-4xl">
            Ready to make a change?
          </h2>
          <p className="font-poppins mx-auto mb-8 max-w-2xl text-center text-gray-600">
            Let us join hands in inspiring the young minds that will go on to
            transform the hardware space, building products that can compete in
            the global market.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <Button className="font-urbanist w-full bg-[#7C3AED] px-6 py-5 font-bold text-white hover:bg-[#6D28D9] sm:w-auto sm:px-8 sm:py-6">
              BE A SPONSOR
            </Button>
            <Button className="font-urbanist w-full bg-[#7C3AED] px-6 py-5 font-bold text-white hover:bg-[#6D28D9] sm:w-auto sm:px-8 sm:py-6">
              BE A VOLUNTEER
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
