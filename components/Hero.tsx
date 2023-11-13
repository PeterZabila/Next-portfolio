import React from 'react';
import Link from 'next/link';

interface Props {
    
}

const Hero = (props: Props) => {
    return (
        <div className='w-full h-full relative flex items-center justify-center'>
            <video autoPlay muted plays-playsinline="true" src="/vid21.mp4" className=' inline-block w-full top-0 z-[-1] aspect-video'/>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='stroking absolute top-[40%] left-[50%] translate-x-[-50%]' >Welcome</h1>
                {/* <h1 className='absolute top-[50%] left-[50%] translate-x-[-50%] text-gray-600 text-6xl text-center font-semibold hover:stroke-white hover:text-transparent stroke-[4px]' >Welcome</h1> */}
                <Link href="/gallery" className='absolute top-[55%] left-[50%] translate-x-[-60%] text-white hover:text-gray-300 text-xs text-center inline-block rounded-[20px] border-2 border-white hover:border-gray-300 py-[5px] px-[20px] mt-[20px] w-[100px]'>Explore</Link>
            </div>
        </div>
    )
}

export default Hero
