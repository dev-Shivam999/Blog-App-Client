
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setVal } from '../store/Bl';
import { useSelector } from 'react-redux';

const MakeFollow = () => {
    const {data}=useSelector((state:InitialState2)=>state.c)
    const{id}=useParams()
const dispatch=useDispatch()
    
    const send=async()=>{
       const {data}= await axios.post("http://localhost:3000/user/follow","none",{
            headers:{
                "Authorization":Number(id),
                "Lol":Number(localStorage.getItem('token'))
            }
        })
       if( data.success){
           if (data.message =="Followed successfully") {
            dispatch(setVal(true))
            
            
            }else{
            dispatch(setVal(false))

        }
       }
        
    }
    return (
        <div onClick={()=>send()} className='bg-sky-500 cursor-pointer text-white p-2 border-2  rounded-md' >{data?"Following":"Follow"}</div>

    );
};

export default MakeFollow;