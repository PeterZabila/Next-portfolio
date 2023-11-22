const cloudinary = require('cloudinary').v2;
import { getCldImageUrl } from 'next-cloudinary';
import { Metadata } from 'next';
import Image from 'next/image';
import SingleImage from '@/app/gallery/SingleImage';
import Album from '@/app/gallery/Album';

export interface CloudinaryResource {
  public_id: string;
  secure_url: string;
  custom_id: string;
}

export const metedata: Metadata = {
    openGraph: {
      images: [
        getCldImageUrl({
          src: "gallery"
        })
      ]
    }
  }

cloudinary.config({
    cloud_name: "dq9kynjaj",
    api_key: "761291185195644",
    api_secret: "6AY4PwwHnL0bSy5T0ZlL5_2dnqg",
});

type TagProps = {
    tag: string;
}


export const getAllImages = async (tag: string) => {
    const {resources} = await cloudinary.search.expression(`tags=${tag}`, "&limit=10").execute();
    // console.log(resources)
    return (
    // <div >
    //   <ul className="w-[80%] mx-auto grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    //     {Array.isArray(resources) && resources.map((product: CloudinaryResource) => {
    //       return (
    //         <li key={product.custom_id} className="rounded overflow-hidden bg-white dark:bg-slate-700">
      
    //             <Image
    //               width={200}
    //               height={200}
    //               src={product.secure_url}
    //               alt='gallery image'
    //               className='h-auto w-auto'
    //               loading="lazy"
    //             />
    //         </li>
    //       )
    //     })}
    //   </ul>
    // </div>

    <div className="w-[80%] mx-auto p-10">
      <Album resources={resources}/>
  </div>
    
    );
 }

