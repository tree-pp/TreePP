"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AiOutlineArrowRight } from "react-icons/ai";

const imageStyle = {
  borderRadius: "50%",
  border: "1px solid #fff",
};

const imageStyle2 = {
  borderRadius: "1%", // border radius of the image
  border: "1px solid #fff", // change the #fff to #000 to see the border
};

const OurTeam = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col section-spacing " ref={ref}>
      <motion.div className="flex flex-col justify-center items-center">
        <motion.h1
          className="head-text text-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          Our <b>Team</b>
        </motion.h1>
        <motion.p
          className="h-1 bg-green-500 md:w-24 w-20 rounded-full"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.2 }}
        ></motion.p>
      </motion.div>
      <motion.div
        className="self-center flex-wrap mt-10 pb-5"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Image
          src="/team.png"
          width={800}
          height={450}
          alt="Picture of the team"
          style={imageStyle2}
        />
      </motion.div>
      {/* <motion.p
        className="pt-10 flex justify-center items-center uppercase tracking-wide text-black md:text-xl text-sm font-light border-b-2 transition duration-300 border-transparent hover:border-green-500"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Link href="/about">Learn More</Link>
        <AiOutlineArrowRight className="ml-1" />
      </motion.p> */}
    </div>
  );
};

export default OurTeam;

// const imageStyle = {
//   borderRadius: '50%',
//   border: '1px solid #fff',
// }

// const imageStyle2 = {
//   borderRadius: '1%', // border radius of the image
//   border: '1px solid #fff', //change the #fff to #000 to see the border
// }

// const OurTeam = () => {
// --------Previous Code with separate images of team members------------
// const TeamInfo = [
//   {
//     imageSrc: "https://i.guim.co.uk/img/media/7b482387e8703a4abb253b8007b1eadcbe2ba822/1648_678_2104_1262/master/2104.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=edce965d6ff3ae12506e32af212bec24",
//     text: "CEO",
//   },
//   {
//     imageSrc: "https://i.guim.co.uk/img/media/7b482387e8703a4abb253b8007b1eadcbe2ba822/1648_678_2104_1262/master/2104.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=edce965d6ff3ae12506e32af212bec24",
//     text: "Chairman",
//   },
//   {
//     imageSrc: "https://i.guim.co.uk/img/media/7b482387e8703a4abb253b8007b1eadcbe2ba822/1648_678_2104_1262/master/2104.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=edce965d6ff3ae12506e32af212bec24",
//     text: "Accountant",
//   },
//   {
//     imageSrc: "https://i.guim.co.uk/img/media/7b482387e8703a4abb253b8007b1eadcbe2ba822/1648_678_2104_1262/master/2104.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=edce965d6ff3ae12506e32af212bec24",
//     text: "Manager",
//   },
//   {
//     imageSrc: "https://i.guim.co.uk/img/media/7b482387e8703a4abb253b8007b1eadcbe2ba822/1648_678_2104_1262/master/2104.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=edce965d6ff3ae12506e32af212bec24",
//     text: "Engineer",
//   },
//   {
//     imageSrc: "https://i.guim.co.uk/img/media/7b482387e8703a4abb253b8007b1eadcbe2ba822/1648_678_2104_1262/master/2104.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=edce965d6ff3ae12506e32af212bec24",
//     text: "Builder",
//   },

//   // Can add more person as needed
// ];
// return (
//   <div className="our-goals flex flex-col py-4 px-4 md:px-12 bg-white">
//     <div className="flex flex-col justify-center items-center mb-6">
//       <h1 className="md:text-3xl text-black text-2xl font-bold text-center">
//         Our Team
//       </h1>
//       <div className="h-1 bg-green-500 md:w-24 w-20 rounded-full"></div>
//     </div>
//     <div className="self-center flex-wrap">
//     <Image
//     src="/team.png"
//     width={800}
//     height={450}
//     alt="Picture of the team"
//     style={imageStyle2}
//     />
//     </div>
{
  /* --------------Code for showing each team member -------------------*/
}
{
  /* <div className="flex flex-col md:flex-row md:flex-wrap mt-2 items-center">
        {TeamInfo.slice(0).map((person, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-full md:w-1/6 p-3"
          >
            <Image
              width={150}
              height={150}
              src={person.imageSrc}
              alt={`Person ${index + 1}`}
              style={imageStyle}
              className="mb-2"
            />
            <p className="text-black font-sans text-center leading-tight">
              {person.text}
            </p>
          </div>
        ))}
      </div> */
}
//       <div className="flex justify-center mt-4">
//         <Link href="/Team">
//           <span className="text-md text-black duration-300 border-b-2 border-green-500 hover:text-green-500 hover:border-green-600">
//             See more
//           </span>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default OurTeam;
