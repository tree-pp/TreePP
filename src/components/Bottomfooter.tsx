import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithubSquare,
  FaRegCopyright,
  FaMapMarkerAlt, 
  FaPhoneAlt,
  FaEnvelope,

} from "react-icons/fa";

import { CgOpenCollective } from "react-icons/cg";

export default function Bottomfooter() {
  return (
    <div className="bg-slate-900">
      <div className="pr-24 pl-24 pt-10 flex flex-col md:flex-row gap-y-8 md:gap-y-0 justify-evenly gap-x-10 items-stretch">
        <div className="uppercase tracking-widest text-white font-medium text-center ">
            <h1 className="text-lg font-semibold pb-1.5">
              Tree++
            </h1>
            <Link
              href="https://maps.app.goo.gl/hNbTdR4gw9Uqn6Xk7"
              className="pb-1.5 text-xs font-light inline-flex border-b-2 transition duration-300 border-transparent hover:border-green-400"
              >
                <FaMapMarkerAlt
                  className="pr-3"
                  size="1.4rem"
                />
                House#8, Road#6, Sector 13,
                <br />
                Uttara, Dhaka-1230, <br />
                Bangladesh
              </Link>
              <br />
            <div className="text-xs font-light leading-loose inline-flex justify-left pb-1.5">
              <FaPhoneAlt
                className="pr-3"
                size="1.6rem"
              />
              +8801515669457 
            </div>
            <br />
            <div className="text-xs font-light leading-loose inline-flex justify-left">
              <FaEnvelope
                className="pr-3"
                size="1.6rem"
              />
              contact@treepp.org
            </div>
        </div>
        <div className="uppercase tracking-widest text-white font-medium text-center">
          <h1 className="text-lg font-semibold">
            About us
            <br />
          </h1>
          <Link
            href="#"
            className="font-light text-xs border-b-2 transition duration-300 border-transparent hover:border-green-400"
          >
            Whitepaper
            <br />
          </Link>
          <Link
            href="#"
            className="font-light text-xs border-b-2 transition duration-300 border-transparent hover:border-green-400"
          >
            Story
            <br />
          </Link>
          <Link
            href="#"
            className="font-light text-xs border-b-2 transition duration-300 border-transparent hover:border-green-400"
          >
            News{" "}
            <br /
            >
          </Link>
          <Link
            href="#"
            className="font-light text-xs border-b-2 transition duration-300 border-transparent hover:border-green-400"
          >
            FAQ
            <br />
          </Link>
        </div>


        <div className="text-lg font-semibold uppercase tracking-widest text-white text-center">
          Find us on:
          <br />
          <div className="font-light text-xs inline-flex">
            OpenCollective:{" "}
            <Link href="https://opencollective.com/tree-pp">
              <CgOpenCollective
                className="border-b-2 transition duration-300 border-transparent hover:border-green-400"
                size="1.25rem"
              />
            </Link>
          </div>
          <br />
          <div className="font-light text-xs inline-flex">
            Facebook:{" "}
            <Link href="https://www.facebook.com/treepp.org">
              <FaFacebookF
                className="border-b-2 transition duration-300 border-transparent hover:border-green-400"
                size="1rem"
              />
            </Link>
          </div>
          <br />
          <div className="font-light text-xs inline-flex">
            LinkedIn:{" "}
            <Link href="https://www.linkedin.com/company/tree-pp/">
              <FaLinkedinIn
                className="border-b-2 transition duration-300 border-transparent hover:border-green-400"
                size="1rem"
              />
            </Link>
          </div>
          <br />
          <div className="font-light text-xs inline-flex">
            Github:{" "}
            <Link href="https://github.com/tree-pp">
              <FaGithubSquare
                className="border-b-2 transition duration-300 border-transparent hover:border-green-400"
                size="1rem"
              />
            </Link>
          </div>
          <br />
        </div>

        <div className="text-lg font-semibold uppercase tracking-widest text-white text-center">
          <h1 className="text-md">
            Learn more
            <br />
          </h1>
          <Link
            href="#"
            className="font-light text-xs border-b-2 transition duration-300 border-transparent hover:border-green-400"
          >
            Contact us
            <br />
          </Link>
          <Link
            href="#"
            className="font-light text-xs border-b-2 transition duration-300 border-transparent hover:border-green-400"
          >
            Legals
            <br />
          </Link>
          <Link
            href="#"
            className="font-light text-xs border-b-2 transition duration-300 border-transparent hover:border-green-400"
          >
            Data policy
          </Link>
        </div>
      </div>
      {/* <div className="flex flex-row items-center justify-start">
        <div className="flex-shrink-0">
          <Image
            src="/footer_1.png"
            alt=""
            className="h-40 w-auto"
            width="1"
            height="1"
            unoptimized
          />
        </div>
        <div className="flex-grow flex items-center justify-center">
          <div className="text-md text-white font-light flex items-center mt-5">
            <FaRegCopyright className="mr-2" size="1.25rem" />
            <span className="pr-20">
              2023 Tree++&nbsp;&nbsp;|&nbsp;&nbsp;All rights reserved.
            </span>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col pb-0 flex-row md:justify-start">
      <div className="flex-shrink-0">
          <Image
            src="/footer_1.png"
            alt=""
            className="md:h-40 md:w-auto h-30 w-40"
            width="1"
            height="1"
            unoptimized
          />
        </div>
        <div className=" items-center justify-center text-md text-white font-light text-center">
        <p className="px-4 pb-2 inline-flex pt-0"><FaRegCopyright className="pr-1.5 mb-2 mx-auto md:mx-0 md:mr-2 pt-1" size="1.2rem" /> 2023 Tree++ | All rights reserved.</p>
        </div>
      </div>

    </div>  
  );
}
