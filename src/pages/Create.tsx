
import { memo } from 'react';
import From from '../components/from';
import NowNav from '../components/Now-nav';

const Create = memo(() => {

   
    
    return (

        <div className='min-h-screen ' style={{ backgroundImage: `url(/three.avif)`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", opacity: "0.8", backgroundBlendMode: "color-burn" }}>
        <NowNav/>
            <div className='flex justify-center '>
                <From />
            </div>
        </div>
    );
});

export default Create;