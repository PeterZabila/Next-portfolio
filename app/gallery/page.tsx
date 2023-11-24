
import Album from './Album';
import Experimental from './Experimental';
import Gallery from './Gallery';
import { getAllImages } from '@/utils/cloudinary';
import { CloudinaryResource } from '../../utils/cloudinary';
import { getCookie, setCookie } from 'typescript-cookie'

// const tag = getCookie("tag");

const data = getAllImages("w3");

type TRes = {
    data: CloudinaryResource[]
}
const page = () => {

    return (
        <>
        {/* <Experimental/> */}
        <Gallery/>
        <Album />
        </>
    )
}

export default page;
