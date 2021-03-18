import React, { useEffect } from "react";
import {motion,useAnimation} from "framer-motion";

const ProgressBar = ({progression}) => {
    const controlBar = useAnimation();
    const controlScale = useAnimation();
    useEffect(()=>{
        controlBar.start({ x2: progression,transition:{duration:1 }});
        controlScale.start({scale:[0,1.1,1]});
    },[progression])
    return (
        <motion.div animate={controlScale} >
            <svg version="1.1" viewBox="0 0 50 1" height="10px" width="500px" style={{ backgroundColor: "rgba(255,255,255,0.5)" }}>
                <motion.line animate={controlBar} x1="0" x2="0" y1="0" y2="0" style={{ stroke: "white", strokeWidth: "200" }} ></motion.line>
            </svg>
            <h1  style={{display:"flex",justifyContent:"center"}}>{progression * 2}%</h1>
        </motion.div>
    );
}

export default ProgressBar;