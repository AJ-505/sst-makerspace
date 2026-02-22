import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="bg-black text-white py-4 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="SST Makerspace Logo"
            width={32}
            height={32}
          />
          <span className="font-urbanist font-semibold text-lg">
            SST Makerspace
          </span>
        </Link>
        <nav className="md:flex gap-8 font-poppins hidden">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/events" className="hover:text-gray-300">
            Events
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
