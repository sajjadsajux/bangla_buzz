"use client";

import { HashLoader } from "react-spinners";

export default function Loading() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <HashLoader color="#2563eb" size={50} /> {/* blue-600 spinner */}
    </section>
  );
}
