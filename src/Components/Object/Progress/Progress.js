import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from "framer-motion"
import './progress.css'
function Progress({ duration, countdown, currentTime, start }) {

    const getTime = (t) => {
        let min = Math.floor(t / 60);
        let sec = t - (min * 60);

        return { min, sec }
    }

    const [pauseTimer, setPauseTimer] = useState(false);

    const { min, sec } = getTime(duration);

    const [timerData, setTimerData] = useState({ minutes: min, secondes: sec, timer: duration })

    const [finish, setFinish] = useState(false);
    
    const controlCountdownAnimation = useAnimation();

    const countDownAnimation = {
        bleep: {
            opacity: [0.3, 1],
            scale: [1.1, 1],
            color: "red",
            transition: { opacity: { repeat: Infinity, duration: 1 } }
        },
        anim: {
            scale: [1.1, 1],
            color: "white",
            opacity: 1,
            transition: { type: "spring", stiffness: 20 }
        }
    }

    const decrement = (t) => {
        if (t - 1 < timerData.timer) {
            setTimeout(() => {
                const { min, sec } = getTime(t);
                setTimerData({ minutes: min, secondes: sec, timer: t - 1 });
                console.log("le timer est : " + min + ":" + sec)
            }, 1000)
        }
    }

    const launch = () => {
        if (!pauseTimer) {
            if (timerData.timer >= 0) {
                decrement(timerData.timer);

            } else {
                setFinish(true);
            }
        }
    }

    useEffect(() => {
        launch();
    }, [timerData.timer])
    useEffect(() => {
        launch();
    }, [])
    useEffect(() => {
        if (!countdown) {
            setPauseTimer(true);
            controlCountdownAnimation.start("bleep");
        } else {
            setPauseTimer(false);
            controlCountdownAnimation.stop();
            controlCountdownAnimation.start("anim");
            decrement(timerData.timer);
        }
    }, [countdown])
    useEffect(() => {

        let time = duration + start - Math.floor(currentTime);
  
        if (timerData.timer !== time) {
            setPauseTimer(true);
            setFinish(false);
            const { min, sec } = getTime(time);
            setTimerData({ minutes: min, secondes: sec, timer: time });
            console.log("timeline change to " + time);
        }


    }, [currentTime])


    return (
        <motion.div class="container__progress" animate={controlCountdownAnimation} variants={countDownAnimation} >
            {!finish ? (
                <motion.span
                    animate={controlCountdownAnimation}
                    variants={countDownAnimation}
                >
                    {`${timerData.minutes}:${timerData.secondes < 10 ? `0` : ``}${timerData.secondes}`}
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
        </motion.div>
    )
}

export default Progress
