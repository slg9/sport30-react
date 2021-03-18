import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import axios from "axios";
import Background from '../../Object/Background/Background'
import ProgressBar from '../../Object/ProgressBar/ProgressBar';
import "./session.css"
import Video from "../../Object/Video/Video"
import ReloadButton from '../../Object/ReloadButton/ReloadButton';
import NextButton from '../../Object/NextButton/NextButton';
import env from "react-dotenv"
function Session() {
    const [exercices, setExercices] = useState([]);
    const [restart, setRestart] = useState(false);
    const [indexEx, setIndexEx] = useState(0);
    const [progression, setProgression] = useState("0");


    useEffect(() => {
        (async () => {
            let exerciceForToday = await axios(`${env.API_URL}/exercice/days/today`);
            setExercices(exerciceForToday.data.exercice);
        })()

    }, []);

    const nextExercice = () => {
        let max = exercices.length - 1;
        setIndexEx(indexEx === max ? max : indexEx + 1);
        let pourcentage = Math.floor((indexEx + 1) * 50 / (max + 1));
        setProgression(pourcentage);

    }
    const restartExercices = () => {
        setRestart(true);
        setIndexEx(0);
        setProgression(0);
    }

    const animation = {
        y: [100, -10, 0], 
        scale: [0, 1, 0.9]
    }

    return (
        <div>
            <Background imageURL="https://images.pexels.com/photos/5809900/pexels-photo-5809900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            {exercices[indexEx] &&
                <div className="container__today">

                    <motion.div animate={animation} class="player">
                        <div class="action__zone">
                            <ReloadButton restartExercices={restartExercices} progression={progression} />
                        </div>
                        <div class="video__zone">

                            <Video
                                nextExercice={nextExercice}
                                key={indexEx}
                                exercice={exercices[indexEx]}
                                name={exercices[indexEx].name}
                                idVideo={exercices[indexEx].idVideo}
                                start={exercices[indexEx].start}
                                restart={restart}
                                setRestart={setRestart}
                                end={exercices[indexEx].end} />

                        </div>
                        <div class="action__zone">

                            <NextButton nextExercice={nextExercice} />

                        </div>

                    </motion.div>
                    <ProgressBar progression={progression} />




                </div>
            }
        </div>

    )
}

export default Session
