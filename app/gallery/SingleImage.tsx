"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CloudinaryResource } from '../../utils/cloudinary'

const SingleImage = ({ product }: CloudinaryResource) => {
    return (
        <Image
            width={300}
            height={300}

            className="rounded-lg cursor-pointer"
            src={product.secure_url}
            alt='gallery image'
            loading="lazy"
        />

    )
}

export default SingleImage
