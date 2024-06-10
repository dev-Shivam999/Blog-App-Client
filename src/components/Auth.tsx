import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Setimg from './Setimg';
import toast from 'react-hot-toast';

const Auth = ({ type }: { type: "sign in" | "sign up" }) => {
    const [postInput, setPostInput] = useState<postInput>({
        name: '',
        password: "",
        email: "",
        img: "",
    })
    const [or, setfor] = useState<string>()
    let [img, setimg] = useState<React.ChangeEvent<HTMLInputElement>>()
    const navigate = useNavigate()

    async function sendRequest(e: React.FormEvent<HTMLFormElement>) {
        try {
            e.preventDefault()
            let formData
            if (type == "sign in") {
                formData = new FormData()
                if (!img?.target.files) {
                    return alert("Please select img")
                }
                formData.append('file', img.target.files[0])
                if (postInput.name) {
                    formData.append('name', postInput.name)
                }
                if (postInput.email) {
                    formData.append('email', postInput.email)
                }
                if (postInput.password) {
                    formData.append('password', postInput.password)
                }
            }


            let data
            if (type == "sign in") {
                data = await axios.post(`http://localhost:3000/user/signup`, formData, {
                    headers: {
                        'Content-Type': type == "sign in" ? 'multipart/form-data' : undefined
                    }
                })
            }else{
                data = await axios.post(`http://localhost:3000/user/sign`, postInput)
            }

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
                    Do you have an account <Link to={type == "sign in" ? '/sign' : "/signUp"}>{type != "sign in" ? 'Sign' : "Login"}</Link>?
                </div>
                
            </div>
            <form onSubmit={sendRequest} className=''>
                {type != "sign up" && <>
                    <Setimg fo={or ? or : ""} im={im} />
                    <div className='mx-auto w-3/4 sm:w-1/2'>
                        Chose your pic
                    </div>
                    <LableInput lable='name' type='text' onchange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setPostInput({
                            ...postInput, name: e.target.value
                        })
                    }} />
                </>}
                <LableInput lable='email' type='email' onchange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setPostInput({
                        ...postInput, email: e.target.value
                    })
                }} />
                <LableInput lable='password' type='password' onchange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setPostInput({
                        ...postInput, password: e.target.value
                    })
                }} />
                <div className='sm:w-[50%] w-[80%] mx-auto'>
                    <button className='w-full py-3 rounded-md bg-zinc-700 text-white'>{type}</button>

                </div></form>
        </div>
    );
};
function LableInput({ lable, onchange, type }: {
    lable: string, onchange: (e: React.ChangeEvent<HTMLInputElement>) => void, type: "text" | "password" | "email"
}) {
    return <div className='mx-auto my-3 w-[80%] sm:w-[50%]'>
        <label htmlFor="" className='m-1 text-xl  '>{lable}</label>
        <br />
        <input type={type} className='border-2  w-full  rounded-md p-3' placeholder={"Enter the " + lable} onChange={onchange} />
    </div>
}

export default Auth;