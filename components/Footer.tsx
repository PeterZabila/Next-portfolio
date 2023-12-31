import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "../constants"

const Footer = () => (
    <footer className='w-full mx-auto text-black-100  mt-5 border-t border-gray-200'>
      <div className='max-w-[1440px] mx-auto flex max-md:flex-row flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
        <div className='flex flex-col justify-start items-start gap-6'>
          <Image src='/logo.svg' alt='logo' width={118} height={18} className='object-contain' />
          <p className='text-base text-gray-700'>
            Gallery 2023 <br />
            All Rights Reserved &copy;
          </p>
        </div>
  
        <div className="footer__links">
          {footerLinks.map((item) => (
            <div key={item.title} className="footer__link">
              <h3 className="font-bold mb-4">{item.title}</h3>
              <div className="flex flex-col gap-5">
                {item.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.url}
                    className="text-gray-500"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
  
    </footer>
  );
  
  export default Footer;