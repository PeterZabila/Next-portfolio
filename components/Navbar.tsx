import Link from "next/link";
import Image from "next/image";
import Auth from '@/components/Auth'

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
                    
                <Auth />
                
            </nav>
        </header>
    )
}

export default Navbar;