
import { Link } from 'react-router-dom';

const Nav2 = () => {
    return (
        <>
            <Link to={'/'}><h1 className='text-[2vw]'>CRO.BLOGS</h1></Link>
            <Link to={'/Blogs'}><h1 className='text-[2vw] text-end' >BLOGS</h1></Link>   
        </>
    );
};

export default Nav2;