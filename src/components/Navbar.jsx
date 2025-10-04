"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { data: session, status } = useSession();

  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      {!session && (
        <li>
          <Link href="/login" className="hover:text-blue-500">
            Login
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="bg-base-100 w-full">
      <div className="navbar container mx-auto ">
        {/* Left Section */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>

          {/* Logo */}
          <Link href="/" className="text-xl font-bold whitespace-nowrap">
            BanglaBuzz
          </Link>
        </div>

        {/* Center Nav (Hidden on Mobile) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
        </div>

        {/* Right Section */}
        <div className="navbar-end gap-2">
          <ThemeToggle />

          {status === "loading" ? (
            <span className="text-sm">Loading...</span>
          ) : session ? (
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <Link href="/dashboard" className="btn btn-sm btn-primary rounded-2xl">
                Dashboard
              </Link>
              <span title={session.user.name || session.user.email} className="text-sm truncate max-w-[100px] sm:max-w-[200px]">
                {session.user.name || session.user.email}
              </span>
              <button onClick={() => signOut({ callbackUrl: "/login" })} className="btn btn-sm btn-error rounded-2xl">
                Logout
              </button>
            </div>
          ) : (
            <Link href="/login" className="btn btn-sm btn-primary rounded-2xl">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
