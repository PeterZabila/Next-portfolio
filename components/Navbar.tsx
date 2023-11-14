import Link from "next/link";
import Image from "next/image";
import Auth from '@/components/Auth';

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

interface Props {
    
}

const links = [
    {path: "/about",
title: "About"},
    {path: "/gallery",
    title: "Gallery"},
    {path: "/contacts",
    title: "Contacts"}
]

export const Navbar = (props: Props) => {

    return (
        <header className="w-full z-10">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
                <div className="flex flex-row space-between">
                    <Link href="/" className="flex justify-center items-center cursor-pointer mr-4">
                        <Image
                            src="/logo.svg"
                            width="100" height="45" alt="GalleryImage"
                            className="object-contain hover:scale-110 ease-linear duration-300"
                        />
                    </Link>
                    <div className="flex flex-row items-center text-gray-400">
                        {links.map((link, index) => <Link href={link.path} key={index} className="mr-2 hover:text-black ease-linear duration-300">{link.title}</Link>
                        )}
                    </div>
                </div>
                <div>
                    
                </div>
                <div className='flex flex-row items-center gap-4 mr-[20px]'>
                    <Link href="https://www.instagram.com/petro_zabila/">
                        <FaInstagram className='text-xl text-gray-900' />
                    </Link>
                    <Link href="https://www.facebook.com/petro.zabila/">
                        <FaFacebookF className='text-xl text-blue-700' />
                    </Link>
                    <Link href="https://www.pinterest.com/petrozabila/">
                        <FaPinterest className='text-xl text-red-700' />
                    </Link>
                    <Link href="https://www.linkedin.com/in/petro-zabila-685052257/">
                        <FaLinkedin className='text-xl text-violet-700' />
                    </Link>
                </div>   
                <Auth />
                
            </nav>
        </header>
    )
}

export default Navbar;