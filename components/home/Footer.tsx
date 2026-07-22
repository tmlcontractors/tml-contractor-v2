import Link from "next/link";
import { Phone, MapPin, Mail, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">

          {/* Company */}
          <div>
            <Image
  src="/images/tml-logo.png"
  alt="TML Contractors"
  width={220}
  height={80}
  className="h-16 w-auto"
/>

            <p className="mt-4 leading-7 text-zinc-400">
              Providing dependable residential and commercial construction
              services throughout Michigan with quality craftsmanship and honest
              communication.
            </p>

            <p className="mt-6 font-medium text-zinc-500">
              Licensed • Bonded • Insured
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-5 text-xl font-bold text-white">
              Quick Links
            </h4>

            <ul className="space-y-4 text-zinc-400">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Services", "/services"],
                ["Projects", "/projects"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-2 transition hover:text-[#C39748]"
                  >
                    <ArrowRight className="h-4 w-4" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-xl font-bold text-white">
              Contact Us
            </h4>

            <div className="space-y-4 text-zinc-400">

              <a
                href="tel:3137414388"
                className="flex items-center gap-3 transition hover:text-[#C39748]"
              >
                <Phone className="h-5 w-5" />
                (313) 741-4388
              </a>

              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#C39748]" />
                Serving All of Michigan
              </div>

              <a
                href="mailto:info@tmlcontractors.com"
                className="flex items-center gap-3 transition hover:text-[#C39748]"
              >
                <Mail className="h-5 w-5" />
                Tevin@hartandcrowncoatings.com
              </a>

            </div>

            <Link
              href="/contact"
              className="mt-8 inline-block rounded-xl bg-[#C39748] px-6 py-3 font-bold text-black transition duration-300 hover:scale-105"
            >
              Request a Free Estimate
            </Link>
          </div>
        </div>

        <div className="mt-16 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} TML Contractors. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}