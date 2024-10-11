
import Quote from '../components/Quote';
import Auth from '../components/Auth';
import { memo } from 'react';
import Nav2 from '../components/Nav2';

const SignUp = memo(() => {
    return (
        
        <>
            <div className='p-3 grid grid-cols-2 text-3xl font-bold'>  <Nav2 /></div>
            <div className='sm:text-3xl  grid md:grid-cols-2 grid-cols-1 font-bold'>
                <div className='h-screen '>
                    <Auth type='sign in' />
                </div>
                <div className='md:block md:h-screen hidden h-0'>
                    <Quote />
                </div>
            </div>
        </>
    );
});


export default SignUp;