import Image from "next/image";

interface treeProps {
    id: String;
    name: String;
    commonName: String;
    datePlanted: String;
    donor: String;
    landOwner: String;
    location: String;
    landType: String;
    image: String;
}
// interface CardProps {
//     title: string;
//     description: string;
//     buttonText: string;
//     icon: string;
//   }

export default (tree) => {
    return (
        console.log(tree),
        //<div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col md:flex-row justify-center items-center py-12'>
                <div className='flex flex-col relative rounded-lg overflow-hidden w-2/3 md:w-1/4'>
                    <Image src={tree.image} width={1200} height={1200} alt='Tree' className='' />

                    <div className='absolute bottom-0 inset-x-0 px-4 pb-2 pt-8 bg-gradient-to-t from-black/90 to-black/0 flex justify-between items-end text-slate-300'>

                        <span className="font-light">#{tree.id}</span>
                        <span className="font-semibold">{tree.commonName}</span>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <p className='flex justify-center items-center md:justify-start font-bold text-2xl text-slate-800 md:pl-16 pt-3'>Tree details</p>
                    <div className='flex flex-row'>
                        <div className='flex flex-col pl-10 md:pl-16 pt-5 min-w-max'>
                            <p className='text-sm text-slate-600 py-2'>ID</p>
                            <p className='text-sm text-slate-600 py-2'>Species</p>
                            <p className='text-sm text-slate-600 py-2'>Common Name</p>
                            <p className='text-sm text-slate-600 py-2'>Date Planted</p>
                            <p className='text-sm text-slate-600 py-2'>Donor</p>
                            <p className='text-sm text-slate-600 py-2'>Land Owner</p>
                            <p className='text-sm text-slate-600 py-2'>Location</p>
                            <p className='text-sm text-slate-600 py-2'>Land Type</p>
                        </div>


                        <div className='flex flex-col  pt-5'>
                            <p className='font-bold text-sm text-slate-800 pl-16 py-2'>{tree.id}</p>
                            <p className='font-bold text-sm text-slate-800 pl-16 py-2 italic'>{tree.name}</p>
                            <p className='font-bold text-sm text-slate-800 pl-16 py-2'>{tree.commonName}</p>
                            <p className='font-bold text-sm text-slate-800 pl-16 py-2'>{tree.datePlanted}</p>
                            <p className='font-bold text-sm text-slate-800 pl-16 py-2'>{tree.donor}</p>
                            <p className='font-bold text-sm text-slate-800 pl-16 py-2'>{tree.landOwner}</p>
                            <p className='font-bold text-sm text-slate-800 pl-16 py-2'>{tree.location}</p>
                            <p className='font-bold text-sm text-slate-800 pl-16 py-2'>{tree.landType}</p>
                        </div>

                    </div>

                </div>
            </div>

        //</div>
    );
}