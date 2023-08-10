import Image from "next/image";
import Link from "next/link";

const imageStyle = {
  borderRadius: '50%',
  border: '1px solid #fff',
}

const OurTeam = () => {
  const TeamInfo = [
    {
      imageSrc: "https://i.guim.co.uk/img/media/7b482387e8703a4abb253b8007b1eadcbe2ba822/1648_678_2104_1262/master/2104.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=edce965d6ff3ae12506e32af212bec24",
      text: "CEO",
    },
    {
      imageSrc: "https://i.guim.co.uk/img/media/7b482387e8703a4abb253b8007b1eadcbe2ba822/1648_678_2104_1262/master/2104.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=edce965d6ff3ae12506e32af212bec24",
      text: "Chairman",
    },
    {
      imageSrc: "https://i.guim.co.uk/img/media/7b482387e8703a4abb253b8007b1eadcbe2ba822/1648_678_2104_1262/master/2104.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=edce965d6ff3ae12506e32af212bec24",
      text: "Accountant",
    },
    {
      imageSrc: "https://i.guim.co.uk/img/media/7b482387e8703a4abb253b8007b1eadcbe2ba822/1648_678_2104_1262/master/2104.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=edce965d6ff3ae12506e32af212bec24",
      text: "Manager",
    },
    {
      imageSrc: "https://i.guim.co.uk/img/media/7b482387e8703a4abb253b8007b1eadcbe2ba822/1648_678_2104_1262/master/2104.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=edce965d6ff3ae12506e32af212bec24",
      text: "Engineer",
    },
    {
      imageSrc: "https://i.guim.co.uk/img/media/7b482387e8703a4abb253b8007b1eadcbe2ba822/1648_678_2104_1262/master/2104.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=edce965d6ff3ae12506e32af212bec24",
      text: "Builder",
    },
   
      
    // Can add more person as needed
  ];

  return (
    <div className="our-goals flex flex-col py-4 px-12  bg-slate-50">
      <div className="  flex flex-col justify-center items-center">
      <h1 className="text-black text-3xl font-bold text-center">Our Team</h1>
        <div className="h-1 bg-green-500 w-24 rounded-full"></div>
       </div> 
      <div>
        <div className="flex flex-row pt-10 pb-6 items-center">
          {TeamInfo.slice(0).map((person, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-1/6 pt-3"
            >
              <Image
                width={150}
                height={150}
                src={person.imageSrc}
                alt={`Person ${index + 1}`}
                style={imageStyle}   
              />
              <p className=" text-black font-sans pt-3 leading-tight">
                {person.text}
              </p>
            </div>
          ))}
        </div>
      </div>
     
        <Link
        href="/Team"
        className="flex flex-row mb-2 justify-center">
            <span className="text-md text-black duration-300 border-b-2 border-green-500 hover:text-green-500 hover:border-green-600">
                See more
            </span>
         
       </Link> 
    </div>
  );
};

export default OurTeam;
