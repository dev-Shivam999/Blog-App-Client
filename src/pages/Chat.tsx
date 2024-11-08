import { useEffect, useMemo, useState } from "react";
import ChatNav from "../components/ChatNav";
import axios from "axios";
import { useParams } from "react-router-dom";
import ChatSystem from "../components/ChatSystem";


const Chat = () => {



    const newSocket = useMemo(() => new WebSocket(`${import.meta.env.VITE_SOME_KEY}`), []);
    const { id } = useParams()
    useEffect(() => {
        axios.post(`${import.meta.env.VITE_SOME_KEY}/user/Chat`, "none", {
            headers: {
                "Authorization": Number(id),
                "Lol": Number(localStorage.getItem('token'))
            }
        }).then(response => console.log(response)).catch((e) => console.log(e))

        newSocket.onopen = () => {
            console.log('Connection established');
            const user = localStorage.getItem('token')
            const User = { event: "User", id: user }
            newSocket.send(JSON.stringify(User))
        }
        newSocket.onmessage = (message) => {
            console.log('Message received:', message.data);
            const val = JSON.parse(message.data)
            if (val.event != "User") {
                setName(p => [...p, val.message])
            }
        }

        return () => newSocket.close();
    }, [])
    const [name, setName] = useState<String[]>([])
    return (
        <div className="relative min-h-screen">
            <ChatNav />
            <ChatSystem newSocket={newSocket} />


            <div className="pb-12">
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