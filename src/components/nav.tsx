import React, { memo, useState } from 'react';
import { FaEquals, FaX } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Nav = memo(({ val }:{val:boolean}) => {

    
    const [show, setShow] = useState<boolean>(true)
  
    return (
        <div  >{show ?
            <FaEquals onClick={() => setShow(false)} />
            :
            <div className={`${!show ? "flex justify-end" : ""}`}>
                <FaX onClick={() => setShow(true)} />
            </div>}
            {
                !show && <div className=' h-screen '>
                    <ul>
                        <li>
                            <Link to={'/create'} className='bg-zinc-800 text-white px-3 pb-1 flex justify-center items-center py-0 rounded-full'>
                                +
                            </Link>
                        </li>
                        <li>
                            {
                                val == null && <Link className='text-xl ho text-center ' to={'/signup'}>

                                    <div className='border-zinc-800   flex items-center   '>Sign UP/Login</div>
                                </Link>
                            }
                        </li>
                    </ul>
                </div>
            }
        </div>
    );
});

export default Nav;