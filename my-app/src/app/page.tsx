"use client";

import { Button } from "@/components/ui/button";
import { SignOutButton, useAuth, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="block">
      <div className="flex justify-between items-center p-5">
        <img
          src="https://expense-tracker-tubeguruji.vercel.app/logo.svg"
          alt=""
          width={160}
          height={100}
        />
        <div className="flex gap-3 items-center">
          <Button className="text-black bg-white p-5 hover:bg-accent">
            <Link href={"/dashboard"}>Dashboard</Link>
          </Button>
          <Button className="text-white bg-indigo-700 p-5 hover:bg-primary/90">
            <Link href={"/sign-in"}>Get Started</Link>
          </Button>
        </div>
      </div>
      <section className="bg-gray-50 flex items-center flex-col">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Manage Your Expense
              <strong className="font-extrabold text-primary sm:block">
                {" "}
                Control your Money{" "}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Start Creating your budget and save ton of money
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="#"
              >
                Get Started
              </a>

              <a
                className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <Image src='/image.jpg' alt="image" width={1000} height={700} className="rounded-xl mt-5 border-2"/>
      </section>
      
    </div>
  );
}
