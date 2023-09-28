import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="m-5 font-overpass">
      <ul className="flex justify-center">
        <li className="p-3">
          <Link className="p-2 px-5 rounded-md bg-gray-400" href="/">Home</Link>
        </li>
        <li className="p-3">
          <Link className="p-2 px-5 rounded-md bg-amber-300" href="/about">About</Link>
        </li>
        <li className="p-3">
          <Link className="p-2 px-5 rounded-md bg-teal-500" href="/projects">Projects</Link>
        </li>
        <li className="p-3">
          <Link className="p-2 px-5 rounded-md bg-red-400" href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
