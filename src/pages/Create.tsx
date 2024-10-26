
import { memo, useState } from 'react';
import From from '../components/from';
import Nav2 from '../components/Nav2';
import { FaEquals, FaX } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Create = memo(() => {
    const [show2, setShow] = useState<boolean>(true)

   
    
    return (

        <div className='min-h-screen ' style={{ backgroundImage: `url(/three.avif)`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", opacity: "0.8", backgroundBlendMode: "color-burn" }}>
            <div className='flex justify-between items-center'>
                <Nav2 />
                <div className='justify-end'>

                    {
                        window.innerWidth > 550 ? <Link to={'/Blogs'}><h1 className='text-[4vw] sm:text-[2vw]  font-semibold text-end' >BLOGS</h1></Link>
                            :
                            show2 ?
                                <FaEquals className='text-[8vw]  sm:text-[4vw]' onClick={() => setShow(false)} />
                                :
                                <FaX className='text-[8vw]  sm:text-[4vw]' onClick={() => setShow(true)} />

                    }

                </div>
            </div>
            <  >
                {
                    !show2 &&
                    <ul className=''>

                        <li>
                            <Link to={'/Blogs'}><h1 className='text-[4vw] sm:text-[2vw]  my-3 font-semibold text-end' >BLOGS</h1></Link>

                        </li>



                    </ul>

                }
            </>
            <div className='flex justify-center '>
                <From />
            </div>
        </div>
    );
});

export default Create;