
import Quote from '../components/Quote';
import Auth from '../components/Auth';

const Sign = () => {
    return (
        <div className='sm:text-3xl  grid md:grid-cols-2 grid-cols-1 font-bold'>
            <div className='h-screen '>
                <Auth type='sign up' />
            </div>
            <div className='md:block md:h-screen hidden h-0'>
                <Quote />
            </div>
        </div>
    );
};


export default Sign;