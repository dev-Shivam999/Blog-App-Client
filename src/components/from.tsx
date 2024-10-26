import axios from 'axios';
import React, { memo, useRef, useState } from 'react';
import Setimg from './Setimg';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const From = memo(() => {
    const [push,setpush]=useState(false)
    const navigate=useNavigate()
    const send = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (title.current != null && content.current != null) {
            if (!img?.target.files) {
                return alert("Please select img")
            }
            if (content.current.value.trim().length<500) {
                return toast.error(`content must be less than 500 characters ${ content.current.value.length}`)
            }
            setpush(true)
            try {
                const formData = new FormData()
                const dat = new FormData()

                dat.append("file", img.target.files[0])
                dat.append("upload_preset", "zkpqmxbs")
                dat.append("cloud_name", "dqavwsmjz")
                const url = await fetch("  https://api.cloudinary.com/v1_1/dqavwsmjz/image/upload", {
                    method: "post",
                    body: dat
                })
                const data2 = await url.json()


                formData.append('avtar', data2.secure_url)

                formData.append('Title', title.current.value)
                formData.append('content', content.current.value)

                const { data } = await axios.post(`${import.meta.env.VITE_SOME_KEY}/user/post`, formData, {
                    headers: {
                        "Authorization": Number(localStorage.getItem('token')),
                        "Content-Type": "application/json"
                    }
                })
                if (data.success) {
                    setpush(false)
                    toast.success("blog created", {
                        duration: 1000,
                        icon: '✅',
                        style: {
                            border: '5px solid green',
                            borderRadius: 10,

                        }
                    })
                    navigate('/Blogs')
                } else {
                    toast.error(data.message, {
                        duration: 1000,
                        icon: '❌',
                        style: {
                            border: '5px solid red',
                            borderRadius: 10,

                        }
                    })
                }
            } catch (error) {
                toast.error("net chalu kar ", {
                    duration: 1000,
                    icon: '❌',
                    style: {
                        border: '5px solid red',
                        borderRadius: 10,

                    }
                })
                setpush(false);
                console.log(error);
                
            }
        }
    }

const title = useRef<HTMLInputElement | null>(null)
const content = useRef<HTMLTextAreaElement | null>(null)
    const [or, setfor] = useState<string>()
    let [img, setimg] = useState<React.ChangeEvent<HTMLInputElement>>()


    const im = async (e: React.ChangeEvent<HTMLInputElement>) => {


        if (e.target.files) {

            const formData = new FileReader();
            setimg(e);


            formData.readAsDataURL(e.target.files[0]);
            formData.onload = () => {

                if (typeof formData.result == "string") {

                    setfor(formData.result)
                }
            }
            formData.onerror = (e) => {
                console.log(e);

            }

        }
    }
return (
    <form className='sm:w-2/3 w-11/12 glass sm:p-5  ' onSubmit={send}>
           
            <Setimg fo={or ? or : ""} im={im} />
        
        <div className='w-full  mx-auto'>
            <input type="text" placeholder='Enter the your blog title' ref={title ? title : ""} className='outline-none m-2 w-full rounded-md p-3 text-xl pls  bg-transparent font-bold font-mono' />
            <textarea name="" id="" cols={30} rows={10} ref={content ? content : ""} className='outline-none sr mx-2 rounded-md w-full p-3  bg-transparent pls ' spellCheck={false} placeholder='Enter the your blog story'></textarea>
            <button className={`w-11/12 mx-auto block my-4 transition-all ${push?"bg-yellow-300":"bg-green-500"}  rounded-md p-2 text-3xl text-white`}>{push?"Uploading":"Publish"}</button>
        </div>
    </form>
);
});

export default From;