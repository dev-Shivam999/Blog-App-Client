import { useEffect, useMemo, useState, useCallback } from "react";
import ChatNav from "../components/ChatNav";
import axios from "axios";
import { useParams } from "react-router-dom";
import ChatSystem from "../components/ChatSystem";
import { BookLoaderComponent } from "../components/Loading";

const Chat = () => {
    const newSocket = useMemo(() => new WebSocket(`${import.meta.env.VITE_SOME_KEY2}`), []);
    
    const { id } = useParams();
    const [name, setName] = useState<Message[]>([]);
    const [Loadings, setLoading] = useState(true)
    const [User, SetUser] = useState<{
        img: string
        name: string
    }>({img:"",name:""})

    useEffect(() => {
        axios.post(`${import.meta.env.VITE_SOME_KEY}/user/Chat`, "none", {
            headers: {
                "Authorization": Number(id),
                "Lol": Number(localStorage.getItem('token'))
            }
        })
            .then(response => {
                setName(response.data.message)
                SetUser(response.data.sendTo)
                setLoading(false)
                console.log("ji");
                
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
        const val = JSON.parse(message.data);
        console.log(val.Time);

        if (val.event == "notFound") alert("Not Found");
        if (val.event !== "User" && val.event !== "Notification") {
            setName(prev => [...prev, {
                content: val.content, sendTo: val.sendTo,
                CreateAt: val.Time
            }]);


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


    if (Loadings) <BookLoaderComponent />

    return (
        <>
       {
                Loadings ? <BookLoaderComponent /> : <div className="relative min-h-screen">
                    <ChatNav user={User} />
                    <ChatSystem newSocket={newSocket} />

                    <div className="py-[100px]">
                        <div className="flex flex-col">
                            {name.map((p, i) => (
                                <div key={i} className={`px-5  ${p.sendTo === id ? "self-start" : "self-end"}`}
                                >
                                    <div className="text-2xl font-bold"

                                    >
                                        {p.content}
                                    </div>
                                    <span className={`block w-full ${p.sendTo != id ? "text-end" : "text-start"} text-xs text-zinc-600`}>{`${p.CreateAt}`}</span>

                                </div>))}
                        </div>
                    </div>
                </div>   
    }
    </>
    );
};

export default Chat;
