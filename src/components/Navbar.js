import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
  <div className="flex justify-center shadow-xl">
    <ul className="flex">
      <li className="mr-6">
        <h2 className="text-blue-500 hover:text-blue-800"><Link href="/">Home</Link></h2>
      </li>
      <li className="mr-6">
        <h2 className="text-blue-500 hover:text-blue-800"><Link href="/photo">Photo</Link></h2>
      </li>
      <li className="mr-6">
        <h2 className="text-blue-500 hover:text-blue-800"><Link href="/contents">Contents</Link></h2>
      </li>
      <li className="mr-6">
        <h2 className="text-blue-500 cursor-not-allowed"><Link href="/login">Login</Link></h2>
      </li>
    </ul>
  </div>
  )
}

export default Navbar;


