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
import { AiFillGithub } from "react-icons/ai";

export default function Bottomfooter() {
  return (
    <div className="bg-slate-900 text-white">
      <div className="bg-left-bottom bg-[length:190px] bg-[width:200px] md:bg-[length:210px] bg-[url('/footer_1.png')] bg-no-repeat">
        <div className="pr-24 pl-24 pt-10 flex flex-col md:flex-row gap-y-8 md:gap-y-0 justify-evenly gap-x-10 items-stretch ">
          <div className="uppercase tracking-widest text-white font-medium text-center ">
            <h1 className="text-lg font-semibold pb-1.5">Tree++</h1>
            <Link
              href="https://maps.app.goo.gl/hNbTdR4gw9Uqn6Xk7"
              className="pb-1.5 text-xs font-light inline-flex border-b-2 transition duration-300 border-transparent hover:border-green-400"
            >
              <FaMapMarkerAlt className="pr-3" size="1.4rem" />
              House#8, Road#6, Sector 13,
              <br />
              Uttara, Dhaka-1230, <br />
              Bangladesh
            </Link>
            <br />
            <div className="text-xs font-light leading-loose inline-flex justify-left pb-1.5">
              <FaPhoneAlt className="pr-3" size="1.6rem" />
              +8801515669457
            </div>
            <br />
            <div className="text-xs font-light leading-loose inline-flex justify-left">
              <Link
                href="mailto:contact@treepp.org"
                className="text-xs font-light inline-flex border-b-2 transition duration-300 border-transparent hover:border-green-400 items-center"
              >
                <FaEnvelope className="pr-3" size="1.6rem" /> contact@treepp.org
              </Link>
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
              News <br />
            </Link>
            <Link
              href="#"
              className="font-light text-xs border-b-2 transition duration-300 border-transparent hover:border-green-400"
            >
              FAQ
              <br />
            </Link>
          </div>

          <div className="text-lg font-semibold uppercase tracking-widest text-white text-center flex-row">
            Find us on:
            <br />
            <div className="font-light text-xs inline-flex border-b-2 transition duration-300 border-transparent hover:border-green-400">
              <Link
                href="https://opencollective.com/tree-pp"
                className="flex items-center"
              >
                <CgOpenCollective className="mr-2" size="1rem" /> OpenCollective
              </Link>
            </div>
            <br />
            <div className="font-light text-xs inline-flex border-b-2 transition duration-300 border-transparent hover:border-green-400">
              <Link
                href="https://www.facebook.com/treepp.org"
                className="flex items-center"
              >
                <FaFacebookF className="mr-2" size="1rem" /> Facebook
              </Link>
            </div>
            <br />
            <div className="font-light text-xs inline-flex border-b-2 transition duration-300 border-transparent hover:border-green-400">
              {" "}
              <Link
                href="https://www.linkedin.com/company/tree-pp/"
                className="flex items-center"
              >
                <FaLinkedinIn className="mr-2" size="1rem" /> LinkedIn
              </Link>
            </div>
            <br />
            <div className="font-light text-xs inline-flex border-b-2 transition duration-300 border-transparent hover:border-green-400">
              <Link
                href="https://github.com/tree-pp"
                className="flex items-center"
              >
                <AiFillGithub className="mr-2" size="1rem" /> Github
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
          <div className="text-md text-white font-light flex items-center mt-20">
            <FaRegCopyright className="mr-2" size="1.25rem" />
            <span className="pr-20">
              2023 Tree++&nbsp;&nbsp;|&nbsp;&nbsp;All rights reserved.
            </span>
          </div>
        </div>
      </div> */}
        <div className="flex md:flex-col pb-0 flex-row md:justify-start">
          {/* <div className="flex-shrink-0">
          <Image
            src="/footer_1.png"
            alt=""
            className="md:h-40 md:w-auto h-30 w-40"
            width="1"
            height="1"
            unoptimized
          />
        </div> */}
          <div className=" items-center justify-center text-md text-slate-400 font-light text-center">
            <div className="px-4 md:pt-8 md:pb-10 pt-5 pb-5 inline-flex">
              <FaRegCopyright
                className="pr-1.5 mb-2 mx-auto md:mx-0 md:mr-2 pt-1"
                size="1.2rem"
              />{" "}
              2023 Tree++ | All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
