import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';



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
export const useBlogger = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Info>();
    useEffect(() => {
        axios.post(`http://localhost:3000/user/profile`, "none", {
            headers: {
                "Authorization": Number(localStorage.getItem("token"))
            }
        }).then(
            res => {
                setBlogs(res.data.message)

                setLoading(false)
            }
        ).catch(err => console.log(err))

    }, [])
    return {
        loading, blogs
    }
}
export const useProfile = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Info>();
  

    return {
        loading, blogs
    }
}
