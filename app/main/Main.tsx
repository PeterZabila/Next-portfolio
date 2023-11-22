"use client"
import React, { useState } from 'react';
import { motion } from "framer-motion";
import ImageCard from './ImageCard';
import pic10 from '../../public/images/wedding1/10.jpg'
import pic11 from '../../public/images/wedding1/13.jpg'
import pic12 from '../../public/images/wedding1/15.jpeg'

const cards = [
    {
      id: 1,
      name: "Wedding",
      src: pic10,
      description: "Найщасливіщий день у вашому житті обов'язково має бути на фото. Дозвольте супроводжувати вас у цей день",
  
    },
    {
      id: 2,
      name: "Portrait",
      src: pic12,
      description: "Портрет - це відзеркаделення внутрішнього світу моделі",
  
    },
    {
      id: 3,
      name: "Family",
      src: pic11,
      description: "Сімейні фотосети - то OneLove",
  
    }
  ];

const Main = () => {
  let item;
  if (typeof window !== 'undefined') {
    // Perform localStorage action
     item = localStorage.getItem('key')
  }
    const [mark, setMark] = useState<string>(item ? item : "");

    const handleOpen = (mark: React.SetStateAction<string>) => {
        setMark(mark)
    }


return (
    <section className="flex flex-col w-[80%] mx-auto">
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='w-full mt-4 text-slate-400 text-center font-cormorant text-[24px] max-w-3xl leading-[30px] mx-[auto]'
      >
       Як визначити, що фотографія чи то музика, чи література - це твоє? Все просто: ти не можеш не фотографувати, не можеш не створювати музику, не можеш не писати...
      </motion.p>

      <div className='grid lg:grid-cols-3 gap-4 mt-20 md:grid-cols-2'>
        {cards.map((card, index) => (
          <ImageCard key={card.name} {...card} handleOpen={handleOpen} />
        ))}
      </div>
    </section>
)
}

export default Main
