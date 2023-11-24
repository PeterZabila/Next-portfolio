
import { CloudinaryResource } from '../../utils/cloudinary';
import SingleImage from './SingleImage';
import Image from 'next/image';
import { getAllImages } from '../../utils/cloudinary';


interface Props {
    resources: CloudinaryResource[];
}

const Album = ({}: Props) => {

    const resources = getAllImages("w3");
    console.log(Object.entries(resources)[0]); 

    return (

    <div className="w-[80%] mx-auto grid grid-cols-2 md:grid-cols-3 gap-2" >
        {Array.isArray(resources) && resources.map((product: CloudinaryResource) => {
                        return (
                            <div key={product.custom_id} className="overflow-hidden relative rounded-lg ">
                                <SingleImage product={product}/>
                            </div>
                        )
        })}
    </div>
    )
}

export default Album
