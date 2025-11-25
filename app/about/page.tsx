import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Clock, MapPin, Users } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-black text-white py-32 px-8">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-b from-black/50 to-black"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="inline-block bg-[#D97706] text-white px-6 py-2 rounded font-anaheim font-bold mb-8">
            EVENTS
          </div>

          <h1 className="text-6xl md:text-7xl font-urbanist font-bold mb-6 text-center">EXPLORING THE FUTURE</h1>
          <p className="text-lg font-poppins text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            SST Makerspace is your launchpad for building change. Come explore, build, and experience what happens when
            creativity meets engineering.
          </p>
        </div>
      </section>

      {/* Event Info Cards */}
      <section className="bg-white py-8 px-8 -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <p className="text-gray-500 font-anaheim text-sm mb-3">WHEN?</p>
            <div className="flex items-start gap-4">
              <Clock className="w-12 h-12 text-[#7C3AED] flex-shrink-0" />
              <div>
                <p className="text-2xl font-urbanist font-bold text-[#7C3AED] mb-1">12 Aug 2024</p>
                <p className="text-lg font-anaheim text-[#7C3AED]">9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <p className="text-gray-500 font-anaheim text-sm mb-3">WHERE?</p>
            <div className="flex items-start gap-4">
              <MapPin className="w-12 h-12 text-[#7C3AED] flex-shrink-0" />
              <div>
                <p className="text-xl font-anaheim text-[#7C3AED] leading-tight">
                  School of Science and Technology,
                  <br />
                  Pan-Atlantic University.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <p className="text-gray-500 font-anaheim text-sm mb-3">FOR WHO?</p>
            <div className="flex items-start gap-4">
              <Users className="w-12 h-12 text-[#7C3AED] flex-shrink-0" />
              <div>
                <p className="text-2xl font-urbanist font-bold text-[#7C3AED]">ENGINEERS</p>
                <p className="text-lg font-anaheim text-[#7C3AED]">& COMPUTER SCIENTISTS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl p-12 shadow-sm">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden mx-auto">
                <Image src="/smiling-man-portrait.png" alt="Person" width={400} height={400} className="object-cover" />
              </div>
            </div>
            <div className="relative">
              <div className="text-9xl text-[#7C3AED] absolute -top-8 -right-4 opacity-20 font-urbanist">"</div>
              <h3 className="text-3xl font-urbanist font-bold text-[#7C3AED] mb-6">
                Here lies an illustrative quote by the person on the left.
              </h3>
              <p className="text-gray-600 font-poppins mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales ex vel faucibus iaculis. Proin
                viverra facilisis vehicula. Duis mattis turpis sem, nec porta nisl tristique id. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Nunc at varius dolor, a sollicitudin diam. Proin vehicula feugiat
                semper.
              </p>
              <p className="font-poppins text-gray-800 font-semibold">Dr John Doe</p>
              <p className="font-anaheim text-gray-500">VIP</p>
              <div className="text-9xl text-[#7C3AED] absolute -bottom-8 right-0 opacity-20 font-urbanist">"</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-8 bg-[#D97706]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-urbanist font-bold text-white mb-12">How It Works</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#92400E] text-white p-8 rounded-2xl">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-urbanist font-bold mb-4">Workshop Sessions</h3>
              <p className="font-poppins text-white/90 mb-6 leading-relaxed">
                The Planning committee conducts a certain number of workshops to prepare students for the competition.
                The topic and number of workshops is determined by the committee.
              </p>
              <Button className="bg-white text-[#D97706] hover:bg-gray-100 font-anaheim font-bold">
                REGISTER NOW →
              </Button>
            </div>

            <div className="bg-[#92400E] text-white p-8 rounded-2xl">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-urbanist font-bold mb-4">Build Your Team</h3>
              <p className="font-poppins text-white/90 mb-6 leading-relaxed">
                Teams of 3 are formed to compete in the event. Teams comprise students of the School of Science and
                Technology.
              </p>
              <Button className="bg-white text-[#D97706] hover:bg-gray-100 font-anaheim font-bold">
                REGISTER NOW →
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#92400E] text-white p-8 rounded-2xl">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-urbanist font-bold mb-4">Mock Competition & Qualifiers</h3>
              <p className="font-poppins text-white/90 mb-6 leading-relaxed">
                Only the best applicants are allowed to compete. The quality of the bots is used to determine the final
                competitors.
              </p>
              <Button className="bg-white text-[#D97706] hover:bg-gray-100 font-anaheim font-bold">
                REGISTER NOW →
              </Button>
            </div>

            <div className="bg-[#92400E] text-white p-8 rounded-2xl">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-urbanist font-bold mb-4">Main Competition Event</h3>
              <p className="font-poppins text-white/90 mb-6 leading-relaxed">
                Qualified teams race against each other to determine the overall winner of the competition.
              </p>
              <Button className="bg-white text-[#D97706] hover:bg-gray-100 font-anaheim font-bold">
                REGISTER NOW →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2024 MotoBot Challenge */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full border-4 border-[#7C3AED] flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[#7C3AED]"></div>
            </div>
            <h3 className="text-5xl font-urbanist font-bold text-[#7C3AED]">2024</h3>
          </div>

          <h2 className="text-5xl font-urbanist font-bold text-[#7C3AED] mb-4">MotoBot Challenge</h2>
          <p className="text-xl font-anaheim text-gray-500 italic mb-8">Theme: The Future of Work in Africa</p>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h4 className="text-2xl font-urbanist font-bold text-[#D97706] mb-4">Problem Statement</h4>
            <p className="font-poppins text-gray-700 mb-8">
              Design a Motobot that meets the speed and steering requirements of the given track.
            </p>

            <div className="bg-white rounded-xl shadow-sm p-8 grid grid-cols-5 gap-6 text-center">
              <div>
                <div className="text-4xl font-urbanist font-bold text-[#7C3AED] mb-2">30+</div>
                <div className="font-anaheim text-gray-600">Participants</div>
              </div>
              <div>
                <div className="text-4xl font-urbanist font-bold text-[#7C3AED] mb-2">10+</div>
                <div className="font-anaheim text-gray-600">Teams</div>
              </div>
              <div>
                <div className="text-4xl font-urbanist font-bold text-[#7C3AED] mb-2">300</div>
                <div className="font-anaheim text-gray-600">Attendes</div>
              </div>
              <div>
                <div className="text-4xl font-urbanist font-bold text-[#7C3AED] mb-2">5</div>
                <div className="font-anaheim text-gray-600">Panelists</div>
              </div>
              <div>
                <div className="text-4xl font-urbanist font-bold text-[#7C3AED] mb-2">10+</div>
                <div className="font-anaheim text-gray-600">Faculty</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2024 */}
          <div className="bg-gray-100 rounded-3xl p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden mx-auto">
                  <Image
                    src="/smiling-man-portrait.png"
                    alt="Person"
                    width={400}
                    height={400}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="relative">
                <div className="text-9xl text-[#7C3AED] absolute -top-8 -right-4 opacity-20 font-urbanist">"</div>
                <h3 className="text-3xl font-urbanist font-bold text-[#7C3AED] mb-6">
                  Here lies an illustrative quote by the person on the left.
                </h3>
                <p className="text-gray-600 font-poppins mb-6 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales ex vel faucibus iaculis. Proin
                  viverra facilisis vehicula. Duis mattis turpis sem, nec porta nisl tristique id.
                </p>
                <div className="text-9xl text-[#7C3AED] absolute -bottom-8 right-0 opacity-20 font-urbanist">"</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Events Timeline */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-urbanist font-bold text-[#D97706] mb-16">Our Events</h2>

          {/* 2025 GripperBot */}
          <div className="relative pl-12 border-l-4 border-[#7C3AED] mb-16">
            <div className="absolute -left-[18px] top-0 w-8 h-8 rounded-full bg-[#7C3AED] border-4 border-white"></div>

            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-5xl font-urbanist font-bold text-[#7C3AED]">2025</h3>
            </div>

            <h4 className="text-4xl font-urbanist font-bold text-[#7C3AED] mb-4">GripperBot Challenge</h4>
            <p className="text-xl font-anaheim text-gray-500 italic mb-8">Theme: The Future of Work in Africa</p>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h5 className="text-2xl font-urbanist font-bold text-[#D97706] mb-4">Problem Statement</h5>
              <p className="font-poppins text-gray-700 mb-8">
                Design a Gripper Bot with wheels that can pick objects and move them onto a stack.
              </p>

              <div className="bg-gray-50 rounded-xl p-8 grid grid-cols-5 gap-6 text-center">
                <div>
                  <div className="text-4xl font-urbanist font-bold text-[#7C3AED] mb-2">30+</div>
                  <div className="font-anaheim text-gray-600">Participants</div>
                </div>
                <div>
                  <div className="text-4xl font-urbanist font-bold text-[#7C3AED] mb-2">5+</div>
                  <div className="font-anaheim text-gray-600">Teams</div>
                </div>
                <div>
                  <div className="text-4xl font-urbanist font-bold text-[#7C3AED] mb-2">300</div>
                  <div className="font-anaheim text-gray-600">Attendes</div>
                </div>
                <div>
                  <div className="text-4xl font-urbanist font-bold text-[#7C3AED] mb-2">5</div>
                  <div className="font-anaheim text-gray-600">Panelists</div>
                </div>
                <div>
                  <div className="text-4xl font-urbanist font-bold text-[#7C3AED] mb-2">10+</div>
                  <div className="font-anaheim text-gray-600">Faculty</div>
                </div>
              </div>
            </div>
          </div>

          {/* 2024 MotoBot in timeline */}
          <div className="relative pl-12">
            <div className="absolute -left-[18px] top-0 w-8 h-8 rounded-full border-4 border-[#7C3AED] bg-white">
              <div className="w-full h-full rounded-full border-2 border-[#7C3AED]"></div>
            </div>

            <div className="flex items-center gap-4">
              <h3 className="text-5xl font-urbanist font-bold text-[#7C3AED]">2024</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-white relative">
        <div className="absolute left-0 top-0 w-32 h-full">
          <svg viewBox="0 0 100 400" className="w-full h-full">
            <path d="M 0 200 Q 50 100 100 200 Q 50 300 0 400" fill="#7C3AED" />
          </svg>
        </div>
        <div className="absolute right-0 top-0 w-32 h-full">
          <svg viewBox="0 0 100 400" className="w-full h-full">
            <path d="M 100 0 Q 50 100 0 200 Q 50 300 100 400" fill="#D97706" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 shadow-xl relative z-10">
          <h2 className="text-4xl font-urbanist font-bold text-[#7C3AED] mb-6 text-center">
            Interested in being a sponsor?
          </h2>
          <p className="text-gray-600 font-poppins text-center mb-8 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales ex vel faucibus iaculis. Proin
            viverra facilisis vehicula. Duis mattis turpis sem, nec porta.
          </p>
          <div className="flex justify-center">
            <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-8 py-6 font-urbanist font-bold text-lg">
              BE A SPONSOR
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

