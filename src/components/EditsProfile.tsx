
import { memo } from "react";
import { Link } from "react-router-dom";


const EditsProfile = memo(() => {
  
    return (
        <div className='bg-slate-200 border-2 border-zinc-950 rounded-md p-3 text-center w-1/3 mx-auto md:mx-0'>
            <Link to={'/Edits '} >
            Edits profile
            </Link>
        </div>
    );
});

export default EditsProfile;