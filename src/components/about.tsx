import data from "@/data.json";
import { Button } from "./ui/button";
import { DownloadIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden p-10 max-w-7xl mx-auto">
      <h1 className="uppercase text-6xl md:text-7xl font-bold text-start md:text-center">
        About <span className="text-[#fcbc30]">Me</span>
      </h1>

      <div className="mt-12 md:mt-32">
        <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div>
            <div>
              <h2 className="uppercase font-semibold text-3xl xl:text-4xl">
                Personal Info
              </h2>

              <div className="mt-8 grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-1">
                  <p className="md:text-xl text-gray-400 font-semibold">
                    First Name:{" "}
                  </p>
                  <p className="md:text-xl text-white">{data.first_name}</p>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="md:text-xl text-gray-400 font-semibold">
                    Last Name:{" "}
                  </p>
                  <p className="md:text-xl text-white">{data.last_name}</p>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="md:text-xl text-gray-400 font-semibold">
                    Age:{" "}
                  </p>
                  <p className="md:text-xl text-white">{data.age} Years</p>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="md:text-xl text-gray-400 font-semibold">
                    Nationality:{" "}
                  </p>
                  <p className="md:text-xl text-white">{data.nationality}</p>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="md:text-xl text-gray-400 font-semibold">
                    Freelance:{" "}
                  </p>
                  <p className="md:text-xl text-green-400">Kindnesstf</p>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="md:text-xl text-gray-400 font-semibold">
                    Location:{" "}
                  </p>
                  <p className="md:text-xl text-white">{data.location}</p>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="md:text-xl text-gray-400 font-semibold">
                    Phone:{" "}
                  </p>
                  <p className="md:text-xl text-white">{data.phone}</p>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="md:text-xl text-gray-400 font-semibold">
                    Email:{" "}
                  </p>
                  <p className="md:text-xl text-white">{data.email}</p>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="md:text-xl text-gray-400 font-semibold">
                    Github:{" "}
                  </p>
                  <p className="md:text-xl text-white">{data.github_handle}</p>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="md:text-xl text-gray-400 font-semibold">
                    Hobby:{" "}
                  </p>
                  <p className="md:text-xl text-white">
                    {data.hobby.join(", ")}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button
                className="rounded-full uppercase font-semibold text-xl py-8 px-12 bg-transparent border border-[#fcbc30] hover:bg-[#fcbc30]"
                asChild
              >
                <Link
                  href="/CV Mohammad Arfian.pdf"
                  target="_blank"
                  className="flex items-center space-x-4"
                >
                  <span>Download CV</span>
                  <DownloadIcon className="size-6" />
                </Link>
              </Button>
            </div>
          </div>
            {/* <div className="h-screen flex flex-col xl:flex-row items-center justify-center gap-8 overflow-hidden">
            <Image
                src="/images/propil.jpeg"
                alt="Portrait"
                width={1024}
                height={1024}
                className="rounded-full size-56 xl:size-[560px] object-cover border-4 border-[#4A4A4A] mx-4"/>
            </div> */}
          </div>
        </div>
      </div>
  
  );
}