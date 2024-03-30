import React from "react";
import Image from "next/image";

const OurGoals = () => {
  const imageStyle2 = {
    borderRadius: "1%", // border radius of the image
    border: "1px solid #fff", // change the #fff to #000 to see the border
  };
  const goalsData = [
    {
      imageSrc: "coo.png",
      text: "Create climate resilient and zero-carbon world",
    },
    {
      imageSrc: "planet-earth.png",
      text: "Rebuild food systems to nourish people and nature",
    },
    {
      imageSrc: "save-the-planet.png",
      text: "Conserve the world's most important forests",
    },
    {
      imageSrc: "sustainability.png",
      text: "Protect freshwater resources and landscapes",
    },
    {
      imageSrc: "tree.png",
      text: "Achieve healthy oceans and nature positive seascapes",
    },
    {
      imageSrc: "environmentalism.png",
      text: "Conserve wildlife and wild places",
    },
  ];

  return (
    <div className="flex flex-col section-spacing pb-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="head-text text-center">Our <b>Goals</b></h1>
        <div className="h-1 bg-green-500 w-16 rounded-full"></div>
      </div>
      <div className="md:pt-10 pt-5">
        <div className="flex flex-col md:flex-row flex-wrap md:items-center px-5">
          {goalsData.map((goal, index) => (
            <div
              key={index}
              className="flex flex-row items-center md:w-1/3 w-full md:py-5 py-2"
            >
              <Image
                src={goal.imageSrc}
                width={50}
                height={50}
                alt={`Goal ${index + 1}`}
                style={imageStyle2}
              />
              <p className="px-5 paragraph-text">{goal.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurGoals;
