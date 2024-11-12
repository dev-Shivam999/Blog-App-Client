import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './nav';
import Nav2 from './Nav2';
import Img from './Img';
import { FaEquals, FaX } from 'react-icons/fa6';
import { AiOutlineMessage } from 'react-icons/ai';
const MidNav = memo(({ val, val2 }: { val: string, val2: boolean }) => {
    


    const [show, setShow] = useState<boolean>(true)
    return (
        <>
            <div className={`flex flex-wrap justify-between text-xl items-center`}>
                <Nav2 />
                {val2 && window.innerWidth > 550 ?
                    <div className='flex gap-2 items-center'>
                        <Link to={'/create'} className=' bg-white w-[10vw] sm:w-[5vw] sm:h-[5vw] h-[10vw] text-black px-3 pb-1 flex justify-center items-center py-0 rounded-full'>
                            +
                        </Link>
                        <Link to={'/Message'}>
                            <AiOutlineMessage className='w-[10vw] sm:w-[5vw] sm:h-[5vw] h-[10vw]' />
                        </Link>
                        <Link to={'/Profile'} className='w-[10vw] sm:w-[5vw] sm:h-[5vw] h-[10vw] rounded-full overflow-hidden text-center flex justify-center items-center bg-slate-700 text-white  '>
                            <Img className='w-screen  rounded-lg sm:w-[22.5vw] sm:h-[25vw]  md:w-[10vw] md:h-[10vw]' val={val} />

                        </Link>
                    </div> :
                    val2 && window.innerWidth < 550 ?
                        <div>

                            {show ?
                                <FaEquals onClick={() => setShow(false)} />
                                :
                                <FaX onClick={() => setShow(true)} />

                            }

                        </div>
                        : !val2 && <div className='flex gap-3 items-center'>
                            {
                                <>
                                    <Link className='text-xl ho text-center relative rounded-md ' to={'/signup'}>
                                        <div className=' w-full top-0 border-zinc-800 p-3 border-[5px]  '>Sign UP/Login</div>
                                        <div className='w absolute top-0 w-full border-zinc-800 m-1  flex items-center   border-[5px] '>Sign UP/Login</div>
                                    </Link>

                                </>
                            }
                        </div>}
            </div>
            <Nav show={show} val2={val} val={val2} />
        </>
    )
});

export default MidNav;