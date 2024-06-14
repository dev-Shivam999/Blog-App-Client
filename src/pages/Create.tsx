
import { memo } from 'react';
import From from '../components/from';
import { Link } from 'react-router-dom';

const Create = memo(() => {

   
    
    return (

        <div>
            <Link to={'/'} className='text-3xl font-bold flex justify-between items-center '>

                CRO.BLOGS
            </Link>
            <div className='flex justify-center'>
                <From />
            </div>
        </div>
    );
});

export default Create;