import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ChatSystem = ({newSocket}:{newSocket:WebSocket}) => {
    const { id } = useParams()

    const [val, setVal] = useState<string>("")

    const chat = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = { event: "chat", message: val, Send: id }
        newSocket.send(JSON.stringify(data))
        setVal("")
    }
   
    return (
        <form className="fixed bottom-0 w-full bg-black " onSubmit={(e) => chat(e)}>
            <input type="text" value={val} className="bg-transparent p-2 outline-none rounded-xl w-2/4 border-[3px] border-white " onChange={(e) => setVal(e.target.value)} />
        </form>
    );
};

export default ChatSystem;