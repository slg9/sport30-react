import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import './progress.css'
function Progress({ duration, countdown,currentTime,start }) {

    const getTime = (t) => {
        let min = Math.floor(t / 60);
        let sec = t - (min * 60);

        return { min, sec }
    }
    const [pauseTimer, setPauseTimer] = useState(false);
    const [timer, setTimer] = useState(duration);
    const { min, sec } = getTime(duration);
    const [minutes, setMinutes] = useState(min);
    const [secondes, setSecondes] = useState(sec);
    const [finish, setFinish] = useState(false);

    const decrement = ()=>{
        setTimeout(() => {
            setTimer(timer - 1);
            const { min, sec } = getTime(timer);
            setMinutes(min);
            setSecondes(sec);
        }, 1000)
    }

    const launch = () => {
        if (!pauseTimer) {
            if (timer >= 0) {
                decrement();

            } else {
                setFinish(true);
            }
        }
    }

    useEffect(() => {
        launch();
    }, [timer])
    useEffect(() => {
        launch();
    }, [])
    useEffect(() => {
        if (!countdown) {
            setPauseTimer(true)
        } else {
            setPauseTimer(false);
            decrement();
        }
    }, [countdown])
    useEffect(() => {
        setPauseTimer(true)
        setTimer(duration+start-Math.floor(currentTime));
        setPauseTimer(false);
        decrement();
        console.log("timeline change");
    }, [currentTime])


    return (
        <motion.div class="container__progress">
            {!finish ? (
                <motion.span animate={{ opacity: [0.3, 1] }} transition={{ repeat: Infinity, duration: 1 }} >{`${minutes}:${secondes < 10 ? `0` : ``}${secondes}`}</motion.span>
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
