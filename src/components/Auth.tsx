import axios from 'axios';
import React, { memo, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Setimg from './Setimg';
import toast from 'react-hot-toast';
import LableInput from './Lable';

const Auth = memo(({ type }: { type: "sign in" | "sign up"|"edits" }) => {


  

    const [postInput, setPostInput] = useState<postInput>({
        name: '',
        password: "",
        email: "",
        img: "",
    })

    const lo=useLocation()
    const edits=async()=>{
        await axios.post(`${import.meta.env.VITE_SOME_KEY}/user/profile`, "none", {
            headers: {
                "Authorization": Number(localStorage.getItem('token')),
                "Location": String(lo.pathname)
            }
        }).then(
            res => {
                const img = res.data.message.img
                const Name = res.data.message.name
                setPostInput({ ...postInput, img: img, name:Name})
                setfor(img)
            }
        ).catch(err => console.log(err))
    }

    useEffect(() => {

      type=="edits"&&edits()
    }, [])

    const [or, setfor] = useState<string>()
    let [img, setimg] = useState<React.ChangeEvent<HTMLInputElement>>()
    const navigate = useNavigate()

    async function sendRequest(e: React.FormEvent<HTMLFormElement>) {
        try {
            e.preventDefault()
            let formData: { avtar: String, email: String, name: String, password: String } = { avtar: "String", email: "String", name: "String", password: "String" }
            if (type == "sign in"||type == "edits") {
            
                if (!img?.target.files&&type != "edits") {
                    return alert("Please select img")
                }
                
                    if (img?.target.files) {
                        const data=new FormData()
                        data.append("file", img.target.files[0])
                        data.append("upload_preset", "zkpqmxbs")
                        data.append("cloud_name", "dqavwsmjz")
                        const url = await fetch("  https://api.cloudinary.com/v1_1/dqavwsmjz/image/upload", {
                            method: "post",
                            body: data
                        })
                        const data2 = await url.json()
                   
                       
                        formData.avtar= data2.secure_url
                    }
                
                if (postInput.name) {
                    formData.name= postInput.name
                }
                if (postInput.email) {
                    formData.email= postInput.email
                }
                if (postInput.password) {
                    formData.password= postInput.password
                }
            }


            let data
            if (type == "sign in"||type == "edits") {
                data = await axios.post(`${import.meta.env.VITE_SOME_KEY}/user/${type == "sign in" ? "signup" : "EditsProfile"}`, formData, {headers: {
                    "Authorization": Number(localStorage.getItem('token')),
                    "Location": String(lo.pathname)
                }})
            }
            else{
                data = await axios.post(`${import.meta.env.VITE_SOME_KEY}/user/sign`, postInput)
            }

          if (type!="edits") {
              if (data?.data.success) {
                  localStorage.setItem("token", data.data.message)
                  navigate('/')
              } else {
                  toast.error(data?.data.message, {
                      style: {
                          border: '1px solid red',
                          borderRadius: 12
                      }
                  })
              }
          }else{
              if (data?.data.success) {
                  navigate('/Profile')
              } else{
                toast.error("try later",{
                    duration: 2000
                })
              }
          }
        } catch (error) {
            console.log(error);

        }

    }
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
        <div className='h-screen w-[100%] text-sm  flex justify-center flex-col'>
            <div className='text-center font-bold text-xl sm:text-3xl'>
                {type == "sign in" && "Create an account"}
                <div className='text-gray-400 text-sm'>
                 {
                        type != "edits" && <> Do you have an account <Link to={type == "sign in" ? '/sign' : "/signUp"}>{type != "sign in" ? 'Sign' : "Login"}</Link>?
                        </>
                 }
                  </div>
                
            </div>
            <form onSubmit={sendRequest} className=''>
                {type != "sign up" && <>
                    <Setimg fo={or ? or : ""} im={im} />
                    <div className='mx-auto w-3/4 sm:w-1/2'>
                        Chose your pic
                    </div>
                    <LableInput value={postInput.name} lable='name' type='text' onchange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setPostInput({
                            ...postInput, name: e.target.value
                        })
                    }} />
                </>}
            {
                type!="edits"&&<>
                        <LableInput value={postInput.email} lable='email' type='email' onchange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setPostInput({
                                ...postInput, email: e.target.value
                            })
                        }} />
                        <LableInput value={postInput.password} lable='password' type='password' onchange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setPostInput({
                                ...postInput, password: e.target.value
                            })
                        }} />
                </>
            }
                <div className='sm:w-[50%] w-[80%] mx-auto'>
                    <button className='w-full py-3 rounded-md bg-zinc-700 text-white'>{type}</button>

                </div></form>
        </div>
    );
});

export default Auth;