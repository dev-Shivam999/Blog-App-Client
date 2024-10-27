
import { Link } from 'react-router-dom';
import Img from './Img';

const Nav2 = () => {
    return (
        <>
            <Link to={'/'} className=' '>
            <h1 className=' flex  items-center  gap-5 text-[6vw] mb-3 sm:mb-0  sm:text-[4vw]'>
                <Img className='rounded-full w-[17vw] sm:w-[5vw]' val='/FIRST.png'/>
                CRO.BLOGS</h1>
                </Link>

            </>
    );
};

export default Nav2;