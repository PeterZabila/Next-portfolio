
import Image from 'next/image';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
// import { v2 as cloudinary } from 'cloudinary';
// const cloudinary = require('cloudinary').v2;
import { getAllImages } from '../../utils/cloudinary'

interface CloudinaryResource {
  public_id: string;
  secure_url: string;
  custom_id: string;
}

const sss = getAllImages('w2')

type Props = {}

const Experimental = (props: Props) => {
  const resources = getAllImages("w2");
  return (
    // <></>

      <>{sss}</>
      //  <ul className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      //   {Array.isArray(resources) && resources.map((product: CloudinaryResource) => {
      //     return (
      //       <li key={product.custom_id} className="rounded overflow-hidden bg-white dark:bg-slate-700">
      
      //           <CldImage
      //             width={800}
      //             height={800}
      //             crop="fill"
      //             src={product.public_id}
      //             alt='gallery image'
      //           />
      //       </li>
      //     )
      //   })}
      // </ul> 

  )
}

export default Experimental;