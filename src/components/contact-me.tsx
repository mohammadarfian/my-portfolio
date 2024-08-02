import Link from "next/link";
import Image from "next/image";
import data from "@/data.json";
import ContactForm from "@/components/contact-form";
import { MailIcon, MapIcon, PhoneIcon } from "lucide-react";

export default function ContactMe() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden p-10 max-w-7xl mx-auto">
      <h1 className="uppercase text-4xl md:text-7xl font-bold text-start md:text-center">
        Contact <span className="text-[#fcbc30]">Me</span>
      </h1>

      <div className="mt-12 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-16">
        <div>
          <h2 className="uppercase font-semibold text-3xl xl:text-4xl">
            Don&apos;t be shy!
          </h2>
          <p className="mt-2 text-lg">
            Feel free to contact me. I am always open to discussion, happy to help.
          </p>

          <div className="mt-12 flex flex-col gap-8">
            <div className="flex space-x-4">
              <MapIcon className="size-10 mr-4 text-[#fcbc30]" />
              <div>
                <p className="uppercase text-gray-400 text-2xl">Location</p>
                <p className="text-lg font-semibold">{data.location}</p>
              </div>
            </div>

            <div className="flex space-x-4">
              <MailIcon className="size-10 mr-4 text-[#fcbc30]" />
              <div>
                <p className="uppercase text-gray-400 text-2xl">Email</p>
                <p className="text-lg font-semibold">{data.email}</p>
              </div>
            </div>

            <div className="flex space-x-4">
              <PhoneIcon className="size-10 mr-4 text-[#fcbc30]" />
              <div>
                <p className="uppercase text-gray-400 text-2xl">Phone</p>
                <p className="text-lg font-semibold">{data.phone}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 inline-flex space-x-4">
            {data.social_links.map((social, index) => (
              <Link
                key={index}
                href={social.url}
                target="_blank"
                className="p-4 mx-auto hover:bg-[#222] transition-colors duration-300 cursor-pointer"
              >
                <Image
                  src={social.icon}
                  alt={social.url}
                  width={40}
                  height={22}
                />
              </Link>
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
        <div>
            <p className="font-medium text-sm text-slate-500 text-center mt-5">Copyright © Mohammad Arfian, All rights reserved.</p>
        </div>
    </div>
  );
}