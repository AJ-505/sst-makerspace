import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#581C87] px-4 py-12 text-white sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 grid gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo.svg" alt="SST Makerspace Logo" width={40} height={40} />
              <div>
                <div className="text-xl font-urbanist font-bold">SST</div>
                <div className="text-sm font-urbanist">MAKERSPACE</div>
              </div>
            </div>
            <p className="mb-2 font-poppins">Km 52, Ibeju-Lekki Expressway, Lagos.</p>
            <p className="font-poppins">+234 575 4849 393</p>
          </div>

          <div className="flex items-start md:justify-end">
            <nav className="flex flex-wrap gap-x-6 gap-y-3 font-poppins md:justify-end">
              <Link href="#" className="hover:text-gray-300">
                Help Centre
              </Link>
              <Link href="#" className="hover:text-gray-300">
                Terms
              </Link>
              <Link href="#" className="hover:text-gray-300">
                Privacy
              </Link>
              <Link href="#" className="hover:text-gray-300">
                Community
              </Link>
              <Link href="#" className="hover:text-gray-300">
                Unsubscribe
              </Link>
            </nav>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-white/20 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-md text-sm font-poppins">© 2025 SST-Makerspace, Pan-Atlantic University. All rights reserved.</p>
          <div className="flex flex-wrap gap-3 md:gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
