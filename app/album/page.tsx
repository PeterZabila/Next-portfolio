const cloudinary = require('cloudinary').v2;
import { cookies } from 'next/headers'
import SingleImage from '../gallery/SingleImage';

interface CloudinaryResource {
    public_id: string;
    secure_url: string;
    custom_id: string;
}

cloudinary.config({
    cloud_name: "dq9kynjaj",
    api_key: "761291185195644",
    api_secret: "6AY4PwwHnL0bSy5T0ZlL5_2dnqg",
});

const page = async () => {
   
const qwe = cookies();
const tag = qwe.get("tag");

    // if (typeof window !== 'undefined') {
    //      tag = document.cookie("tag")
    //   }
    const {resources} = await cloudinary.search.expression(`tags=${tag.value}`).execute();


  if (resources.length) {
    return (
        <div className="w-[80%] mx-auto grid grid-cols-2 md:grid-cols-3 gap-2" >
                    {Array.isArray(resources) && resources.map((product: CloudinaryResource) => {
                        return (
                            <div key={product.custom_id} className="overflow-hidden relative rounded-lg ">
                                <SingleImage product={product} />
                            </div>
                        )
                    })}
                </div>
    )
  } else {
    return (<h1>Loading... Please wait</h1>)
  }

}

export default page
