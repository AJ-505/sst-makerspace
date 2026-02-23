import Link from "next/link";
import Image from "next/image";
import { MobileNavbar } from "./ui/mobile-navbar";

type NavLinks = {
  name: string;
  href: string;
};

const navLinks: NavLinks[] = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "About", href: "/about" },
];

function NavLinkList() {
  return (
    <>
      {navLinks.map((link) => (
        <Link
          href={link.href}
          className="z-100 hover:text-gray-300"
          key={link.name}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}

export function Header() {
  return (
    <header className="bg-black px-2 py-3 text-white sm:p-5">
      <div className="flex justify-between">
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/logo.svg"
            alt="SST Makerspace Logo"
            width={32}
            height={32}
          />
          <span className="font-urbanist text-lg font-semibold">
            SST Makerspace
          </span>
        </Link>

        <nav className="font-poppins hidden gap-8 md:inline-flex">
          <NavLinkList />
        </nav>

        <MobileNavbar>
          <NavLinkList />
        </MobileNavbar>
      </div>
    </header>
  );
}
