"use client";
import Link from "next/link";
import React from "react";

const error = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-2xl">smt went wrong</h1>
      <Link
        href={"/"}
        className="p-4 mt-2 border-2 dark:border-white border-black rounded-lg"
      >
        Go back to home
      </Link>
    </div>
  );
};

export default error;
