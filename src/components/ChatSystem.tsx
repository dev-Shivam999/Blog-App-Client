import React, { useState } from 'react';
import { MdSend } from 'react-icons/md';
import { useParams } from 'react-router-dom';

const ChatSystem = ({newSocket}:{newSocket:WebSocket}) => {
    const { id } = useParams()

    const [val, setVal] = useState<string>("")

    const chat = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        const data = { event: "chat", message: val, id: id }
        newSocket.send(JSON.stringify(data))
        setVal("")
    }
   
    return (
        <form className="fixed bottom-0 w-full flex bg-black border-white rounded-xl border-[3px] sm:pe-3 " onSubmit={(e) => chat(e)}>
            <input type="text" value={val} className="bg-transparent p-2 outline-none  w-full  " onChange={(e) => setVal(e.target.value)} />
            <button className='text-2xl -rotate-45'><MdSend/></button>
        </form>
    );
};

export default ChatSystem;