import  { memo } from 'react';
import { Link } from 'react-router-dom';
import Img from './Img';

const MessageList = memo(({p,i}:{p:ChatRoom,i:number}) => {
    return (
        <Link className="flex items-center my-4  gap-2" key={i} to={`/chat/${p.SendTo == Number(localStorage.getItem('token')) ? p.ReciveFrom : p.SendTo}`}>
            <Img className='rounded-full w-[50px] h-[50px] ' val={p.SendTo != Number(localStorage.getItem('token')) ? p.sendTo.img : p.reciveFrom.img} />
            <div >
                {p.SendTo != Number(localStorage.getItem('token')) ? p.sendTo.name : p.reciveFrom.name}
            </div>
        </Link>
    );
});

export default MessageList;