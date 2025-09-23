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
    <div className="bg-base-100 ">
      <div className="navbar  container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <Link href="/" className=" text-xl">
            BanglaBuzz
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <ThemeToggle />

        <div className="navbar-end">
          {status === "loading" ? (
            <span>Loading...</span>
          ) : session ? (
            <div className="flex items-center gap-2">
              <Link href="/dashboard" className="mr-2 btn btn-sm btn-primary">
                Dashboard
              </Link>
              <span>{session.user.name || session.user.email}</span>
              <button onClick={() => signOut({ callbackUrl: "/login" })} className="btn btn-sm btn-error">
                Logout
              </button>
            </div>
          ) : (
            <Link href="/login" className="btn btn-sm btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
