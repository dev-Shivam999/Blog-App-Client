import { Link } from 'react-router-dom';
import Img from './Img';

const SearchSystem = ({p}:{p:Message2}) => {
    return (
        <Link key={p.id} className="flex items-center my-4  gap-2" to={`/chat/${p.id}`}>
            <Img className='rounded-full w-[50px] h-[50px] ' val={p.img} />
            <div >
                {
                    p.name
                }
            </div>
        </Link>
    );
};

export default SearchSystem;