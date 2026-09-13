import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "TML Contractor | General Contracting in Southeast Michigan",
  description: "TML Contractor provides residential and commercial construction, remodeling, painting, roofing, maintenance, and property improvement services throughout Southeast Michigan.",
  metadataBase: new URL("https://tmlcontractors.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "TML Contractor | General Contracting in Southeast Michigan",
    description: "Residential and commercial construction, remodeling, roofing, painting, maintenance, and property improvement services throughout Southeast Michigan.",
    url: "https://tmlcontractors.com",
    siteName: "TML Contractor",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header /><main>{children}</main><Footer /></body></html>;
}
