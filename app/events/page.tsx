import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Clock, MapPin, Users } from "lucide-react";
import Image from "next/image";

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      {/* Header + Hero share the same background for seamless blending */}
      <div className="hero-top-bg">
        <Header />

        {/* Hero Section */}
        <section className="relative px-4 pt-8 pb-20 text-white sm:px-6 sm:pt-10 sm:pb-24 lg:px-8 lg:pt-12 lg:pb-28">
          <div className="relative mx-auto max-w-7xl">
            <div className="mb-4 flex justify-start sm:mb-6">
              <div className="font-anaheim inline-block rounded bg-[#D97706] px-6 py-2 font-bold text-white">
                EVENTS
              </div>
            </div>

            <h1 className="font-urbanist mb-6 text-center text-6xl font-bold md:text-7xl">
              EXPLORING THE FUTURE
            </h1>
            <p className="font-poppins mx-auto mb-12 max-w-3xl text-center text-lg text-gray-300">
              SST Makerspace is your launchpad for building change. Come
              explore, build, and experience what happens when creativity meets
              engineering.
            </p>
          </div>
        </section>
      </div>

      {/* Event Info Cards */}
      <section className="relative z-10 -mt-16 bg-white px-8 py-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <p className="font-anaheim mb-3 text-sm text-gray-500">WHEN?</p>
            <div className="flex items-start gap-4">
              <Clock className="h-12 w-12 flex-shrink-0 text-[#7C3AED]" />
              <div>
                <p className="font-urbanist mb-1 text-2xl font-bold text-[#7C3AED]">
                  12 Aug 2024
                </p>
                <p className="font-anaheim text-lg text-[#7C3AED]">
                  9:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <p className="font-anaheim mb-3 text-sm text-gray-500">WHERE?</p>
            <div className="flex items-start gap-4">
              <MapPin className="h-12 w-12 flex-shrink-0 text-[#7C3AED]" />
              <div>
                <p className="font-anaheim text-xl leading-tight text-[#7C3AED]">
                  School of Science and Technology,
                  <br />
                  Pan-Atlantic University.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <p className="font-anaheim mb-3 text-sm text-gray-500">FOR WHO?</p>
            <div className="flex items-start gap-4">
              <Users className="h-12 w-12 flex-shrink-0 text-[#7C3AED]" />
              <div>
                <p className="font-urbanist text-2xl font-bold text-[#7C3AED]">
                  ENGINEERS
                </p>
                <p className="font-anaheim text-lg text-[#7C3AED]">
                  & COMPUTER SCIENTISTS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-gray-100 px-8 py-16">
        <div className="mx-auto max-w-6xl rounded-3xl bg-white p-12 shadow-sm">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative">
              <div className="mx-auto h-80 w-80 overflow-hidden rounded-full">
                <Image
                  src="/smiling-man-portrait.webp"
                  alt="Person"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="relative">
              <div className="font-urbanist absolute -top-8 -right-4 text-9xl text-[#7C3AED] opacity-20">
                &quot;
              </div>
              <h3 className="font-urbanist mb-6 text-3xl font-bold text-[#7C3AED]">
                Here lies an illustrative quote by the person on the left.
              </h3>
              <p className="font-poppins mb-6 leading-relaxed text-gray-600">
                SST Makerspace gives students a real environment to move from
                ideas to working prototypes. The challenge structure builds
                technical confidence, teamwork, and communication skills that
                extend far beyond the competition day.
              </p>
              <p className="font-poppins font-semibold text-gray-800">
                Dr John Doe
              </p>
              <p className="font-anaheim text-gray-500">VIP</p>
              <div className="font-urbanist absolute right-0 -bottom-8 text-9xl text-[#7C3AED] opacity-20">
                &quot;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#D97706] px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-urbanist mb-12 text-5xl font-bold text-white">
            How It Works
          </h2>

          <div className="mb-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-[#92400E] p-8 text-white">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" />
                </svg>
              </div>
              <h3 className="font-urbanist mb-4 text-2xl font-bold">
                Workshop Sessions
              </h3>
              <p className="font-poppins mb-6 leading-relaxed text-white/90">
                The Planning committee conducts a certain number of workshops to
                prepare students for the competition. The topic and number of
                workshops is determined by the committee.
              </p>
              <Button className="font-anaheim bg-white font-bold text-[#D97706] hover:bg-gray-100">
                REGISTER NOW →
              </Button>
            </div>

            <div className="rounded-2xl bg-[#92400E] p-8 text-white">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-urbanist mb-4 text-2xl font-bold">
                Build Your Team
              </h3>
              <p className="font-poppins mb-6 leading-relaxed text-white/90">
                Teams of 3 are formed to compete in the event. Teams comprise
                students of the School of Science and Technology.
              </p>
              <Button className="font-anaheim bg-white font-bold text-[#D97706] hover:bg-gray-100">
                REGISTER NOW →
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-[#92400E] p-8 text-white">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="font-urbanist mb-4 text-2xl font-bold">
                Mock Competition & Qualifiers
              </h3>
              <p className="font-poppins mb-6 leading-relaxed text-white/90">
                Only the best applicants are allowed to compete. The quality of
                the bots is used to determine the final competitors.
              </p>
              <Button className="font-anaheim bg-white font-bold text-[#D97706] hover:bg-gray-100">
                REGISTER NOW →
              </Button>
            </div>

            <div className="rounded-2xl bg-[#92400E] p-8 text-white">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                </svg>
              </div>
              <h3 className="font-urbanist mb-4 text-2xl font-bold">
                Main Competition Event
              </h3>
              <p className="font-poppins mb-6 leading-relaxed text-white/90">
                Qualified teams race against each other to determine the overall
                winner of the competition.
              </p>
              <Button className="font-anaheim bg-white font-bold text-[#D97706] hover:bg-gray-100">
                REGISTER NOW →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2024 MotoBot Challenge */}
      <section className="bg-white px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#7C3AED]">
              <div className="h-3 w-3 rounded-full bg-[#7C3AED]"></div>
            </div>
            <h3 className="font-urbanist text-5xl font-bold text-[#7C3AED]">
              2024
            </h3>
          </div>

          <h2 className="font-urbanist mb-4 text-5xl font-bold text-[#7C3AED]">
            MotoBot Challenge
          </h2>
          <p className="font-anaheim mb-8 text-xl text-gray-500 italic">
            Theme: The Future of Work in Africa
          </p>

          <div className="mb-12 rounded-2xl bg-gray-50 p-8">
            <h4 className="font-urbanist mb-4 text-2xl font-bold text-[#D97706]">
              Problem Statement
            </h4>
            <p className="font-poppins mb-8 text-gray-700">
              Design and build a wirelessly controlled MotoBot that demonstrates
              speed, agility, and precise steering on the race track.
            </p>

            <div className="grid grid-cols-5 gap-6 rounded-xl bg-white p-8 text-center shadow-sm">
              <div>
                <div className="font-urbanist mb-2 text-4xl font-bold text-[#7C3AED]">
                  30+
                </div>
                <div className="font-anaheim text-gray-600">Participants</div>
              </div>
              <div>
                <div className="font-urbanist mb-2 text-4xl font-bold text-[#7C3AED]">
                  10+
                </div>
                <div className="font-anaheim text-gray-600">Teams</div>
              </div>
              <div>
                <div className="font-urbanist mb-2 text-4xl font-bold text-[#7C3AED]">
                  300
                </div>
                <div className="font-anaheim text-gray-600">Attendes</div>
              </div>
              <div>
                <div className="font-urbanist mb-2 text-4xl font-bold text-[#7C3AED]">
                  5
                </div>
                <div className="font-anaheim text-gray-600">Panelists</div>
              </div>
              <div>
                <div className="font-urbanist mb-2 text-4xl font-bold text-[#7C3AED]">
                  10+
                </div>
                <div className="font-anaheim text-gray-600">Faculty</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2024 */}
          <div className="rounded-3xl bg-gray-100 p-12">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="relative">
                <div className="mx-auto h-80 w-80 overflow-hidden rounded-full">
                  <Image
                    src="/smiling-man-portrait.webp"
                    alt="Person"
                    width={400}
                    height={400}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="relative">
                <div className="font-urbanist absolute -top-8 -right-4 text-9xl text-[#7C3AED] opacity-20">
                  &quot;
                </div>
                <h3 className="font-urbanist mb-6 text-3xl font-bold text-[#7C3AED]">
                  Here lies an illustrative quote by the person on the left.
                </h3>
                <p className="font-poppins mb-6 leading-relaxed text-gray-600">
                  The event proved that student-led teams can deliver practical
                  hardware solutions when given strong mentorship, clear goals,
                  and room to experiment.
                </p>
                <div className="font-urbanist absolute right-0 -bottom-8 text-9xl text-[#7C3AED] opacity-20">
                  &quot;
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Events Timeline */}
      <section className="bg-gray-50 px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-urbanist mb-16 text-5xl font-bold text-[#D97706]">
            Our Events
          </h2>

          {/* 2025 GripperBot */}
          <div className="relative mb-16 border-l-4 border-[#7C3AED] pl-12">
            <div className="absolute top-0 -left-[18px] h-8 w-8 rounded-full border-4 border-white bg-[#7C3AED]"></div>

            <div className="mb-6 flex items-center gap-4">
              <h3 className="font-urbanist text-5xl font-bold text-[#7C3AED]">
                2025
              </h3>
            </div>

            <h4 className="font-urbanist mb-4 text-4xl font-bold text-[#7C3AED]">
              GripperBot Challenge
            </h4>
            <p className="font-anaheim mb-8 text-xl text-gray-500 italic">
              Theme: Re-imagining the Future of Labor in the African Ecosystem
            </p>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h5 className="font-urbanist mb-4 text-2xl font-bold text-[#D97706]">
                Problem Statement
              </h5>
              <p className="font-poppins mb-8 text-gray-700">
                Design and build a remote-controlled MotoBot with a gripper that
                can handle and move loads more safely and efficiently,
                demonstrating practical automation for African industrial
                contexts.
              </p>

              <div className="grid grid-cols-5 gap-6 rounded-xl bg-gray-50 p-8 text-center">
                <div>
                  <div className="font-urbanist mb-2 text-4xl font-bold text-[#7C3AED]">
                    30+
                  </div>
                  <div className="font-anaheim text-gray-600">Participants</div>
                </div>
                <div>
                  <div className="font-urbanist mb-2 text-4xl font-bold text-[#7C3AED]">
                    5+
                  </div>
                  <div className="font-anaheim text-gray-600">Teams</div>
                </div>
                <div>
                  <div className="font-urbanist mb-2 text-4xl font-bold text-[#7C3AED]">
                    300
                  </div>
                  <div className="font-anaheim text-gray-600">Attendes</div>
                </div>
                <div>
                  <div className="font-urbanist mb-2 text-4xl font-bold text-[#7C3AED]">
                    5
                  </div>
                  <div className="font-anaheim text-gray-600">Panelists</div>
                </div>
                <div>
                  <div className="font-urbanist mb-2 text-4xl font-bold text-[#7C3AED]">
                    10+
                  </div>
                  <div className="font-anaheim text-gray-600">Faculty</div>
                </div>
              </div>
            </div>
          </div>

          {/* 2024 MotoBot in timeline */}
          <div className="relative pl-12">
            <div className="absolute top-0 -left-[18px] h-8 w-8 rounded-full border-4 border-[#7C3AED] bg-white">
              <div className="h-full w-full rounded-full border-2 border-[#7C3AED]"></div>
            </div>

            <div className="flex items-center gap-4">
              <h3 className="font-urbanist text-5xl font-bold text-[#7C3AED]">
                2024
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-white px-8 py-20">
        <div className="absolute top-0 left-0 h-full w-32">
          <svg viewBox="0 0 100 400" className="h-full w-full">
            <path d="M 0 200 Q 50 100 100 200 Q 50 300 0 400" fill="#7C3AED" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 h-full w-32">
          <svg viewBox="0 0 100 400" className="h-full w-full">
            <path d="M 100 0 Q 50 100 0 200 Q 50 300 100 400" fill="#D97706" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl rounded-3xl bg-white p-12 shadow-xl">
          <h2 className="font-urbanist mb-6 text-center text-4xl font-bold text-[#7C3AED]">
            Interested in being a sponsor?
          </h2>
          <p className="font-poppins mx-auto mb-8 max-w-2xl text-center text-gray-600">
            Partner with SST Makerspace to support student innovators building
            practical solutions for real industry problems. Your sponsorship
            helps fund materials, mentorship, and competition prizes.
          </p>
          <div className="flex justify-center">
            <Button className="font-urbanist bg-[#7C3AED] px-8 py-6 text-lg font-bold text-white hover:bg-[#6D28D9]">
              BE A SPONSOR
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
