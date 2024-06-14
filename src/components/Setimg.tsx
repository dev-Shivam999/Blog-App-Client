import React, { memo, useRef } from 'react';
import { FaCamera } from 'react-icons/fa6';

const Setimg = memo(({ fo, im }: { fo: string, im: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
    const img = useRef<HTMLInputElement | null>(null)

    return (
        <div className='flex gap-3  w-[80%] sm:w-[50%] mx-auto items-center '>
            <div className='sm:w-[10vw] w-[20vw] h-[20vw] sm:h-[10vw] bg-gray-300 rounded-full relative'>
                <img src={fo || ""} className='w-full h-full rounded-full object-cover object-top absolute top-0 left-0' alt="" />
                <div className=' absolute h-full w-full  rounded-full flex justify-center items-center' style={{ backgroundColor: "  rgb(244 240 242 / 64%)" }}>
                    <FaCamera onClick={() => img.current?.click()} />
                    <input type="file" name="file" ref={img} className='hidden' onChange={im} />
                </div>
            </div>
           
        </div>
    );
});

export default Setimg;