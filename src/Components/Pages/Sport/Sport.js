import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import Background from '../../Object/Background/Background'
import "../Today/today.css"
import Video from "../../Object/Video/Video"
function Sport() {
    const exercices = [
        {
            name: "pectoraux",
            urlVideo: "https://www.youtube.com/embed/2m6FlDwaIhc",
            start: 70,
            urlImg: "https://images.pexels.com/photos/5809900/pexels-photo-5809900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
            name: "bras",
            urlVideo: "https://www.youtube.com/embed/97RT7J7ikpw",
            start: 62,
            urlImg: "https://images.pexels.com/photos/1978505/pexels-photo-1978505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
        ,
        {
            name: "abdos",
            urlVideo: "https://www.youtube.com/embed/3eQa7C6D4XU",
            start: 65,
            urlImg: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
        ,
        {
            name: "epaule & dos",
            urlVideo: "https://www.youtube.com/embed/n4fsXXfU5jY",
            start: 50,
            urlImg: "https://images.pexels.com/photos/2092479/pexels-photo-2092479.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
            name: "jambes",
            urlVideo: "https://www.youtube.com/embed/G2NWfxVM8jg",
            start: 54,
            urlImg: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
        ,
        {
            name: "echauffement",
            urlVideo: "https://www.youtube.com/embed/BrD3prXS-y0",
            start: 44,
            urlImg: "https://images.pexels.com/photos/163403/box-sport-men-training-163403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
        ,
        {
            name: "HIIT",
            urlVideo: "https://www.youtube.com/embed/4QVnGLuIXO8",
            start: 155,
            urlImg: "https://cdn.pixabay.com/photo/2015/07/02/10/23/training-828741_960_720.jpg"
        }
        ,
        {
            name: "Etirement",
            urlVideo: "https://www.youtube.com/embed/1lVKy__VtQw",
            start: 85,
            urlImg: "https://images.pexels.com/photos/2294363/pexels-photo-2294363.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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
    const animation = {
        display: {
            x: "0"
        },
        hide: {
            x: "100%"
        }
    }
    const history = useHistory();
    const control = useAnimation();
    const { sportID } = useParams();
    const [exercicePlaying, setExercicePlaying] = useState(exercices[sportID]);
    useEffect(() => {
        setExercicePlaying(exercices[sportID]);
    }, sportID)
    return (
        <div>
            {exercicePlaying && <Background imageURL="https://images.pexels.com/photos/5809900/pexels-photo-5809900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />}

            <div
                className="container__today"
            >


                <div class="player">

                    {exercicePlaying && <Video name={exercicePlaying.name} urlVideo={exercicePlaying.urlVideo} start={exercicePlaying.start} />}


                </div>

            </div>

        </div>

    )
}

export default Sport
