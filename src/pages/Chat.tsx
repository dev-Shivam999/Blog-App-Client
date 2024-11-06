import { useEffect, useMemo, useState } from "react";
import ChatNav from "../components/ChatNav";
import axios from "axios";
import { useParams } from "react-router-dom";


const Chat = () => {



    const newSocket = useMemo(() => new WebSocket(`${import.meta.env.VITE_SOME_KEY}`), []);
    const { id } = useParams()
    useEffect(() => {
        // axios.post(`${import.meta.env.VITE_SOME_KEY}/user/Chat`,"none",{
        //     headers: {
        //         "Authorization": Number(id),
        //         "Lol": Number(localStorage.getItem('token'))
        //     }
        // }).then(response =>console.log(response)).catch((e) => console.log(e))

        newSocket.onopen = () => {
            console.log('Connection established');
            const user = localStorage.getItem('token')
            const User = { event: "User", id: user }
            newSocket.send(JSON.stringify(User))
        }
        newSocket.onmessage = (message) => {
            console.log('Message received:', message.data);
         setName(p=>[...p,message.data])
        }
       
        return () => newSocket.close();
    }, [])
   
    const[val,setVal]=useState("")
    const chat = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data={event:"chat",message:val}
        newSocket.send(JSON.stringify(data))
    }
    const[name,setName]=useState<String[]>([])
    return (
        <div className="relative min-h-screen">
            <ChatNav />


            <form className="fixed bottom-0 w-full bg-black " onSubmit={(e) => chat(e)}>
                <input type="text" className="bg-transparent p-2 outline-none rounded-xl w-2/4 border-[3px] border-white " onChange={(e)=>setVal(e.target.value)} />
            </form>
           <div  className="pb-12">
                {
                    name.map(p =>
                        <div>{p}</div>
                    )
                }
           </div>
        </div>
    );
};

export default Chat;