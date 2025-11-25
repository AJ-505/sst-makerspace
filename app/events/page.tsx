import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-black text-white py-32 px-8">
        <div className="absolute inset-0 opacity-30 bg-gradient-to-b from-black/50 to-purple-900/30"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-block bg-[#D97706] text-white px-6 py-2 rounded font-anaheim font-bold mb-8">
            ABOUT SST MAKERSPACE
          </div>

          <h1 className="text-6xl md:text-7xl font-urbanist font-bold mb-6">
            UNVEILING OUR MISSION,
            <br />
            VISION & TEAM
          </h1>
          <p className="text-lg font-poppins text-gray-300 mb-12 max-w-3xl mx-auto italic">
            "Africa's story has been written by others; we need to own our problems and solutions and write our story"
            <br />
            <span className="text-sm">- Paul Kagame</span>
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-urbanist font-bold text-[#D97706] mb-12">WHO WE ARE</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#D97706] text-white p-10 rounded-3xl">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-6xl font-urbanist font-bold">01</span>
                <span className="text-3xl font-urbanist font-bold">GOAL</span>
              </div>
              <p className="font-poppins text-lg leading-relaxed">
                To foster innovation and creativity among students, equipping them with practical skills.
              </p>
            </div>

            <div className="bg-[#92400E] text-white p-10 rounded-3xl row-span-2 flex flex-col justify-center">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-6xl font-urbanist font-bold">03</span>
                <span className="text-3xl font-urbanist font-bold">MISSION STATEMENT</span>
              </div>
              <p className="font-poppins text-lg leading-relaxed">
                At SST Makerspace, our mission is to empower Africa's innovators by bridging the gap between academic
                theory and practical application. Through hands-on projects, interdisciplinary collaboration, and robust
                research, we inspire a new generation of builders to challenge conventional narratives and create
                sustainable, hardware-driven solutions.
              </p>
            </div>

            <div className="bg-[#7C3AED] text-white p-10 rounded-3xl">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-6xl font-urbanist font-bold">02</span>
                <span className="text-3xl font-urbanist font-bold">IMPACT</span>
              </div>
              <p className="font-poppins text-lg leading-relaxed">
                To create a generation of problem-solvers and innovators who can tackle real-world challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Goals */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl p-12 shadow-sm">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-urbanist font-bold text-[#7C3AED] mb-6">OUR ALIGNMENT WITH THE SDG GOALS</h2>
              <p className="text-gray-600 font-poppins leading-relaxed">
                At SST Makerspace, we are committed to driving innovation and building a hardware inclusive future. Our
                mission aligns with the United Nations Sustainable Development Goals to create lasting change.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#C5192D] p-6 rounded-2xl text-white">
                <div className="text-4xl font-bold mb-2">4</div>
                <div className="text-xs font-anaheim mb-2">QUALITY EDUCATION</div>
                <svg className="w-16 h-16" fill="white" viewBox="0 0 24 24">
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                </svg>
              </div>
              <div className="bg-[#A21942] p-6 rounded-2xl text-white">
                <div className="text-4xl font-bold mb-2">8</div>
                <div className="text-xs font-anaheim mb-2">DECENT WORK AND ECONOMIC GROWTH</div>
                <svg className="w-16 h-16" fill="white" viewBox="0 0 24 24">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                </svg>
              </div>
              <div className="bg-[#FD6925] p-6 rounded-2xl text-white">
                <div className="text-4xl font-bold mb-2">9</div>
                <div className="text-xs font-anaheim mb-2">INDUSTRY, INNOVATION AND INFRASTRUCTURE</div>
                <svg className="w-16 h-16" fill="white" viewBox="0 0 24 24">
                  <path d="M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6zm6-6h4v3h-4zM6 7h5v5H6zm6 4h4v6h-4z" />
                </svg>
              </div>
              <div className="bg-[#19486A] p-6 rounded-2xl text-white">
                <div className="text-4xl font-bold mb-2">17</div>
                <div className="text-xs font-anaheim mb-2">PARTNERSHIPS FOR THE GOALS</div>
                <svg className="w-16 h-16" fill="white" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-urbanist font-bold text-[#7C3AED] mb-12">MEET OUR TEAM</h2>

          <div className="grid grid-cols-3 gap-6">
            {[
              { name: "EMMANUEL SAVIOR", role: "PRESIDENT" },
              { name: "ANTHONY ACHIKE", role: "CLUB ADVISOR" },
              { name: "JOSEPH ADIGWE", role: "TECHNICAL DOCUMENTATION MANAGER" },
              { name: "TEAM MEMBER", role: "POSITION" },
              { name: "TEAM MEMBER", role: "POSITION" },
              { name: "TEAM MEMBER", role: "POSITION" },
              { name: "TEAM MEMBER", role: "POSITION" },
              { name: "TEAM MEMBER", role: "POSITION" },
              { name: "TEAM MEMBER", role: "POSITION" },
            ].map((member, idx) => (
              <div key={idx} className="relative group">
                <div className="aspect-square rounded-3xl overflow-hidden mb-4 bg-gray-200">
                  <Image
                    src={`/professional-portrait-.jpg?height=400&width=400&query=professional-portrait-${idx}`}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div className="bg-[#7C3AED] text-white p-4 rounded-2xl text-center">
                  <div className="font-urbanist font-bold text-lg">{member.name}</div>
                  <div className="font-anaheim text-sm italic">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-white relative">
        <div className="absolute left-0 top-0 w-32 h-full">
          <svg viewBox="0 0 100 400" className="w-full h-full">
            <path d="M 0 0 Q 50 100 0 200 Q 50 300 0 400" fill="#7C3AED" />
          </svg>
        </div>
        <div className="absolute right-0 top-0 w-32 h-full">
          <svg viewBox="0 0 100 400" className="w-full h-full">
            <path d="M 100 0 Q 50 100 100 200 Q 50 300 100 400" fill="#D97706" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-16 shadow-xl relative z-10">
          <h2 className="text-5xl font-urbanist font-bold text-[#7C3AED] mb-6 text-center">Want to join our team?</h2>
          <p className="text-gray-600 font-poppins text-center mb-8 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales ex vel faucibus iaculis. Proin
            viverra facilisis vehicula. Duis mattis turpis sem, nec porta.
          </p>
          <div className="flex justify-center">
            <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-8 py-6 font-urbanist font-bold text-lg">
              BE A VOLUNTEER
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

