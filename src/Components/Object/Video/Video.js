import React, { useState, useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Replay } from "@material-ui/icons"
import { IconButton } from "@material-ui/core"
import Prog from "../Progress/Progress"
import YouTube from 'react-youtube'
import Miniature from "../Miniature/Miniature"
import "./video.css"


function Video({ exercice, nextExercice, restart, setRestart }) {
    const { name, idVideo, start, end } = exercice;
    const [finish, setFinish] = useState(false);
    const [duration, setDuration] = useState(0);
    const [countdown, setCountdown] = useState(true);
    const [currentTime, setCurrentTime] = useState();
    const [playVideo, setPlayVideo] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);

    const videoRef = useRef();

    const reloadVideo = () => {
        if (playVideo) {
            videoRef.current.resetPlayer();
            setCurrentTime(start);
            setRestart(false);
            setFinish(false);
        }
    }

    useEffect(() => {
        setCurrentTime(start);
        //setCountdown(true);
        setPlayVideo(false);
        setVideoLoaded(false);
    }, [idVideo]);

    useEffect(() => {
        if (restart) {
            reloadVideo();
        }
    }, [restart])

    const handlePlay = () => {
        setVideoLoaded(true);
    }
    const opts = {
        height: '530px',
        width: '940px',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            start
        },
    };

    const onReady = (event) => {
        let d = event.target.getDuration() - start - end;
        setDuration(d);
        setPlayVideo(true);
    }

    const onStateChange = (event) => {
        let playerState = event.target.getPlayerState();
        if (playerState === 3) {
            setCurrentTime(event.target.getCurrentTime());
        }

    }
    const onPause = (event) => {
        event.target.pauseVideo();
        setCountdown(false);
    }
    const onPlay = (event) => {
        event.target.playVideo();
        setCountdown(true);
    }

    const replayAnimation = {
        show: {
            rotate: [-360, 15, 0],
            scale: [0, 1.1, 1],
            transition: { type: "spring", stiffness: "2000" }
        },
        hide: {
            rotate: -360,
            scale: 0
        },
        hover: {
            backgroundColor: "rgba(128,128,128,1)"
        }
    }

    return (
        <>
            {exercice && (
                <div style={{ display: "flex", width: "100%", alignItems: "center", flexDirection: "column" }}>
                    <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
                        <h1 style={{ display: "flex", flex: "1", justifyContent: "center" }}>{name}</h1>
                        {playVideo &&
                            <Prog
                                nextExercice={nextExercice}
                                finish={finish}
                                setFinish={setFinish}
                                countdown={countdown}
                                currentTime={currentTime}
                                duration={duration}
                                start={start}
                                end={end}
                                style={{ position: "absolute" }}
                            />}
                    </div>
                    <div class="container__video">
                        <div class="container__video__content">

                            <Miniature
                                idVideo={idVideo}
                                playVideo={playVideo}
                                videoLoaded={videoLoaded}
                                name={name}
                                handlePlay={handlePlay}
                            />
                            {videoLoaded &&
                                <>
                                    <div style={{ display: playVideo ? "flex" : "none" }}>
                                        <YouTube
                                            ref={videoRef}
                                            videoId={idVideo}
                                            onReady={onReady}
                                            onStateChange={onStateChange}
                                            opts={opts}
                                            onPause={onPause}
                                            onPlay={onPlay}

                                        />
                                    </div>
                                    {playVideo &&
                                        <motion.div
                                            initial="hide"
                                            animate={finish ? "show" : "hide"}
                                            whileHover="hover"
                                            variants={replayAnimation}
                                            style={{ backgroundColor: "rgba(0,0,128,1)", borderRadius: "50%" }}
                                            className="youtube__button">
                                            <IconButton onClick={reloadVideo}  >
                                                <Replay size="large" style={{ fill: "white" }} />
                                            </IconButton>
                                        </motion.div>
                                    }

                                </>}


                        </div>
                    </div>
                </div>)
            }
        </>


    )
}

export default Video
