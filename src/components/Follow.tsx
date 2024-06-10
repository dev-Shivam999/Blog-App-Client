import React from 'react';

const Follow = ({f,c}:{f:string,c:number}) => {
    return (
        <div className='text-2xl font-sans  flex  flex-wrap sm:flex-nowrap  gap-2 mr-5 font-bold sm:mx-3'>  <div  className='text-center w-full'>{f}</div><div className='text-center w-full '>{c}</div></div>
    );
};

export default Follow;