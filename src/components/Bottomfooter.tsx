import Link from "next/link";
import Image from 'next/image'
import React from "react";
import{ FaFacebookF, FaLinkedinIn, FaGithubSquare, FaRegCopyright } from 'react-icons/fa';

export default function Bottomfooter() {
  return (
    <div className="bg-slate-900"> 
      <div className="pr-24 pl-24 pt-10 flex flex-col md:flex-row gap-y-8 md:gap-y-0 justify-evenly gap-x-10 items-stretch">
        <div className="uppercase tracking-widest text-white font-medium text-center border-b-2 transition duration-300 border-transparent hover:border-green-400">
          <h1 className="text-lg font-semibold">Tree++<br/></h1>
          <Link href="https://goo.gl/maps/aofQWDw2cKsLtNg77" className="text-xs font-light">
            Somewhere,<br/>
            Dhaka, <br/>
            Bangladesh<br/></Link>
            
        </div>
        
        <div className="uppercase tracking-widest text-white font-medium text-center">
          <h1 className="text-lg font-semibold">About us<br/></h1>
          <Link href="#" className="font-light text-xs border-b-2 transition duration-300 border-transparent hover:border-green-400">
            Story<br/></Link>
          <Link href="#" className="font-light text-xs border-b-2 transition duration-300 border-transparent hover:border-green-400">News </Link>
        </div>

        <div className="uppercase tracking-widest text-white font-medium text-center">
          <h1 className="text-lg font-semibold">Find us on:<br/></h1>
          <div className="font-light text-xs inline-flex">Facebook: <Link href="https://www.facebook.com/treepp.org"><FaFacebookF className="border-b-2 transition duration-300 border-transparent hover:border-green-400" size='1rem' /></Link></div><br/>
          <div className="font-light text-xs inline-flex">LinkedIn: <Link href="https://www.linkedin.com/company/tree-pp/"><FaLinkedinIn className="border-b-2 transition duration-300 border-transparent hover:border-green-400" size='1rem' /></Link></div><br/>
          <div className="font-light text-xs inline-flex">Github: <Link href="https://github.com/tree-pp"><FaGithubSquare className="border-b-2 transition duration-300 border-transparent hover:border-green-400" size='1rem' /></Link></div>
        </div>

        <div className="uppercase tracking-widest text-white font-medium text-center">
          <h1 className="text-lg font-semibold">Learn more<br/></h1>
          <Link href="#" className="font-light text-xs border-b-2 transition duration-300 border-transparent hover:border-green-400">
            Contact us<br/></Link>
          <Link href="#" className="font-light text-xs border-b-2 transition duration-300 border-transparent hover:border-green-400">Legals<br/></Link>
          <Link href="#" className="font-light text-xs border-b-2 transition duration-300 border-transparent hover:border-green-400">Data policy</Link>
        </div>
      </div>
      <div className="flex flex-row space-x-11 inline-flex w-full justify-start">
        <Image src="/footer_1.png" alt="" className="h-40 w-auto pr-80" width="1" height="1" unoptimized />
        <div className="text-xs text-white font-light inline-flex pt-20 pl-50"><FaRegCopyright className="font-light" size='1rem' />2023 Tree++. All rights reserved.</div>
      </div>
    </div>
  );
}