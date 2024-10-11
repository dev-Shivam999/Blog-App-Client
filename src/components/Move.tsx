import { memo, useState } from 'react';

const Move = memo(() => {
    const [op, setpo] = useState(0);
    const [or, so] = useState(0)

    window.addEventListener('mousemove', (e) => {
        setpo(e.x);
        so(e.y);
       



    })

    return (
        <div style={{ top: `${or}px`, left: `${op}px` }} className=' fixed z-50 w-5 h-5 bg-white mix-blend-difference   rounded-full'>

        </div>
    );
});

export default Move;