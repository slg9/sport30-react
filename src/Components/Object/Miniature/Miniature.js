import React, { useEffect } from "react"
import Image from "../Image/Image"
import {motion,useAnimation} from "framer-motion"
import "./miniature.css"

const Miniature = ({playVideo,name,videoLoaded,handlePlay,idVideo}) => {
    const control = useAnimation();
    const control2 = useAnimation();
    useEffect(()=>{
        control.start({ scale: [0, 1.1, 1] });
        control2.start({ opacity: [0, 0, 1] }); 
    },[idVideo])
    return (
        < div style={{ display: playVideo ? "none" : "flex" }}>
            <motion.div
                className="container__img"
                animate={control}
                title={name}
            >
                <Image urlImg={`https://i.ytimg.com/vi_webp/${idVideo}/maxresdefault.webp`} />
            </motion.div>
            {!videoLoaded ? (
                <motion.svg onClick={handlePlay} animate={control2} className="youtube__button" height="50px" version="1.1" viewBox="0 0 68 48" width="80px">
                    <motion.path whileHover={{ fill: "rgba(128,128,128,0.5)" }} whileTap={{ scale: 1.1 }} d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="rgba(0,0,128,1)"></motion.path>
                    <path d="M 45,24 27,14 27,34" fill="white"></path>
                </motion.svg>

            ) : (
                    <motion.svg className="youtube__button" height="50px" version="1.1" viewBox="0 0 68 48" width="68px">
                        <motion.path animate={{ rotate: [0, 5] }} transition={{ repeat: Infinity }} d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="rgba(128,128,128,0.5)"></motion.path>
                        <motion.circle animate={{ r: [10, 5] }} transition={{ repeat: Infinity }} cx="35" cy="24" r="10" stroke="white" fill="none" stroke-width="3" />
                        <motion.circle animate={{ r: [5, 10] }} transition={{ repeat: Infinity }} cx="35" cy="24" r="5" stroke="white" fill="none" stroke-width="3" />
                        <motion.circle animate={{ opacity: [0, 1] }} transition={{ repeat: Infinity }} cx="35" cy="24" r="1" stroke="white" fill="none" stroke-width="3" />
                    </motion.svg>
                )}

        </div>
    )

}
export default Miniature;