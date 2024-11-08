import { useEffect, useMemo, useState, useCallback } from "react";
import ChatNav from "../components/ChatNav";
import axios from "axios";
import { useParams } from "react-router-dom";
import ChatSystem from "../components/ChatSystem";

const Chat = () => {
    const { id } = useParams();
    const [name, setName] = useState<Message[]>([]);

    // Initialize WebSocket connection only once
    const newSocket = useMemo(() => new WebSocket(`${import.meta.env.VITE_SOME_KEY}`), []);

    // WebSocket event handlers
    const handleOpen = useCallback(() => {
        console.log('Connection established');
        const user = localStorage.getItem('token');
        const User = { event: "User", id: user };
        newSocket.send(JSON.stringify(User));
    }, [newSocket]);

    const handleMessage = useCallback((message:any) => {
        console.log('Message received:', message.data);
        const val = JSON.parse(message.data);
        if (val.event !== "User" && val.event !== "Notification") {
            setName(prev => [...prev, { val: val.message, send: val.sendTo }]);
        } else if (val.event === "Notification") {
            // Handle notifications if necessary
            console.log(val);
            
            alert(`${val.message}`);
            // Optionally set a notification state here if you want to display them separately
        }
    }, []);

    const handleError = useCallback((error:any) => {
        console.error('WebSocket error:', error);
    }, []);

    const handleClose = useCallback(() => {
        console.log('WebSocket connection closed');
        // Optionally implement reconnection logic here
    }, []);

    useEffect(() => {
        // Attach WebSocket event listeners
        newSocket.onopen = handleOpen;
        newSocket.onmessage = handleMessage;
        newSocket.onerror = handleError;
        newSocket.onclose = handleClose;

        // Cleanup on component unmount
        return () => {
            newSocket.close();
        };
    }, [newSocket, handleOpen, handleMessage, handleError, handleClose]);

    // Initial API call to register the chat session
    useEffect(() => {
        axios.post(`${import.meta.env.VITE_SOME_KEY}/user/Chat`, "none", {
            headers: {
                "Authorization": Number(id),
                "Lol": Number(localStorage.getItem('token'))
            }
        })
            .then(response => console.log(response))
            .catch(error => console.log("API Error:", error));
    }, [id]);

    return (
        <div className="relative min-h-screen">
            <ChatNav />
            <ChatSystem newSocket={newSocket} />

            <div className="pb-12">
                <div className="flex flex-col">
                    {name.map((p, i) => (
                        <div
                            className={`px-5 text-2xl font-bold ${p.send === id ? "self-start" : "self-end"}`}
                            key={i}
                        >
                            {p.val}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Chat;
