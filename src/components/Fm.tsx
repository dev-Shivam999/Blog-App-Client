
import MakeFollow from './MakeFollow';
import toast from 'react-hot-toast';

const Fm = () => {
    return (
        <div className='flex gap-5'>
            <MakeFollow/>
                <div onClick={()=>toast("coming soon..",{style:{
                    border: "5px solid lightgreen",
                    borderRadius:12
                }})} className='bg-zinc-300 cursor-pointer p-2 border-2 border-zinc-800 rounded-md'>Message</div>
        </div>
    );
};

export default Fm;