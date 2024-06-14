import axios from 'axios';
import  { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';



export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const navigate=useNavigate()
    const [blogs, setBlogs] = useState<blogs>();
    useEffect(() => {
        axios.put(`${import.meta.env.VITE_SOME_KEY}/user/result/${id}`).then(
            res => {
             if (res.data.success) {
                 setBlogs(res.data.data)

                 setLoading(false)
             }else{
                toast.error("post not  found",{
                    duration: 2000
                })
                navigate('/')
             }
            }
        ).catch(err => console.log(err))

    }, [])
    return {
        loading, blogs
    }
}


