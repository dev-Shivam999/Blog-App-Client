import axios from 'axios';
import { memo, useEffect, useState } from 'react';
import MessageList from './MessageList';

const MessageListSystem = memo(() => {
    const [data, setData] = useState<ChatRoom[]>([])
    const api = async () => {
        const { data } = await axios.post(`${import.meta.env.VITE_SOME_KEY}/user/ChatRoom`, { id: Number(localStorage.getItem('token')) }

        )
        setData(data.data)


    }
    useEffect(() => {
        api()
    }, [])
    return (
        <>
            {
                data && data.length > 0 && data.map((p,i) => <MessageList i={i} p={p} />)
            }
        </>

    );
});

export default MessageListSystem;