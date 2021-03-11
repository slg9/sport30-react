import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import "./video.css"

function Video({ name, urlVideo, start ,duration}) {
    const [thumbnail, setThumbnail] = useState();
    const [playVideo, setPlayVideo] = useState(false);
    const control = useAnimation();
    const control2 = useAnimation();
    const controlCircle= useAnimation();
    
    useEffect(() => {
        setPlayVideo(false);
        urlVideo && setThumbnail(urlVideo.split("embed/")[1]);
        console.log("video has changed");
        control.start({ scale: [0, 1, 0.9] });
        control2.start({ opacity: [0, 0, 1] });
        

    }, [urlVideo]);

    const handlePlay = () => {
        setPlayVideo(true);
        controlCircle.start({pathLength:[0.99,0],transition:{duration}})
    }

    return (

        <div class="container__video">
            
            <div style={{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-around"}}>
            <h1>{name}</h1>
            <motion.svg style={{right:0}} animate={{opacity:[0.2,1]}} transition={{duration: 1,yoyo: Infinity,ease: "easeOut",}} height="80px" version="1.1" viewBox="-10 -10 100 100" width="fit-content" >
               <motion.path 
                    d="M80 40 
                    C80 40 80 80 40 80 
                    C40 80 0 80 0 40 
                    C0 40 0 0 40 0 
                    C40 0 80 0 80 40Z"
                    /* d="
                    M cx, cy
                    m -r, 0
                    a r,r 0 1,0 (r * 2),0
                    a r,r 0 1,0 -(r * 2),0
                " */

                    stroke="gray" 
                    fill="none" 
                    style={{strokeWidth:"5",visibility:playVideo?'visible':'hidden'}}
                    animate={controlCircle}
                    /> 
                    
                    
                
            </motion.svg>
            </div>
            <div class="container__video__content">



                <iframe
                    title={name}
                    frameborder="0"
                    height="100%"
                    width="100%"
                    src={`${urlVideo}?start=${start}&autoplay=1&mute=0`}
                    allowfullscreen="true"
                    style={{ display: playVideo ? "flex" : "none" }}
                />

                {thumbnail && (
                    < div style={{ display: playVideo ? "none" : "flex" }}>
                        <motion.div
                            className="container__img"
                            animate={control}
                            title={name}
                        >
                            <img src={`https://i.ytimg.com/vi_webp/${thumbnail}/maxresdefault.webp`} />
                        </motion.div>
                        <motion.svg onClick={handlePlay} animate={control2} className="youtube__button" height="50px" version="1.1" viewBox="0 0 68 48" width="100%">
                            <motion.path whileHover={{ fill: "gray" }} whileTap={{ scale: 1.1 }} d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="rgba(0,0,128,1)"></motion.path>
                            <path d="M 45,24 27,14 27,34" fill="white"></path>
                        </motion.svg>
                    </div>
                )}


            </div>
            





        </div>

    )
}

export default Video
