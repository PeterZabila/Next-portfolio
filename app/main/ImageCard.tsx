
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';

type TserviceCard = {
    id: number;
    name: string;
    src: any;
    description: string;
    handleOpen: (name: string) => void;
}

const ImageCard = ({ id, name, src, description, handleOpen }: TserviceCard) => {

   const handleCategory = (name: string) => {
        handleOpen(name);
        localStorage.setItem("mark", name);
   }

    return (
        <motion.div className='relative flex flex-col w-full bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-[1px] rounded-[20px] shadow-xl '
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 + id/2 }}
        >
           <div>
            <Image
                    src={src}
                    alt='web-development'
                    className='w-full h-[250px] object-cover rounded-t-[20px] opacity-80'
                />
           </div>
        <div className='p-2 flex flex-col'>
            <h3 
                className='text-slate-400 text-[20px] font-bold text-center'
            >
                
                    {name}
            </h3>
                <motion.p
                    className='font-cormorant text-center text-slate-600 overflow-hidden p-[10px] pb-[30px]'
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    {description}
                </motion.p>
                <div className='absolute bottom-2 left-[50%] translate-x-[-50%] justify-center items-center'>
                    <Link href="/gallery" >
                        <button 
                            onClick={() => handleCategory(name)}
                            className='text-slate-400'
                        >
                            View
                        </button>
                    </Link>
                </div>
                
        </div>
        </motion.div>
    )
}

export default ImageCard;