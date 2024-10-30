import { useEffect } from "react";
import ChatNav from "../components/ChatNav";
import axios from "axios";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";



const Chat = () => {
    const { id } = useParams()
    useEffect(() => {

        axios.post(`${import.meta.env.VITE_SOME_KEY}/user/profile`, "none", {
            headers: {
                "Authorization": Number(localStorage.getItem('token')),
                "Lol": Number(id),
                "location": String("BloggerProfile")
            }
        }).then(
            res => {
                if (res.data.success) {
                   


                  
                } else {
                    if (res.data.message == 'Not found') {
                        toast.error("Blogger not found")
                    }

            }}
        ).catch(err => console.log(err))

    }, [])
    return (
        <div>
     <ChatNav/>
        </div>
    );
};

export default Chat;