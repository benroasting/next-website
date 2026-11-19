import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const links = [
  { href: "/", label: "Home", color: "bg-mustard" },
  { href: "/about", label: "About", color: "bg-tangerine" },
  { href: "/projects", label: "Projects", color: "bg-olive text-paper" },
  { href: "/contact", label: "Contact", color: "bg-brick text-paper" },
];

function Navbar() {
  const { pathname } = useRouter();
  return (
    <nav className="px-5 pt-8 pb-4 font-overpass">
      <p className="mb-4 hidden text-center text-sm text-brick sm:block">
        ben@portfolio:~$ <span className="cursor" />
      </p>
      <ul className="flex flex-wrap justify-center gap-3">
        {links.map(({ href, label, color }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <li key={href}>
              <Link
                href={href}
                className={`retro-btn rounded-full px-5 text-sm normal-case ${color} ${
                  active ? "translate-x-[2px] translate-y-[2px] shadow-retro-sm-hover" : ""
                }`}
              >
                {active ? `> ${label}` : label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
