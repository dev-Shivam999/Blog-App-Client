import  { useState } from 'react';

const BloggerInfo = () => {
    const p = "            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet harum adipisci reiciendis. Autem, ipsa odio minus porro consequatur, est ut inventore tempora illum hic quae, temporibus nobis enim deleniti quasi"

    const[data,setData]=useState<number>(100)
    
    return (
        <div  className='w-full font-mono md:text-[1.2vw] font-bold my-3'>
            {
                window.innerWidth > 400 ? p : <div onClick={() => setData(q => q == 100 ? p.length:100)}>
                    {p.slice(0, data)}{
                        p.length > 100&&data<=100 && "..."
                    }
                </div>

            }
 </div>
    );
};

export default BloggerInfo;