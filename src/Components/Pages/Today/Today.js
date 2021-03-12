import React, { useState, useEffect } from 'react'
import { motion ,useAnimation} from "framer-motion"
import Background from '../../Object/Background/Background'
import "./today.css"
import Video from "../../Object/Video/Video"
function Today() {
    const exercices = [
        {
            id:0,
            name: "pectoraux",
            idVideo: "2m6FlDwaIhc",
            start: 70,
            urlImg: "https://images.pexels.com/photos/5809900/pexels-photo-5809900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            duration:480
        },
        {
            id:1,
            name: "bras",
            idVideo: "97RT7J7ikpw",
            start: 62,
            urlImg: "https://images.pexels.com/photos/1978505/pexels-photo-1978505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            duration:660
        }
        ,
        {
            id:2,
            name: "abdos",
            idVideo: "3eQa7C6D4XU",
            start: 65,
            urlImg: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            duration:480
        }
        ,
        {
            id:3,
            name: "epaule & dos",
            idVideo: "n4fsXXfU5jY",
            start: 50,
            urlImg: "https://images.pexels.com/photos/2092479/pexels-photo-2092479.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            duration:660
        },
        {
            id:4,
            name: "jambes",
            idVideo: "G2NWfxVM8jg",
            start: 54,
            urlImg: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            duration:720
        }
        ,
        {
            id:5,
            name: "echauffement",
            idVideo: "BrD3prXS-y0",
            start: 44,
            urlImg: "https://images.pexels.com/photos/163403/box-sport-men-training-163403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            duration:350
        }
        ,
        {
            id:6,
            name: "HIIT",
            idVideo: "4QVnGLuIXO8",
            start: 155,
            urlImg: "https://cdn.pixabay.com/photo/2015/07/02/10/23/training-828741_960_720.jpg",
            duration:1080
        }
        ,
        {
            id:7,
            name: "Etirement",
            idVideo: "1lVKy__VtQw",
            start: 85,
            urlImg: "https://images.pexels.com/photos/2294363/pexels-photo-2294363.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            duration:450
        }
    ]
    const days = [
        {
            day: "lundi",
            exercice: [5, 0, 1, 2]
        },
        {
            day: "mardi",
            exercice: [5, 3, 2, 4]
        },
        {
            day: "mercredi",
            exercice: [7]
        }
        ,
        {
            day: "jeudi",
            exercice: [5, 0, 0]
        }
        ,
        {
            day: "Vendredi",
            exercice: [5, 2, 3, 6]
        }


    ]
    const [currentDay, setCurrentDay] = useState(undefined);
    const [currentExercices, setCurrentExercices] = useState([]);
    const [indexEx, setIndexEx] = useState(0);
    const [exercicePlaying, setExercicePlaying] = useState({});
    const control = useAnimation();
    useEffect(() => {
        const dayNum = new Date().getDay() - 1;
        console.log(dayNum);
        let idVideo = days[dayNum].exercice[0];
        console.log(exercices[idVideo]);
        setCurrentDay(days[dayNum].day);
        setCurrentExercices(days[dayNum].exercice);
        setExercicePlaying(exercices[idVideo]);
        console.log(exercicePlaying)

    }, []);

    useEffect(() => {
        setExercicePlaying(exercices[currentExercices[indexEx]]);
        control.start({scale:[0,1.1,1]});
    }, [indexEx, currentExercices])

    const nextExercice = () => {
        let max = currentExercices.length - 1;
        setIndexEx(indexEx === max ? 0 : indexEx + 1);
    }
    const prevExercice = () => {
        let max = currentExercices.length - 1;
        setIndexEx(indexEx === 0 ? max : indexEx - 1);
    }

    return (
        <div>
            <Background imageURL="https://images.pexels.com/photos/5809900/pexels-photo-5809900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <div className="container__today">
                <motion.h1 animate={{ y: [-100, 10, 0] }}>Voici les excercices du {currentDay}</motion.h1>
                <motion.div animate={{ y: [100, -10, 0], scale: [0, 1, 0.9] }} class="player">
                    <div class="action__zone">
                        <motion.svg
                            onClick={prevExercice}
                            style={{ cursor:"pointer",visibility: indexEx > 0 ? "visible" : "hidden" }}
                            height="50px"
                            version="1.1"
                            viewBox="0 0 68 48"
                            width="100%"

                            whileTap={{ scale: 1.1 }}

                        >
                            <motion.path whileHover={{ fill: "gray" }} d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="rgba(0,0,128,1)"></motion.path>
                            <line x2="40%" x1="60%" y1="30%" y2="53%" style={{ stroke: "white", strokeWidth: 5 }} ></line>
                            <line x2="40%" x1="60%" y1="70%" y2="47%" style={{ stroke: "white", strokeWidth: 5 }} ></line>

                        </motion.svg>
                    </div>
                    <div class="video__zone">
                        {exercicePlaying && <motion.div animate={control}><Video key={indexEx} name={exercicePlaying.name} idVideo={exercicePlaying.idVideo} start={exercicePlaying.start} duration={exercicePlaying.duration}/></motion.div>}
                    </div>
                    <div class="action__zone">

                        <motion.svg
                            onClick={nextExercice}
                            style={{ cursor:"pointer",visibility: indexEx < currentExercices.length - 1 ? "visible" : "hidden" }}
                            height="50px"
                            version="1.1"
                            viewBox="0 0 68 48"
                            width="100%"

                            whileTap={{ scale: 1.1 }}

                        >
                            <motion.path whileHover={{ fill: "gray" }} d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="rgba(0,0,128,1)"></motion.path>
                            <line x1="40%" x2="60%" y1="30%" y2="53%" style={{ stroke: "white", strokeWidth: 5 }} ></line>
                            <line x1="40%" x2="60%" y1="70%" y2="47%" style={{ stroke: "white", strokeWidth: 5 }} ></line>

                        </motion.svg>

                    </div>

                </motion.div>

            </div>
        </div>

    )
}

export default Today
