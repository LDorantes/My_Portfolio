"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/timeline", label: "Timeline" },
    { href: "/projects", label: "Projects" },
    { href: "/gallery", label: "Gallery" },
    { href: "/certificates", label: "Certificates" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-lg shadow z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-brand-purple tracking-tight">
          LD<span className="text-brand-orange">.</span>
        </Link>

        <ul className="flex gap-8 text-gray-700 font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`hover:text-brand-blue transition ${
                  pathname === l.href ? "text-brand-purple font-semibold" : ""
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
