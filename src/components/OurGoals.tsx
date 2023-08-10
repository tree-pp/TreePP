import Image from "next/image";

const OurGoals = () => {
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
    // Add more goals data objects as needed
  ];

  return (
    <div className="our-goals flex flex-col py-4 px-12  bg-white">
      <div className="  flex flex-col justify-center items-center">
        <h1 className="text-black text-3xl font-bold text-center">Our Goals</h1>
        <div className="h-1 bg-green-500 w-20 rounded-full"></div>
      </div>
      <div>
      <div className="flex flex-row flex-wrap py-5 px-10 items-center">
          {goalsData.slice(0).map((goal, index) => (
            <div key={index } className="flex flex-row items-center w-1/3 px-3 py-5" >
              <img src={goal.imageSrc} alt={`Goal ${index + 1}`} className=" w-10 h-10" />
              <p className="px-5 text-lg font-light  text-black leading-tight">{goal.text}</p>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default OurGoals;
