import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

const TEAM_MEMBERS = [
  { name: "SAVIOUR EMMANUEL", role: "PRESIDENT" },
  { name: "ANTHONY ACHIKE", role: "STAFF ADVISOR" },
  { name: "JOSEPH ADIGWE", role: "TECHNICAL AND DOCUMENTATION MANAGER" },
  { name: "IMAN TOKOSI", role: "COMPETITION MANAGER" },
  { name: "DEMILADE OGUNDEKO", role: "SPONSORSHIP AND INDUSTRY RELATIONS LEAD" },
  { name: "OLUWATOFUNMI OLUSODO", role: "PUBLIC RELATIONS OFFICER" },
  { name: "MOIJISOLA KUTI", role: "SOCIAL MEDIA MANAGER" },
  { name: "CHINAZOR OZOIGBO", role: "PUBLIC RELATIONS & COMMUNICATIONS LEAD" },
  { name: "PIUS NDUKWU", role: "PROJECT MANAGER" },
  { name: "DIVINE AJIMOTOKIN", role: "COMPETITION MANAGER" },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-black px-4 pt-8 pb-20 text-white sm:px-6 sm:pt-10 sm:pb-24 lg:px-8 lg:pt-14 lg:pb-32">
        <div className="absolute inset-0 opacity-30 bg-gradient-to-b from-black/50 to-purple-900/30"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-6 inline-block rounded bg-[#D97706] px-4 py-2 font-anaheim font-bold text-white sm:mb-8 sm:px-6">
            ABOUT SST MAKERSPACE
          </div>

          <h1 className="mb-6 font-urbanist text-3xl leading-tight font-bold sm:text-5xl lg:text-7xl">
            UNVEILING OUR MISSION,
            <br />
            VISION & TEAM
          </h1>
          <p className="mx-auto mb-10 max-w-3xl font-poppins text-base text-gray-300 italic sm:mb-12 sm:text-lg">
            &quot;Africa&apos;s story has been written by others; we need to own our problems and solutions and write our
            story&quot;
            <br />
            <span className="text-sm">- Paul Kagame</span>
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-8 font-urbanist text-3xl font-bold text-[#D97706] sm:mb-10 sm:text-4xl lg:mb-12 lg:text-5xl">
            WHO WE ARE
          </h2>

          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div className="order-1 rounded-3xl bg-[#D97706] p-6 text-white sm:p-8 lg:p-10">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-urbanist text-4xl font-bold sm:text-5xl lg:text-6xl">01</span>
                <span className="font-urbanist text-2xl font-bold sm:text-3xl">GOAL</span>
              </div>
              <p className="font-poppins text-base leading-relaxed sm:text-lg">
                To foster innovation and creativity among students, equipping them with practical skills.
              </p>
            </div>

            <div className="order-3 row-span-1 flex flex-col justify-center rounded-3xl bg-[#92400E] p-6 text-white sm:p-8 md:order-2 md:row-span-2 lg:p-10">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-urbanist text-4xl font-bold sm:text-5xl lg:text-6xl">03</span>
                <span className="font-urbanist text-2xl font-bold sm:text-3xl">MISSION STATEMENT</span>
              </div>
              <p className="font-poppins text-base leading-relaxed sm:text-lg">
                We empower Africa&apos;s innovators through hands-on, interdisciplinary projects that turn ideas into
                practical, sustainable hardware solutions.
              </p>
            </div>

            <div className="order-2 rounded-3xl bg-[#7C3AED] p-6 text-white sm:p-8 md:order-3 lg:p-10">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-urbanist text-4xl font-bold sm:text-5xl lg:text-6xl">02</span>
                <span className="font-urbanist text-2xl font-bold sm:text-3xl">IMPACT</span>
              </div>
              <p className="font-poppins text-base leading-relaxed sm:text-lg">
                To create a generation of problem-solvers and innovators who can tackle real-world challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Goals */}
      <section className="bg-gray-50 px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl rounded-3xl bg-white p-6 shadow-sm sm:p-8 lg:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h2 className="mb-4 font-urbanist text-3xl font-bold text-[#7C3AED] sm:mb-6 sm:text-4xl">
                OUR ALIGNMENT WITH THE SDG GOALS
              </h2>
              <p className="font-poppins leading-relaxed text-gray-600">
                At SST Makerspace, we are committed to driving innovation and building a hardware inclusive future. Our
                mission aligns with the United Nations Sustainable Development Goals to create lasting change.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#C5192D] p-5 text-white sm:p-6">
                <div className="mb-2 text-3xl font-bold sm:text-4xl">4</div>
                <div className="mb-2 font-anaheim text-sm leading-snug sm:text-base">QUALITY EDUCATION</div>
                <svg className="h-12 w-12 sm:h-16 sm:w-16" fill="white" viewBox="0 0 24 24">
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                </svg>
              </div>
              <div className="rounded-2xl bg-[#A21942] p-5 text-white sm:p-6">
                <div className="mb-2 text-3xl font-bold sm:text-4xl">8</div>
                <div className="mb-2 font-anaheim text-sm leading-snug sm:text-base">DECENT WORK AND ECONOMIC GROWTH</div>
                <svg className="h-12 w-12 sm:h-16 sm:w-16" fill="white" viewBox="0 0 24 24">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                </svg>
              </div>
              <div className="rounded-2xl bg-[#FD6925] p-5 text-white sm:p-6">
                <div className="mb-2 text-3xl font-bold sm:text-4xl">9</div>
                <div className="text-xs font-anaheim mb-2">INDUSTRY, INNOVATION AND INFRASTRUCTURE</div>
                <svg className="h-12 w-12 sm:h-16 sm:w-16" fill="white" viewBox="0 0 24 24">
                  <path d="M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6zm6-6h4v3h-4zM6 7h5v5H6zm6 4h4v6h-4z" />
                </svg>
              </div>
              <div className="rounded-2xl bg-[#19486A] p-5 text-white sm:p-6">
                <div className="mb-2 text-3xl font-bold sm:text-4xl">17</div>
                <div className="text-xs font-anaheim mb-2">PARTNERSHIPS FOR THE GOALS</div>
                <svg className="h-12 w-12 sm:h-16 sm:w-16" fill="white" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-8 font-urbanist text-3xl font-bold text-[#7C3AED] sm:mb-10 sm:text-4xl lg:mb-12 lg:text-5xl">
            MEET OUR TEAM
          </h2>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={idx} className="relative group min-w-0">
                <div className="mb-3 aspect-square overflow-hidden rounded-3xl bg-gray-200 sm:mb-4">
                  <Image
                    src={`/professional-portrait-.webp?height=400&width=400&query=professional-portrait-${idx}`}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div className="rounded-2xl bg-[#7C3AED] p-4 text-center text-white sm:p-5">
                  <div className="font-urbanist text-xl leading-tight font-bold break-words sm:text-2xl">{member.name}</div>
                  <div className="mt-1 font-anaheim text-base leading-tight italic break-words sm:text-lg">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="absolute left-0 top-0 hidden h-full w-20 md:block lg:w-32">
          <svg viewBox="0 0 100 400" className="w-full h-full">
            <path d="M 0 0 Q 50 100 0 200 Q 50 300 0 400" fill="#7C3AED" />
          </svg>
        </div>
        <div className="absolute right-0 top-0 hidden h-full w-20 md:block lg:w-32">
          <svg viewBox="0 0 100 400" className="w-full h-full">
            <path d="M 100 0 Q 50 100 100 200 Q 50 300 100 400" fill="#D97706" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl rounded-3xl bg-white p-6 shadow-xl sm:p-10 lg:p-16">
          <h2 className="mb-4 text-center font-urbanist text-3xl font-bold text-[#7C3AED] sm:mb-6 sm:text-4xl lg:text-5xl">
            Want to join our team?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-center font-poppins text-gray-600">
            We are always looking for students and collaborators who want to build, test, and ship impactful hardware
            projects. Join the team to contribute your skills and learn by doing.
          </p>
          <div className="flex justify-center">
            <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] h-auto px-6 py-4 text-base font-urbanist font-bold text-white sm:px-8 sm:py-6 sm:text-lg">
              BE A VOLUNTEER
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
