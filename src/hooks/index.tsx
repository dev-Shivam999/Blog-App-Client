import axios from 'axios';
import  { useEffect, useState } from 'react';



export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<blogs>();
    useEffect(() => {
        axios.put(`http://localhost:3000/user/result/${id}`).then(
            res => {
                setBlogs(res.data.data)

                setLoading(false)
            }
        ).catch(err => console.log(err))

    }, [])
    return {
        loading, blogs
    }
}


