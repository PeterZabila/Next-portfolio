"use client"
import Image from "next/image";
import { CloudinaryResource } from '../../utils/cloudinary'

interface Props {
    public_id: string;
    secure_url: string;
    custom_id: string;
    key: string;
}

const SingleImage = ({product, key}: Props) => {
    return (
            <Image
            key={key}
            width={300}
            height={300}

            className="rounded-lg"
            src={product.secure_url}
            alt='gallery image'
            loading="lazy"
        /> 
    )
}

export default SingleImage
