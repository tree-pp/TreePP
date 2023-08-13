"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Divide as Hamburger } from 'hamburger-react'
// import Font Awesome CSS

// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above


import { useState } from "react"; // import state

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (

      
     

    <div className="pr-14 pl-12 py-2 bg-slate-900 gap-y-8 md:gap-y-0 flex items-center justify-between font-bold">
    <Image
        alt="TreePP Logo"
        width={135}
        height={54}
        src="/homepage_logo.svg" />

      <nav>
        <section className="MOBILE-MENU flex lg:hidden">

        <Hamburger rounded color="#FFF" easing="ease-in" onToggle={toggled => {
           if (toggled) {
            setIsNavOpen((prev) => !prev) // open a menu
          } else {
            setIsNavOpen(false)// close a menu
               }
          }} />
          {/* <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 bg-black"></span>
            <span className="block h-0.5 w-8 bg-white"></span>
            <span className="block h-0.5 w-8 bg-white"></span>
          </div> */}

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="uppercase tracking-widest text-black text-xs border-b-2 transition duration-500 border-transparent hover:text-green-400 hover:border-green-500"
       >
                <a href="/mission">Mission</a>
              </li>
              <li className="uppercase tracking-widest text-xs text-black border-b-2 transition duration-500 border-transparent hover:text-green-400 hover:border-green-500">
                <a href="/vision">Vision</a>
              </li>
              <li className="uppercase tracking-widest text-black text-xs border-b-2 transition duration-500 border-transparent hover:text-green-400 hover:border-green-500">
       
                <a href="/team">Team</a>
              </li>
              <li className="uppercase tracking-widest text-xs text-slate-800 hover:text-white bg-green-400 hover:bg-green-700 px-6 py-2 rounded-full transition duration-500">
        
                <a href="/join">Join</a>
              </li>
            </ul>
          </div>
        </section>
        <div className="DESKTOP-MENU hidden lg:flex gap-x-10 items-center">
       
        <Link
          href="/mission"
          className="uppercase tracking-widest text-xs text-white border-b-2 transition duration-500 border-transparent hover:text-green-400 hover:border-green-500"
        >
          Mission
        </Link>
        <Link
          href="/vision"
          className="uppercase tracking-widest text-white text-xs border-b-2 transition duration-500 border-transparent hover:text-green-400 hover:border-green-500"
        >
          Vision
        </Link>
        <Link
          href="/team"
          className="uppercase tracking-widest text-white text-xs border-b-2 transition duration-500 border-transparent hover:text-green-400 hover:border-green-500"
        >
          Team
        </Link>
        <Link
          href="/join"
          className="uppercase tracking-widest text-xs text-slate-800 hover:text-white bg-green-400 hover:bg-green-700 px-6 py-2 rounded-full transition duration-500"
        >
          Join
        </Link>
        </div>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 64px;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        padding-top: 200px;
        align-items: center;
      }
    `}</style>
    </div>
  );
}


// export default function Navbar() {
//     // let Links = [
//     //     {name:"Mission",link:"/"},
//     //     {name:"Vision",link:"/"},
//     //     {name:"Team",link:"/"},
//     // ];
//     return (
{/* <div className="pr-14 pl-12 py-2 bg-slate-900 flex flex-col md:flex-row gap-y-8 md:gap-y-0 justify-between items-center font-bold">
      
          <Image
            alt="TreePP Logo"
            width={135}
            height={54}
            src="/homepage_logo.svg" /> */}

//       <div className="flex flex-col md:flex-row gap-x-10 items-center">
        // <Link
        //   href="/mission"
        //   className="uppercase tracking-widest text-xs text-white border-b-2 transition duration-500 border-transparent hover:text-green-400 hover:border-green-500"
        // >
        //   Mission
        // </Link>
        // <Link
        //   href="/vision"
        //   className="uppercase tracking-widest text-white text-xs border-b-2 transition duration-500 border-transparent hover:text-green-400 hover:border-green-500"
        // >
        //   Vision
        // </Link>
        // <Link
        //   href="/team"
        //   className="uppercase tracking-widest text-white text-xs border-b-2 transition duration-500 border-transparent hover:text-green-400 hover:border-green-500"
        // >
        //   Team
        // </Link>
        // <Link
        //   href="/join"
        //   className="uppercase tracking-widest text-xs text-slate-800 hover:text-white bg-green-400 hover:bg-green-700 px-6 py-2 rounded-full transition duration-500"
        // >
        //   Join
        // </Link>
//       </div>
//     </div>

// //For RESPONSIVE NAV-BAR
// //     <div className="shadow-md w-full fixed top-0 left-0">
// //         <div className="flex flex-row items-center justify-between bg-slate-900 py-2 md:px-10 px-7">
// //             <div className="cursor-pointer flex items-center font-[] text-green-700">
// // {/* //                 <span className="text-3xl text-green-500 mr-1 pt-0 ">
// // //                <FontAwesomeIcon icon={faTree} style={{ fontSize: 40, color: "green" }}/>
// // //                </span> */}
// //              <img src="/homepage_logo.svg" className="h-10 w-30"/>
// //             </div>
// //             {/* <div className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
// //             <FontAwesomeIcon icon={faBars} style={{ fontSize: 35 }}/>
// //             </div> */}
// //             <ul className="flex flex-col md:flex-row gap-x-10 items-center">
// //                 {
// //                     Links.map((link)=>(
// //                         // eslint-disable-next-line react/jsx-key
// //                         <li key={link.name} className="md:ml-10 text-xl md:my-0 my-6">
// //                             <a href={link.link} className=" uppercase tracking-widest text-sm text-white font-medium border-b-2 transition duration-300 border-transparent hover:border-green-400 hover:text-green-300">{link.name}</a>
// //                         </li>
// //                     ))
// //                 }
// //             </ul>
// //             <Link
// //           href="/join"
// //           className="uppercase tracking-widest text-sm font-medium text-slate-800 hover:text-white bg-green-400 hover:bg-green-700 px-6 py-2 rounded-full transition duration-300"
// //         >
// //           Join
// //         </Link>
// //         </div>
// //     </div>
//     )
//   }