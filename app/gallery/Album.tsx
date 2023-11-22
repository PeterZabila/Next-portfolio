"use client";
import React, { useState } from 'react';
import { CloudinaryResource } from '../../utils/cloudinary';
import SingleImage from './SingleImage';
import Image from 'next/image'

interface Props {
    resources: CloudinaryResource[];
}

const Album = ({resources}: Props) => {

    const [photo, setPhoto] = useState<string | null>(null)
    return (
    //     <div className='flex flex-col justify-center, items-center overflow-hidden scroll-m-2'>
    //         <div className='mb-4 relative max-h-[600px] max-w-[600px] min-h-[400px] min-w-[400px]'>
    //           <Image
    //         //   width={600}
    //         //   height={400}
    //             fill
    //             className="absolute h-auto max-w-full rounded-lg inline-block mx-auto"
    //             src={photo? photo : resources[1].secure_url}
    //             alt="main picture"
    //           />
    //         </div>
    //         <div className="flex flex-row mr-2 overflow-hidden">
    //             {Array.isArray(resources) && resources.map((product: CloudinaryResource) => {
    //                     return (
    //                         <SingleImage 
    //                             product={product}
    //                             key={product.public_id}
    //                             onClick={() => setPhoto(product.secure_url)}
    //                         />
    //                     )
    //             })}
    //         </div>
    // </div>

    <div className="w-[80%] mx-auto grid grid-cols-2 md:grid-cols-3 gap-2" >
        {Array.isArray(resources) && resources.map((product: CloudinaryResource) => {
                        return (
                            <div key={product.custom_id} className="relative rounded-lg">
                                <SingleImage product={product}/>
                            </div>
                        )
        })}
    </div>
    )
}

export default Album
