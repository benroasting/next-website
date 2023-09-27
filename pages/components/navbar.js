import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div>
      <ul className="flex justify-center font-overpass">
        <li className="p-3">
          <Link className="p-2 rounded-md bg-gray-400" href="/">Home</Link>
        </li>
        <li className="p-3">
          <Link className="p-2 rounded-md bg-amber-300" href="/about">About</Link>
        </li>
        <li className="p-3">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="p-3">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
