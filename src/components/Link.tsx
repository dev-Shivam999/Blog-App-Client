import  {  memo, useEffect, useState } from 'react';
import './linke.css'
import axios from 'axios';
import toast from 'react-hot-toast';
const Like = memo(({id,count}:{id:string,count:Link[]}) => {
    const [HeartIcon, setHeartIcon] =useState<boolean>(false)
 const [c,seC] =useState<number>(count?.length)

  
    useEffect(()=>{
       const check= count?.filter(c => c.blogerId ==localStorage.getItem('token'))
       console.log(check);
       
       if (check?.length>0) {
           setHeartIcon(true)
       }
       
    },[])
   
  const Heart=async(id:string)=>{
      const { data } = await axios.post(`${import.meta.env.VITE_SOME_KEY}/user/Link`,{id:id},{
        headers:{
            "Authorization":Number(localStorage.getItem('token')),
        }
      })
      if (!data.success&&data.message) {
       seC(c-1)
    setHeartIcon(p => !p)
       } else if (data.success && data.message){
           
           seC(c+1)
        setHeartIcon(p => !p)
        }else{
        toast.error("Login")
      }
}
    return (
        <button id="HeartIcon" className={`heart flex gap-4 items-center ${HeartIcon ? "filled" :"notFilled"}`} onClick={()=> Heart(id)}>
            <svg width="32px" height="27px" viewBox="0 0 31 27" version="1.1" xmlns="http://www.w3.org/2000/svg" className="full">
                <g id="Page-1">
                    <g id="Artboard-Copy" transform="translate(-8.000000, -12.000000)">
                        <path d="M36.8,14.8 C35.4,13.3 33.4,12.5 31.4,12.5 C29.4,12.5 27.4,13.3 26,14.8 L24,16.9 L22,14.8 C20.6,13.3 18.6,12.5 16.6,12.5 C14.6,12.5 12.6,13.3 11.2,14.8 C8.2,17.9 8.2,22.9 11.2,26 L23.2,38.7 C23.4,38.9 23.7,39 23.9,39 C23.9,39 23.9,39 24,39 C24,39 24,39 24.1,39 C24.4,39 24.6,38.9 24.8,38.7 L34.1,28.8 L36.8,26 C39.7,22.9 39.7,17.9 36.8,14.8 Z"></path>
                    </g>
                </g>
            </svg>

            <svg width="32px" height="27px" viewBox="0 0 31 27" version="1.1" xmlns="http://www.w3.org/2000/svg" className="heartfiller">
                <g id="Page-1">
                    <g id="Artboard-Copy" transform="translate(-8.000000, -12.000000)">
                        <path d="M36.8,14.8 C35.4,13.3 33.4,12.5 31.4,12.5 C29.4,12.5 27.4,13.3 26,14.8 L24,16.9 L22,14.8 C20.6,13.3 18.6,12.5 16.6,12.5 C14.6,12.5 12.6,13.3 11.2,14.8 C8.2,17.9 8.2,22.9 11.2,26 L23.2,38.7 C23.4,38.9 23.7,39 23.9,39 C23.9,39 23.9,39 24,39 C24,39 24,39 24.1,39 C24.4,39 24.6,38.9 24.8,38.7 L34.1,28.8 L36.8,26 C39.7,22.9 39.7,17.9 36.8,14.8 Z"></path>
                    </g>
                </g>
            </svg>
           
            <svg width="19px" height="27px" viewBox="0 0 19 27" version="1.1" xmlns="http://www.w3.org/2000/svg" className="left">
                <g id="Page-1">
                    <path d="M15.9820681,4.88117154 L14,2.8 C12.6,1.3 10.6,0.5 8.6,0.5 C6.6,0.5 4.6,1.3 3.2,2.8 C0.2,5.9 0.2,10.9 3.2,14 L15.2,26.7 C15.4,26.9 15.7,27 15.9,27 L16.0119165,27 L18.1123047,18.4641113 L13.4995117,11.1228027 L15.9820681,4.88117154 Z" id="Left-Heart-Piece"></path>
                </g>
            </svg>

            <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="18"
                height="27"
                viewBox="0 0 18 27"
                style={{ background: 'new 0 0 18 27' }}
                xmlSpace="preserve"
                className="right"
            >
                <path
                    d="M15.8,2.8c-1.4-1.5-3.4-2.3-5.4-2.3S6.4,1.3,5,2.8L3,4.9l0,0l-2.5,6.2l4.6,7.3L3,27c0,0,0,0,0.1,0
      c0.3,0,0.5-0.1,0.7-0.3l9.3-9.9l2.7-2.8C18.7,10.9,18.7,5.9,15.8,2.8z"
                />
            </svg>
           
            <span className='text-3xl font-serif text-gray-600'>

                {
                    c > 0 && c > 1000 ? c.toString().slice(0, 1)[0] + "." + c.toString().slice(0, 1)[1] + "k" : c > 100000 ? c.toString().slice(0, 2)[0] + "." + c.toString().slice(1, 2) + "M" : c>=1&&c

                }
            </span>
        </button>
    );
});

export default Like;