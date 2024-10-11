import { LazyLoadImage } from "react-lazy-load-image-component";

import 'react-lazy-load-image-component/src/effects/blur.css';

const Img = ({val,className,st="" }:{val:string,className:string,st?:string}) => {
    return (
        
            <LazyLoadImage
                alt={val}
                effect="blur"
                className={className}
                wrapperProps={{

                    style: { transitionDelay: "1s",width:`${st}%`},
                }}
                src={val} />
    );
};

export default Img;