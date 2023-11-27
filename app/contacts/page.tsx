"use client";
import React, { useState, useRef, FormEvent, ChangeEvent } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { TbBrandTelegram } from "react-icons/tb";
import { TbPhoneCalling } from "react-icons/tb";


type TForm = {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [forma, setForma] = useState<TForm>({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;

    setForma({
      ...forma,
      [name]: value,
    });
  };

  const form = useRef(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement

    emailjs.sendForm('service_w5o1do5', 'template_ojzaewl', form.current, 'bWMquDmtZwdr5JsG7')
    alert("Thank you. I will get back to you as soon as possible.");
    if (e.target) {
      target.reset();
    }

  }

  return (
    <section className="w-[80%] mx-auto">
      <div className='container contact__container mt-[60px] mb-[20px]'>  
        <div className="flex flex-col gap-1">
        <h5 className='text-center mb-[20px] font-bold text-xl'>Get in touch</h5>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>petrozabila@gmail.com</h5>
            <a href="mailto:petrozabila@gmail.com" target="_blank" rel="noreferrer" className='cursor-pointer'>Send a message via email</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <a href="https://m.me/petro.zabila" target="_blank" rel="noreferrer" className='cursor-pointer'>Send a message via messenger</a>
          </article>
          <article className='contact__option'>
            <TbBrandTelegram className='contact__option-icon' />
            <h4>Telegram</h4>
            <a href="https://petrozabila.t.me" target="_blank" rel="noreferrer" className='cursor-pointer'>Write me on Telegram</a>
          </article>
          <article className='contact__option'>
            <TbPhoneCalling className="contact__option-icon" />
            <h4>Cell</h4>
            <a href="tel:+380631353552" className='pl-1 color-gray-500 cursor-pointer'>+38 (063) 135-35-52</a>
          </article>
        </div>

        
        <div className="flex flex-col gap-1">
        <h5 className='text-center mb-[20px] font-bold text-xl'>Write me</h5>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-1">
            <input
              type='text'
              name='name'
              value={forma.name}
              onChange={handleChange}
              placeholder="Your name?"
              className='bg-slate-300 py-2 px-2 inline-block placeholder:text-gray-500 rounded-lg outline-none border-none font-medium'
            />

            <input
              type='email'
              name='email'
              value={forma.email}
              onChange={handleChange}
              placeholder="Your email address?"
              className='bg-slate-300 py-2 px-2 inline-block placeholder:text-gray-500 rounded-lg outline-none border-none font-medium'
            />

            <textarea
              rows={7}
              name='message'
              value={forma.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-slate-300 py-2 px-2 placeholder:text-gray-500 rounded-lg outline-none border-none font-medium'
            />
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;