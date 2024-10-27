import  { useState } from 'react';
import { FaEquals, FaX } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Nav2 from './Nav2';

const NowNav = () => {

    const [show, setShow] = useState<boolean>(true)
    return (
        <>
            <div className="flex  items-center justify-between">    <Nav2 />
                <div>

                    {
                        window.innerWidth > 550 ? <Link to={'/Blogs'}><h1 className='text-[3vw] sm:text-[2vw]  font-semibold text-end' >BLOGS</h1></Link>
                            :
                            show ?
                                <FaEquals onClick={() => setShow(false)} />
                                :
                                <FaX onClick={() => setShow(true)} />

                    }

                </div>
            </div>
            
                {
                    !show &&
                    <ul className=''>

                        <li>
                            <Link to={'/Blogs'}><h1 className='text-[4vw] sm:text-[2vw]  font-semibold text-end' >BLOGS</h1></Link>

                        </li>



                    </ul>

                }
            
        </>
    );
};

export default NowNav;