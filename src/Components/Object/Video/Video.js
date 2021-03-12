import React, { useState, useEffect ,useRef} from 'react'
import { motion, useAnimation } from 'framer-motion'
import Progress from "../Progress/Progress"
import YouTube from 'react-youtube'
import "./video.css"


function Video({ name, idVideo, start }) {
    const [duration,setDuration] = useState(0);
    const[countdown,setCountdown] = useState(true);
    const[currentTime,setCurrentTime] = useState();
    const [playVideo, setPlayVideo] = useState(false);
    const [loadingVideo, setLoadingVideo] = useState(false);
    const control = useAnimation();
    const control2 = useAnimation();
    const controlCircle = useAnimation();


    useEffect(() => {
        setCurrentTime(start);
        setCountdown(true);
        setPlayVideo(false);
        setLoadingVideo(false);
        console.log("video has changed");
        control.start({ scale: [0, 1.1, 1] });
        control2.start({ opacity: [0, 0, 1] });


    }, [idVideo]);




    const handlePlay = () => {
        setLoadingVideo(true);
        controlCircle.start({ pathLength: [0.99, 0], transition: { duration } })
    }
    const opts = {
        height: '400px',
        width: '690px',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            start
        },
    };

    const onReady = (event) => {
        let d = event.target.getDuration()-start;
        setDuration(d);
        setPlayVideo(true);

    }

    const onStateChange = (event) => {
        setCurrentTime(event.target.getCurrentTime());
        console.log(event.target);
    }
    const onPause = (event) => {
        event.target.pauseVideo();
        setCountdown(false);
    }
    const onPlay = (event) => {
        event.target.playVideo();
        setCountdown(true);
    }

    return (
        <div style={{ display: "flex", width: "100%", alignItems: "center" ,flexDirection:"column"}}>
            <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
                    <h1 style={{ display: "flex", flex: "1", justifyContent: "center" }}>{name}</h1>

                    {playVideo && <Progress countdown={countdown} currentTime={currentTime} duration={duration} start={start} style={{ position: "absolute" }} />}
                </div>
            <div class="container__video">
                

                <div class="container__video__content">
                    {loadingVideo &&
                        <>
                            <div style={{ display: playVideo ? "flex" : "none" }}>
                                <YouTube
                                    videoId={idVideo}
                                    onReady={onReady}
                                    onStateChange={onStateChange}
                                    opts={opts}
                                    onPause={onPause}
                                    onPlay={onPlay}

                                />


                            </div>
                            {/* <div id="loader" style={{ position: "absolute", color: "red", zIndex: "10", marginLeft: "300px", marginTop: "170px" ,display: playVideo ? "none" : "flex" }}>
                            <p>loading....</p>
                        </div> */}
                        </>
                    }


                    {idVideo &&

                        < div style={{ display: playVideo ? "none" : "flex" }}>
                            <motion.div
                                className="container__img"
                                animate={control}
                                title={name}
                            >
                                <img src={`https://i.ytimg.com/vi_webp/${idVideo}/maxresdefault.webp`} />
                            </motion.div>
                            {!loadingVideo ? (
                                <motion.svg onClick={handlePlay} animate={control2} className="youtube__button" height="50px" version="1.1" viewBox="0 0 68 48" width="80px">
                                    <motion.path whileHover={{ fill: "gray" }} whileTap={{ scale: 1.1 }} d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="rgba(0,0,128,1)"></motion.path>

                                    <path d="M 45,24 27,14 27,34" fill="white"></path>

                                </motion.svg>

                            ) : (
                                    <motion.svg className="youtube__button" height="50px" version="1.1" viewBox="0 0 68 48" width="68px">
                                        <motion.path animate={{ rotate: [0, 5] }} transition={{ yoyo: Infinity }} d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="gray"></motion.path>

                                        <motion.circle animate={{ r: [10, 5] }} transition={{ yoyo: Infinity }} cx="35" cy="24" r="10" stroke="white" fill="none" stroke-width="3" />
                                        <motion.circle animate={{ r: [5, 10] }} transition={{ yoyo: Infinity }} cx="35" cy="24" r="5" stroke="white" fill="none" stroke-width="3" />
                                        <motion.circle animate={{ opacity: [0, 1] }} transition={{ yoyo: Infinity }} cx="35" cy="24" r="1" stroke="white" fill="none" stroke-width="3" />

                                    </motion.svg>
                                )}

                        </div>
                    }



                </div>






            </div>
        </div>

    )
}

export default Video
