"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#C39748]/20 bg-black/90 shadow-xl backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
       <Link href="/" className="flex items-center">
  <Image
    src="/images/tml-logo.png"
    alt="TML Contractors "
    width={220}
    height={88}
    priority
    className="h-16 w-auto"
  />
</Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wider text-white transition hover:text-[#C39748]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:3137414388"
            className="flex items-center gap-2 rounded-xl border border-[#C39748] px-5 py-3 font-semibold text-[#C39748] transition hover:bg-[#C39748] hover:text-black"
          >
            <Phone size={18} />
            (313) 741-4388
          </a>

          <Link
            href="/contact"
            className="rounded-xl bg-[#C39748] px-6 py-3 font-bold text-black transition duration-300 hover:scale-105"
          >
            Free Estimate
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-zinc-800 bg-black lg:hidden">
          <nav className="flex flex-col px-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-zinc-800 py-4 text-lg text-white transition hover:text-[#C39748]"
              >
                {link.name}
              </Link>
            ))}

            <a
              href="tel:3137414388"
              className="mt-6 rounded-xl border border-[#C39748] py-4 text-center font-semibold text-[#C39748]"
            >
              Call (313) 741-4388
            </a>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-xl bg-[#C39748] py-4 text-center font-bold text-black"
            >
              Request Free Estimate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}