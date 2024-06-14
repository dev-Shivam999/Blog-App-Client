import axios from 'axios';
import { MdDelete } from 'react-icons/md';
import toast from 'react-hot-toast';
import { memo } from 'react';

const BlogDelete = memo(({id}:{id:string}) => {

    const send=async(e:string)=>{
        const { data } = await axios.post(`${import.meta.env.VITE_SOME_KEY}/user/BlogDelete`,{e},{
            headers:{
                "Authorization":Number(localStorage.getItem('token'))
            }
        })
        if (data.success) { 
       toast.success("delete blog plz reload",{
        duration: 3000,
        style:{
            border:"5px solid lightgreen",
            borderRadius:10
        }
       })
        }
        
    }
    return (
        <MdDelete onClick={() => send(id)} />
    );
});

export default BlogDelete;