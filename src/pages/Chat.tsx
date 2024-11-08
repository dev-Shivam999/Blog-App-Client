import { useEffect, useMemo, useState, useCallback } from "react";
import ChatNav from "../components/ChatNav";
import axios from "axios";
import { useParams } from "react-router-dom";
import ChatSystem from "../components/ChatSystem";

const Chat = () => {
    const newSocket = useMemo(() => new WebSocket(`${import.meta.env.VITE_SOME_KEY2}`), []);
    console.log(import.meta.env.VITE_SOME_KEY2);

    const { id } = useParams();
    const [name, setName] = useState<Message[]>([]);

    useEffect(() => {
        axios.post(`${import.meta.env.VITE_SOME_KEY}/user/Chat`, "none", {
            headers: {
                "Authorization": Number(id),
                "Lol": Number(localStorage.getItem('token'))
            }
        })
            .then(response => {
                setName(response.data.message.content)
            }
            )


            .catch(error => console.log("API Error:", error));
    }, [id]);

    const handleOpen = useCallback(() => {
        console.log('Connection established');
        const user = localStorage.getItem('token');
        const User = { event: "User", id: user };
        newSocket.send(JSON.stringify(User));
    }, [newSocket]);

    const handleMessage = useCallback((message: any) => {
        console.log('Message received:', message.data);
        const val = JSON.parse(message.data);
        if (val.event == "notFound") alert("Not Found");
        if (val.event !== "User" && val.event !== "Notification") {
            setName(prev => [...prev, { content: val.content, sendTo: val.sendTo }]);
        } else if (val.event === "Notification") {



            alert(`${val.message}`);
        }
    }
        , []);

    const handleError = useCallback((error: any) => {
        console.error('WebSocket error:', error);
    }, []);

    const handleClose = useCallback(() => {
        console.log('WebSocket connection closed');
    }, []);

    useEffect(() => {

        newSocket.onopen = handleOpen
        newSocket.onmessage = handleMessage
        newSocket.onclose = handleClose
        newSocket.onerror = handleError

        return () => {
            newSocket.close();
        };
    }, []);



    return (
        <div className="relative min-h-screen">
            <ChatNav />
            <ChatSystem newSocket={newSocket} />

            <div className="pb-12">
                <div className="flex flex-col">
                    {name.map((p, i) => (
                        <div
                            className={`px-5 text-2xl font-bold ${p.sendTo === id ? "self-start" : "self-end"}`}
                            key={i}
                        >
                            {p.content}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Chat;
