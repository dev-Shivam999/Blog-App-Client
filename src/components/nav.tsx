import  { memo } from 'react';
import { Link } from 'react-router-dom';
import Img from './Img';

const Nav = memo(({ val,show,val2 }:{val:boolean,show:true|false,val2:string}) => {

    
  
    return (
        <  >
            {
                !show && 
                    <ul className='flex my-5 font-semibold items-center justify-between px-1 w-full'>
                        <li>
                            <Link to={'/create'} className='bg-zinc-800 w-max text-white px-3 pb-1 flex justify-center items-center py-0 rounded-full'>
                                +
                            </Link>
                        </li>
                        <li>
                            <Link to={'/Blogs'}><h1 className='text-[4vw] sm:text-[2vw] text-end' >BLOGS</h1></Link>

                        </li>
                        <li>
                            {
                                <Link to={'/Profile'} className='w-[10vw] sm:w-[5vw] sm:h-[5vw] h-[10vw] rounded-full overflow-hidden text-center flex justify-center items-center bg-slate-700 text-white  '>
                                    <Img className='w-screen  rounded-lg sm:w-[22.5vw] sm:h-[25vw]  md:w-[10vw] md:h-[10vw]' val={val2} />

                                </Link>
                            }
                        </li>
                   
                            {
                                val == null && <Link className='text-xl ho text-center ' to={'/signup'}>

                                    <div className='border-zinc-800   flex items-center   '>Sign UP/Login</div>
                                </Link>
                            }
                        
                    </ul>
                
            }
        </>
    );
});

export default Nav;