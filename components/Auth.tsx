"use client";
import { auth, googleProvider } from "@/app/config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { motion } from 'framer-motion';
import {BsFillPersonCheckFill, BsFillPersonFill} from 'react-icons/bs'

const childVariant = {
    hidden: {
        opacity: 0, scale: 0.8
    },
    visible: {
        opacity: 1, scale: 1
    }
}

type Props = {};

export const Auth = (props: Props) => {
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");
const [isActive, setIsActive] = useState(false);
const [isClicked, setIsClicked] = useState(false);
  
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setIsActive(true);
    } catch (e){ 
      console.error(e);
    }
  }

  const handleSubmit = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setIsActive(true);
    } catch (e){ 
      console.error(e);
    }
  }

  const logout = async () => {
    try {
      await signOut(auth);
      setIsActive(true);
    } catch (e){ 
      console.error(e);
    }
  }

  return (
    <div>

      <div onClick={() => setIsClicked(!isClicked)}>
        {isActive? <BsFillPersonCheckFill /> : <BsFillPersonFill />}
      </div>

      {isClicked && (<>
        {!isActive ? (
              <motion.div variants={childVariant} className="">
                <form onSubmit={handleSubmit} className="flex flex-row">
                  <div className="md:mr-2">
                    <input 
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" 
                        name="email"
                        value={email}
                        placeholder="Enter your name"
                        className="border-2 text-black md:mr-2 w-[120px] h-[15px] p-2 border-gray-300 bg-white rounded-[5px] outline-none cursor-pointer text-xs"
                      />
                      <input 
                        onChange={(e) => setPassword(e.target.value)}
                        type="password" 
                        name="password" 
                        value={password}
                        placeholder="Enter your email"
                        className="border-2 text-black w-[120px] h-[15px] p-2 border-gray-300 bg-white rounded-[5px] outline-none cursor-pointer text-xs"
                      />
                  </div>
                  <div>
                    <CustomButton 
                              title="Sign In"
                              btnType="button"
                              containerStyles="text-primary-blue rounded-[5px] bg-white min-w-[130px] border-2 border-gray-300"
                    />
                  </div>
                </form>
                <CustomButton 
                              onClick={signInWithGoogle}
                              title="Google Sign In"
                              btnType="button"
                              containerStyles="text-primary-blue rounded-[5px] bg-white min-w-[130px] border-2 border-gray-300"
                />
              </motion.div>
            ) : (<CustomButton btnType="button" title="Log out" onClick={logout}/>)
        }
      </>
      )}
      
    </div>
  )
}

export default Auth;