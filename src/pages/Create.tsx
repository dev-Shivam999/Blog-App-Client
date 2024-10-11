
import { memo } from 'react';
import From from '../components/from';
import Nav2 from '../components/Nav2';

const Create = memo(() => {

   
    
    return (

        <div className='h-screen overflow-hidden' style={{ backgroundImage: `url(/three.avif)`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", opacity: "0.8", backgroundBlendMode: "color-burn" }}>
            <div className='px-3 grid grid-cols-2 text-3xl font-bold'>  <Nav2 /></div>

            <div className='flex justify-center '>
                <From />
            </div>
        </div>
    );
});

export default Create;