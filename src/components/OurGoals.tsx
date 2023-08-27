"use client";
// import Image from "next/image";

// const OurGoals = () => {
//   const goalsData = [
//     {
//       imageSrc: 'coo.png',
//       text: 'Create climate resilient and zero-carbon world',
//     },
//     {
//       imageSrc: 'planet-earth.png',
//       text: 'Rebuild food systems to nourish people and nature',
//     },
//     {
//       imageSrc: 'save-the-planet.png',
//       text: 'Conserve the world\'s most important forests',
//     },
//     {
//       imageSrc: 'sustainability.png',
//       text: 'Protect freshwater resources and landscapes',
//     },
//     {
//       imageSrc: 'tree.png',
//       text: 'Achieve healthy oceans and nature positive seascapes',
//     },
//     {
//       imageSrc: 'environmentalism.png',
//       text: 'Conserve wildlife and wild places',
//     },
//     // Add more goals data objects as needed
//   ];

//   return (
//     <div className="our-goals flex flex-col py-4 px-12  bg-slate-50">
//       <div className="  flex flex-col justify-center items-center">
//         <h1 className="text-black text-3xl font-bold text-center">Our Goals</h1>
//         <div className="h-1 bg-green-500 w-20 rounded-full"></div>
//       </div>
//       <div>
//       <div className="flex flex-row flex-wrap py-5 px-10 items-center">
//           {goalsData.slice(0).map((goal, index) => (
//             <div key={index } className="flex flex-row items-center w-1/3 px-3 py-5" >
//               <img src={goal.imageSrc} alt={`Goal ${index + 1}`} className=" w-10 h-10" />
//               <p className="px-5 text-lg font-light  text-black leading-tight">{goal.text}</p>
//             </div>
//           ))}
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default OurGoals;
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const OurGoals = () => {
  const imageStyle2 = {
    borderRadius: "1%", // border radius of the image
    border: "1px solid #fff", // change the #fff to #000 to see the border
  };
  const goalsData = [
    {
      imageSrc: 'coo.png',
      text: 'Create climate resilient and zero-carbon world',
    },
    {
            imageSrc: 'planet-earth.png',
           text: 'Rebuild food systems to nourish people and nature',
         },
         {
           imageSrc: 'save-the-planet.png',
           text: 'Conserve the world\'s most important forests',
        },
         {
          imageSrc: 'sustainability.png',
           text: 'Protect freshwater resources and landscapes',
         },
         {
           imageSrc: 'tree.png',
          text: 'Achieve healthy oceans and nature positive seascapes',
          },
          {
           imageSrc: 'environmentalism.png',
           text: 'Conserve wildlife and wild places',
       },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="our-goals flex flex-col md:py-10 md:px-5 md:px-12 py-4 px-2 bg-slate-50" ref={ref}>
      <div className="flex flex-col justify-center items-center">
        <motion.h1
          className="text-black text-3xl font-bold text-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          Our Goals
        </motion.h1>
        <motion.div className="h-1 bg-green-500 w-20 rounded-full"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5, delay: 0.2 }}></motion.div>
      </div>
      <div>
        <motion.div
          className="flex flex-col md:flex-row flex-wrap md:py-5 md:px-5 md:px-10 py-3 px-2 md:items-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {goalsData.slice(0).map((goal, index) => (
            <div key={index} className="flex flex-row items-center md:w-1/3 w-full md:px-3 md:py-5 px-4 py-3">
              <Image
               src={goal.imageSrc}
               width={50}
               height={50}
               alt={`Goal ${index + 1}`}
               style={imageStyle2}
        />
              <p className="px-5 text-lg font-light text-black leading-tight">{goal.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurGoals;
