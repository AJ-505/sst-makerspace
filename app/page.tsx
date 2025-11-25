import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-black text-white py-24 px-8">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-b from-black/50 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-urbanist font-bold mb-6">
            More Than Robots.
            <br />
            <span className="text-[#D97706]">A Movement.</span>
          </h1>
          <p className="text-lg font-poppins text-gray-300 mb-8 max-w-2xl mx-auto">
            SST Makerspace is your launchpad for building change. Come explore, build, and experience what happens when
            creativity meets engineering.
          </p>
          <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-8 py-6 text-lg font-urbanist font-bold">
            JOIN US
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-8 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-urbanist font-bold text-[#7C3AED] mb-2">30+</div>
            <div className="font-anaheim text-gray-600">Participants</div>
          </div>
          <div>
            <div className="text-4xl font-urbanist font-bold text-[#7C3AED] mb-2">15+</div>
            <div className="font-anaheim text-gray-600">Teams</div>
          </div>
          <div>
            <div className="text-4xl font-urbanist font-bold text-[#7C3AED] mb-2">300</div>
            <div className="font-anaheim text-gray-600">Attendees</div>
          </div>
          <div>
            <div className="text-4xl font-urbanist font-bold text-[#7C3AED] mb-2">1</div>
            <div className="font-anaheim text-gray-600">Winner</div>
          </div>
        </div>
      </section>

      {/* What is SST Makerspace */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-urbanist font-bold text-[#D97706] mb-6">What is SST Makerspace?</h2>
            <p className="font-poppins text-gray-700 leading-relaxed">
              SST Makerspace is a student-driven platform at Pan-Atlantic University dedicated to bridging the gap
              between theory and practice. At its core, Makerspace is about learning by doing—fostering creativity,
              innovation, and problem-solving through real-world tech challenges.
            </p>
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/makerspace-workshop-with-students-gathered-on-mult.jpg"
              alt="SST Makerspace workshop"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-16 h-16 mb-4 flex items-center justify-center">
              <div className="text-4xl">🎓</div>
            </div>
            <h3 className="text-xl font-urbanist font-bold text-[#D97706] mb-3">Experiential Learning</h3>
            <p className="font-poppins text-gray-600 text-sm">
              We invite industry to set tech competitions and workshops that puts students with our participants get
              hands-on experience with various technologies.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-16 h-16 mb-4 flex items-center justify-center">
              <div className="text-4xl">🤝</div>
            </div>
            <h3 className="text-xl font-urbanist font-bold text-[#D97706] mb-3">Discipline Collaboration</h3>
            <p className="font-poppins text-gray-600 text-sm">
              Our projects and workshops accept participants from across different disciplines such as Computer Science
              and Engineering.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-16 h-16 mb-4 flex items-center justify-center">
              <div className="text-4xl">🎮</div>
            </div>
            <h3 className="text-xl font-urbanist font-bold text-[#D97706] mb-3">Fun & Engaging</h3>
            <p className="font-poppins text-gray-600 text-sm">
              We ensure our experience is provided to our participants and audiences by following a rigor style format
              for our events.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-16 h-16 mb-4 flex items-center justify-center">
              <div className="text-4xl">🌍</div>
            </div>
            <h3 className="text-xl font-urbanist font-bold text-[#D97706] mb-3">Impact-Oriented Thinking</h3>
            <p className="font-poppins text-gray-600 text-sm">
              While solving real-world problems, Makerspace fosters innovation that goes beyond the classroom and
              contributes to Africa's tech ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Hardware Solutions */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#7C3AED] text-white p-12 rounded-3xl">
            <div className="flex justify-between items-start">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-urbanist font-bold mb-4">Hardware Solutions Used By Our Participants</h2>
                <p className="font-poppins text-white/90">
                  Participants at SST Makerspace work with real hardware tools like Arduino and ESP32 microcontrollers,
                  motor drivers, sensors, and wireless modules to build functional, remote-controlled robots. They also
                  use 3D-printed parts, grippers, and batteries to simulate real industrial applications.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">🔧</span>
                </div>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">📡</span>
                </div>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">🍓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitions */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-urbanist font-bold text-[#D97706] mb-12 text-center">Our Competitions</h2>

          {/* MotoBot Competition */}
          <div className="bg-white rounded-3xl p-8 mb-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex gap-8">
                <div className="text-8xl font-urbanist font-bold">1</div>
                <div>
                  <h3 className="text-3xl font-urbanist font-bold text-[#7C3AED] mb-2">MotoBot Competition</h3>
                  <p className="text-sm font-anaheim text-gray-500 mb-4">The Future of Work 2024</p>
                  <p className="font-poppins text-gray-700 mb-6">
                    This event required participants to design a motobot which is a wirelessly controlled vehicle. The
                    speed and steering accuracy of the bots were tested here.
                  </p>
                  <Button className="bg-[#D97706] hover:bg-[#B45309] text-white font-anaheim font-bold">
                    LEARN MORE
                  </Button>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="/small-robots-racing-on-track.jpg"
                  alt="MotoBot Competition"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* GripperBot Competition */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex gap-8">
                <div className="text-8xl font-urbanist font-bold">2</div>
                <div>
                  <h3 className="text-3xl font-urbanist font-bold text-[#7C3AED] mb-2">GripperBot Competition</h3>
                  <p className="text-sm font-anaheim text-gray-500 mb-4">The Future of Work 2026</p>
                  <p className="font-poppins text-gray-700 mb-6">
                    The event encourages participants to tackle the labor issue in Africa by designing a motobot with a
                    gripper. Thus addressing the issue of heavy loads being lifted manually.
                  </p>
                  <Button className="bg-[#D97706] hover:bg-[#B45309] text-white font-anaheim font-bold">
                    LEARN MORE
                  </Button>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="/industrial-robotic-arm-gripper-orange.jpg"
                  alt="GripperBot Competition"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Sponsors */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-urbanist font-bold text-[#D97706] mb-12 text-center">Our Past Sponsors</h2>
          <div className="flex justify-center items-center gap-12 flex-wrap">
            <div className="w-20 h-20 bg-[#00979D] rounded-full flex items-center justify-center">
              <span className="text-white text-3xl font-bold">∞</span>
            </div>
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">BYBIT</span>
            </div>
            <div className="w-20 h-20 flex items-center justify-center">
              <div className="flex gap-1">
                <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                <div className="w-8 h-8 bg-orange-500 rounded-full -ml-2"></div>
              </div>
            </div>
            <div className="w-20 h-20 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center">
              <div className="text-center">
                <div className="flex justify-center gap-1 mb-1">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                <div className="w-12 h-6 bg-black rounded-lg"></div>
              </div>
            </div>
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded"></div>
            </div>
            <div className="w-20 h-20 bg-[#00979D] rounded-full flex items-center justify-center">
              <span className="text-white text-3xl font-bold">∞</span>
            </div>
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">BYBIT</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-8 bg-[#C2410C]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-urbanist font-bold text-white mb-4 text-center">What People Are Saying</h2>
          <p className="text-center font-anaheim text-white/80 mb-12">
            Reviews from SST Motobot/pool Motobot Competition 2024
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-[#92400E] text-white p-6 rounded-xl">
              <div className="text-4xl font-urbanist mb-4">"</div>
              <p className="mb-6 font-poppins text-sm">
                Our Engineering students hosted the Motobot showcasing their innovative and problem solving skills.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
                <div>
                  <p className="font-urbanist font-semibold text-sm">Dr Darlington Agbor</p>
                  <p className="font-anaheim text-xs text-white/70">Faculty SST</p>
                </div>
              </div>
            </div>

            <div className="bg-[#92400E] text-white p-6 rounded-xl">
              <div className="text-4xl font-urbanist mb-4">"</div>
              <p className="mb-6 font-poppins text-sm">
                This is beautiful and fantastic. And to think that it was entirely organized by students.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
                <div>
                  <p className="font-urbanist font-semibold text-sm">Dr Darlington Agbor</p>
                  <p className="font-anaheim text-xs text-white/70">Faculty SST</p>
                </div>
              </div>
            </div>

            <div className="bg-[#92400E] text-white p-6 rounded-xl">
              <div className="text-4xl font-urbanist mb-4">"</div>
              <p className="mb-6 font-poppins text-sm">
                Amazing execution. We are definitely investing our hardware resources in this in coming session.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
                <div>
                  <p className="font-urbanist font-semibold text-sm">Dr Enehimon Agbor</p>
                  <p className="font-anaheim text-xs text-white/70">Dean SST</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#92400E] text-white p-6 rounded-xl">
              <div className="text-4xl font-urbanist mb-4">"</div>
              <p className="mb-6 font-poppins text-sm">
                Our Engineering students hosted the Motobot showcasing their innovative and problem solving skills.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
                <div>
                  <p className="font-urbanist font-semibold text-sm">Dr Darlington Agbor</p>
                  <p className="font-anaheim text-xs text-white/70">Faculty SST</p>
                </div>
              </div>
            </div>

            <div className="bg-[#92400E] text-white p-6 rounded-xl">
              <div className="text-4xl font-urbanist mb-4">"</div>
              <p className="mb-6 font-poppins text-sm">
                Our Engineering students hosted the Motobot showcasing their innovative and problem solving skills.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
                <div>
                  <p className="font-urbanist font-semibold text-sm">Dr Darlington Agbor</p>
                  <p className="font-anaheim text-xs text-white/70">Faculty SST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-gray-50 relative">
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
          <h2 className="text-4xl font-urbanist font-bold text-[#7C3AED] mb-6 text-center">Ready to make a change?</h2>
          <p className="font-poppins text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Let us join hands in inspiring the young minds that will go on to transform the hardware space, building
            products that can compete in the global market.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-8 py-6 font-urbanist font-bold">
              BE A SPONSOR
            </Button>
            <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-8 py-6 font-urbanist font-bold">
              BE A VOLUNTEER
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

