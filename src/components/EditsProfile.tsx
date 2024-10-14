
import { memo } from "react";
import { Link } from "react-router-dom";


const EditsProfile = memo(() => {
  
    return (
        <Link to={'/Edits '} className='bg-slate-200 border-2 block  border-zinc-950 rounded-md p-3 text-center w-2/5 mx-auto text-black md:mx-0'>
                    Edits profile
            
        </Link>
    );
});

export default EditsProfile;