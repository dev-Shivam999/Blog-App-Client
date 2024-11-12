import { memo, useEffect, useState } from "react";
import axios from "axios";
import SearchSystem from "./SearchSystem";


const Search = memo(() => {
    const [value, SetValue] = useState("")
    const [data, setData] = useState<Message2[]>([])
    useEffect(() => {
        if (value.trim() != "") {
            const req = setTimeout(async () => {
                const { data } = await axios.put(`${import.meta.env.VITE_SOME_KEY}/user/UserSearch/${value.trim()}`)
                setData(data.data)

            }, 500);

            return () => {
                clearTimeout(req);
            }
        }else{
            setData([])
        }

    }, [value])


    return (
        <div>
           <input type="Search" placeholder="Friend" className="bg-transparent ps-6 relative left-1/2 -translate-x-1/2 border-2 rounded-lg border-white" onChange={(e) => SetValue(e.target.value)} />
            <ul>
                {
                    data && data.length > 0 && data?.map(p => p.id != Number(localStorage.getItem('token')) && 
                  <SearchSystem p={p}/>)
                }
            </ul>

        </div>
    );
});

export default Search;