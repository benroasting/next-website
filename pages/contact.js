import React from "react";
import Link from "next/link";

function contact() {
  return (
    <div className="flex min-h-screen flex-col items-center p-12 font-overpass">

            <h1 className="text-4xl font-bold mb-3">Contact</h1>
            <div>
                <div className="flex flex-col mb-5 border-b-2 border-sky-600 pb-5">
                    <p className="text-2xl font-bold ">Ben Young</p>
                    <p className="text-lg">Software Engineer</p>
                    <p className="text-lg">... currently in Nashville, TN</p>
                </div>
                <div className="mb-5 border-b-2 border-sky-600 pb-5">
                    <p className="text-lg">developing.ben@gmail.com</p>
                    <p className="text-lg">501.548.5087</p>
                </div>

                <div >
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
