import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-center items-center py-4">
        <img src="caba.png" alt="" />
      </div>

      <div className="bg-blue-800 text-white flex justify-evenly items-center py-2 px-4">
        <Link className=" hover:text-slate-400" href="/">
          Home
        </Link>
        <Link className=" hover:text-slate-400" href="constitution">
          Constitution
        </Link>
        <Link className=" hover:text-slate-400" href="members">
          Members
        </Link>
        <Link className=" hover:text-slate-400" href="gallery">
          Gallery
        </Link>
        <Link className=" hover:text-slate-400" href="employee">
          Employee
        </Link>
        <Link className=" hover:text-slate-400" href="contact">
          Contact
        </Link>
      </div>
    </div>
  );
}
