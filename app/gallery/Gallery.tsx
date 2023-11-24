"use client";
import React, {useRef, useEffect, useState, useMemo} from 'react';
import Image from 'next/image';
import Experimental from "./Experimental"
import { getCookie, setCookie } from 'typescript-cookie'
// import Link from 'next/link';
// import { getCldImageUrl } from 'next-cloudinary';
// import { Metadata } from 'next';
// import { v2 as cloudinary } from 'cloudinary';
// import { CloudinaryResource } from '@/types/cloudinary';

import img from '../../public/images/wedding1/01.jpg'
import img1 from '../../public/images/wedding1/02.jpg'
import img2 from '../../public/images/wedding1/03.jpg'
import img3 from '../../public/images/wedding1/04.jpg'
import img4 from '../../public/images/wedding1/05.jpg'
import img5 from '../../public/images/wedding1/06.jpg'
import mod1 from '../../public/images/portrait/mod1.jpg';
import mod2 from '../../public/images/portrait/mod2.jpg';
import mod3 from '../../public/images/portrait/mod3.jpg';
import mod4 from '../../public/images/portrait/mod4.jpg';
import fam from '../../public/images/family/zol.jpg';
import fam1 from '../../public/images/family/bud.jpeg';
import fam2 from '../../public/images/family/gul.jpeg';

const data = [
  {
    id: 1,
    image: img,
    caption: "S&A",
    tag: 'w1'
  },
  {
      id: 2,
      image: img1,
      caption: "L&A",
      tag: 'w2'
    },
    {
      id: 3,
      image: img2,
      caption: "O&Z",
      tag: 'w3'
    },
    {
      id: 4,
      image: img3,
      caption: "T&A",
      tag: 'w4'
    },
    {
      id: 5,
      image: img4,
      caption: "L&R",
      tag: 'w5'
    },
    {
      id: 6,
      image: img5,
      caption: "O&V",
      tag: 'w6'
    },
];
const portraitData = [
  {
    id: 1,
    image: mod1,
    caption: "Olena",
    tag: 'k'
  },
  {
    id: 2,
    image: mod2,
    caption: "Yana",
    tag: 'c'
  },
  {
    id: 3,
    image: mod3,
    caption: "Anastasia",
    tag: 'l'
  },
  {
    id: 4,
    image: mod4,
    caption: "Alyona",
    tag: 'a'
  },
]
const familyData = [
  {
    id: 1,
    image: fam,
    caption: "Zolotonosha",
    tag: 'zol'
  },
  {
    id: 2,
    image: fam1,
    caption: "Oblast",
    tag: 'bud'
  },
  {
    id: 3,
    image: fam2,
    caption: "Cherkasy",
    tag: 'gul'
  },
]
interface Props {
}

// export const metedata: Metadata = {
//   openGraph: {
//     images: [
//       getCldImageUrl({
//         src: "my-store_t4rgo2"
//       })
//     ]
//   }
// }
type TFunc = () => void

const Gallery = (props: Props) => {
  const [tag, setTag] = useState<string | null>("w1");
  const containerRef = useRef<null | HTMLDivElement>(null);
  
  let cat: string | null;

  if (typeof window !== 'undefined') {
    // Perform localStorage action
     cat = localStorage.getItem("category");
  }

  // const [category, setCategory] = useState<string | null>()
const category = "Wedding"
const handleSetTag = (tag: string) => {
    setTag(tag);
    localStorage.setItem("tag", tag);
    setCookie('tag', tag);
}

  const executeScroll = () => {
      if (containerRef.current !== null) {
        containerRef.current.scrollIntoView();
      }
  }

if (category) {
  if (category === "Wedding") {
    return (
      <section className='flex flex-col w-[80%] mx-auto mt-[20px]'>
        {/* <Experimental/> */}
        <ul className='grid grid-cols-3 gap-2 px-[20px]'>
          {data.map(item => (
            <li key={item.id} className="relative rounded-[5px]" onClick={() => {
              handleSetTag(item.tag);
              console.log(tag)
              }}>
                <Image
                    src={item.image}
                    alt={item.tag}
                    loading="lazy"
                    onClick={() => { 
                      handleSetTag(item.tag);
                      executeScroll();
                    }}
                    style={{borderRadius: 15}}
                />
                <p style={{
                    position: "absolute", 
                    top: "50%", 
                    left: "50%", 
                    transform: "translate(-50%, -50%)",
                    opacity: "0.3",
                    fontSize: "50px"
                    }}>{item.caption}</p>
            </li>
          ))}
        </ul>
        <div ref={containerRef} className='w-full mt-[20px]'></div>
      </section>
    ) }
  if (category === "Portrait") {
      return (
        <section className='flex flex-col w-[80%] mx-auto mt-[20px]'>
  
        <ul className='grid grid-cols-3 gap-2 px-[20px]'>
                  {portraitData && portraitData.map(item => (
                      <li key={item.caption} style={{position: "relative", borderRadius: "5px"}} onClick={() => setTag(item.tag)}>
                          <Image
                              src={item.image}
                              alt={item.tag}
                              loading="lazy"
                              onClick={() => { 
                                handleSetTag(item.tag);
                                executeScroll();
                              }}
                              style={{borderRadius: 15}}
                          />
                          <p style={{
                              position: "absolute", 
                              top: "50%", 
                              left: "50%", 
                              transform: "translate(-50%, -50%)",
                              opacity: "0.3",
                              fontSize: "50px"
                              }}>{item.caption}</p>
                      </li>
                  ))}
          </ul>
          <div ref={containerRef} className='w-full mt-[20px]'></div>
  
        </section>
      )
    } 
  if (category === "Family") {
      return (
        <section className='flex flex-col w-[80%] mx-auto mt-[20px]'>
          <ul className='grid grid-cols-3 gap-2 px-[20px]'>
          {familyData && familyData.map(item => (
              <p key={item.caption} style={{position: "relative"}} onClick={() => setTag(item.tag)}>
                  <Image
                      src={item.image}
                      alt={item.tag}
                      loading="lazy"
                      onClick={() => { 
                        handleSetTag(item.tag);
                        executeScroll();
                      }}
                      style={{borderRadius: 15}}
                  />
                  <p style={{
                      position: "absolute", 
                      top: "50%", 
                      left: "50%", 
                      transform: "translate(-50%, -50%)",
                      opacity: "0.3",
                      fontSize: "50px"
                      }}>{item.caption}</p>
              </p>
            ))}
          </ul>
          <div ref={containerRef} className='w-full mt-[20px]'></div>
  
      </section>  
      )
    } 
} else {
  return (
    <h1>Loading... Please wait</h1>
  )
}

      
    
}

export default Gallery;
function cookies() {
  throw new Error('Function not implemented.');
}

