import React, { memo } from 'react';

export const LableInput = memo(({ lable ,value, onchange, type }: {
    lable: string,value:string, onchange: (e: React.ChangeEvent<HTMLInputElement>) => void, type: "text" | "password" | "email"
}) => {
    return <div className='mx-auto my-3 w-[80%] sm:w-[50%]'>
        <label htmlFor="" className='m-1 text-xl  '>{lable}</label>
        <br />
        <input type={type} value={value} className='border-2  w-full  rounded-md p-3 bg-transparent ' placeholder={"Enter the " + lable} onChange={onchange} />
    </div>
}
)

export default LableInput;