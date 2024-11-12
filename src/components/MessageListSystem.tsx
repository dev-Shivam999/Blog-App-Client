import axios from 'axios';
import { memo, useEffect, useState } from 'react';
import MessageList from './MessageList';
import { BookLoaderComponent } from './Loading';

const MessageListSystem = memo(() => {
    const [data, setData] = useState<ChatRoom[]>([])
    const [loading,setLoading] = useState(true)
    const api = async () => {
        const { data } = await axios.post(`${import.meta.env.VITE_SOME_KEY}/user/ChatRoom`, { id: Number(localStorage.getItem('token')) }

        )
        setData(data.data)
        setLoading(false)


    }
    useEffect(() => {
        api()
    }, [])
    return (
        <>
        {
                loading ? <BookLoaderComponent />: data && data.length > 0 && data.map((p, i) => p._count.content > 0 && <MessageList i={i} p={p} />)

        }
          
        </>

    );
});

export default MessageListSystem;