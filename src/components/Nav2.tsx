
import { Link } from 'react-router-dom';
import Img from './Img';

const Nav2 = () => {
    return (
        <>
            <Link to={'/'} className=' '><h1 className=' flex  items-center  gap-5 text-[4vw] sm:text-[2vw]'>
                <Img className='rounded-full w-20' val='/FIRST.png'/>
                CRO.BLOGS</h1></Link>
            <Link to={'/Blogs'}><h1 className='text-[4vw] sm:text-[2vw] text-end' >BLOGS</h1></Link>   
        </>
    );
};

export default Nav2;