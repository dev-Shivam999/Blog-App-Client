import axios from 'axios';
import React, { memo, useRef, useState } from 'react';
import Setimg from './Setimg';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const From = memo(() => {
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
            const formData = new FormData()
            const dat=new FormData()

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

            const { data } = await axios.post(`${import.meta.env.VITE_SOME_KEY}/user/post`,formData, {
                headers: {
                    "Authorization": Number(localStorage.getItem('token')),
                    "Content-Type": "application/json"
                }
            })
            if (data.success) {
                toast.success("blog created", {
                    duration: 1000,
                    icon: '✅',
                    style: {
                        border: '5px solid green',
                        borderRadius: 10,

                    }
                })
                navigate('/')
            }else{
                toast.error(data.message,{
                    duration: 1000,
                    icon: '❌',
                  style:{
                    border: '5px solid red',
                    borderRadius:10,

                  }
                })
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
    <form className='w-2/3 ' onSubmit={send}>
            <Setimg fo={or ? or : ""} im={im} />
            <div className='mx-auto text-sm  w-1/2'>
                Your blog on pic
            </div>
        
        <div className='w-full sm:w-1/2 mx-auto'>
            <input type="text" placeholder='Enter the your blog title' ref={title ? title : ""} className='border-2 border-black m-2 w-full rounded-md p-3 text-xl font-bold font-mono' />
            <textarea name="" id="" cols={30} rows={10} ref={content ? content : ""} className='border-2  mx-2 border-black rounded-md w-full p-3 text-gray-500 ' spellCheck={false} placeholder='Enter the your blog story'></textarea>
            <button className='w-full bg-green-500 mx-2 rounded-md p-2 text-3xl text-white'>Publish</button>
        </div>
    </form>
);
});

export default From;