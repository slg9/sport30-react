import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion"
import "./progress.css";

const Prog = ({ duration, countdown, currentTime, start,nextExercice,finish,setFinish }) => {

    const [goTo, setGoTo] = useState({ active: false, go: start });
    const [timer, setTimer] = useState(duration);
    const getTime = (t) => {
        let min = Math.floor(t / 60);
        let sec = t - (min * 60);

        return { min, sec }
    }
    const controlCountdownAnimation = useAnimation();

    const countDownAnimation = {
        bleep: {
            opacity: [0.8, 1],
            color: "red",
            fontWeight:"bold",
            transition: { opacity: { repeat: Infinity, duration: 1 } }
        },
        anim: {
            scale: [1.01, 1],
            opacity:1,
            color: "white",
            transition: { type: "spring", stiffness: 20 }
        },
        reveal:{
            opacity: [0, 1],
            color: "white",
            transition: { type: "spring", stiffness: 20 }
        }
    }

    useEffect(() => {
        if (!goTo.active) {
            if (countdown) {
                console.log("le fameux timer" + timer);
                if (timer >= 0) {
                    setFinish(false);
                    setTimeout(() => { setTimer(timer - 1) }, 1000)
                }else{
                    setFinish(true);
                    nextExercice && setTimeout(()=>{nextExercice()},500)
                    
                }
                controlCountdownAnimation.stop();
                controlCountdownAnimation.start("anim"); 

            }else{
                console.log("la video est sur pause")
                controlCountdownAnimation.stop();
                controlCountdownAnimation.start("bleep");
            }
        }else{
            controlCountdownAnimation.stop();
            controlCountdownAnimation.start("reveal");
            setTimer(goTo.go-1);
            setTimeout(()=>{ setGoTo(prev=>({...prev,active:false}));},1000)
           
        }

    }, [timer, countdown, goTo]);
    useEffect(() => {

        let time = duration - Math.floor(currentTime) + start;
        console.log("finish equal "+finish+" et timer : "+time+" current time : "+Math.floor(currentTime));
        setGoTo({active:true,go:time});

    }, [currentTime]);




    return (
        <div class="container__progress">
            {!finish ? (
                <motion.span
                animate={controlCountdownAnimation}
                variants={countDownAnimation}
                >
                     {getTime(timer).min < 10 &&`0`}{getTime(timer).min}: {getTime(timer).sec < 10 &&`0`}{getTime(timer).sec}
                </motion.span>
            ) : (
                    <svg version="1.1" viewBox="0 0 100 100" >
                        <motion.path
                            animate={{ pathLength: [0, 1, 1], scale: [0.5, 1, 1.1], rotate: [-10, 5, 0] }}
                            style={{ strokeWidth: "4" }}
                            transition={{ type: "spring", stiffness: 2 }}
                            d="M35 50 l15 15 l15 -30"
                            stroke="white"
                            fill="none"
                        />
                    </svg>
                )}
        </div>
    )

}

export default Prog;