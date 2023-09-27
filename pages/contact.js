import React from "react";
import Link from "next/link";

function contact() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold">Contact:</h1>
      <div className="flex">
        <div>
          <p className="text-xl">Ben Young</p>
          <p className="text-lg">Software Engineer & Reformed Coffee Snob</p>
        </div>
        <div>
          <div className="py-2">
            <p className="text-lg">developing.ben@gmail.com</p>
            <p className="text-lg">501.548.5087</p>
            <p className="text-lg">currently in Nashville, TN</p>
          </div>

          <p className="text-lg">
            <Link href={"https://github.com/benroasting"}>GitHub</Link>
          </p>
          <p className="text-lg">
            <Link href={"https://linkedin.com/in/benjamin-young-developing"}>
              LinkedIn
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default contact;
