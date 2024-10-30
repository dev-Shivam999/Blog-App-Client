
import { memo } from 'react';
import MakeFollow from './MakeFollow';
import { Link } from 'react-router-dom';

const Fm = memo(({id}:{id:string}) => {
    return (
        <div className='flex gap-5'>
            <MakeFollow/>
                <Link to={`/Chat/${id}`} className='bg-zinc-300 cursor-pointer p-2 border-2 border-zinc-800 rounded-md'>Message</Link>
        </div>
    );
});

export default Fm;