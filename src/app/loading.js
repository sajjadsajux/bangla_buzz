"use client";

import ClipLoader from "react-spinners/ClipLoader";

export default function Loading() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <ClipLoader color="#2563eb" size={50} /> {/* blue-600 spinner */}
      <p className="mt-4 text-gray-600 text-lg">Loading, please wait...</p>
    </section>
  );
}
