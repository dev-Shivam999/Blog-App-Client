import  { memo } from 'react';
import { Link } from 'react-router-dom';
import Nav from './nav';
const MidNav = memo(({val}:{val:boolean}) => {
   
    
    return (
        val != null ? 
        <div className='flex gap-2 items-center'>
            <Link to={'/create'} className='bg-zinc-800 text-white px-3 pb-1 flex justify-center items-center py-0 rounded-full'>
                +
            </Link>
                <Link to={'/Profile'} className='w-[10vw] sm:w-[5vw] sm:h-[5vw] h-[10vw] rounded-full overflow-hidden bg-slate-700 text-white  '>
                   Profile
                 </Link>
        </div> : window.innerWidth > 500 ? <div className='flex gap-3 items-center'>
            {
                val == null ?<>
                        <Link className='text-xl ho text-center relative rounded-md ' to={'/signup'}>
                            <div className=' w-full top-0 border-zinc-800 p-3 border-[5px]  '>Sign UP/Login</div>
                            <div className='w absolute top-0 w-full border-zinc-800 m-1  flex items-center   border-[5px] '>Sign UP/Login</div>
                        </Link>
                       
                    </> : <Link to={'/create'} className='bg-zinc-800 text-white px-3 pb-1 flex justify-center items-center py-0 rounded-full'>
                        +
                    </Link>
            }
        </div>:<Nav val={val}/>
)
});

export default MidNav;