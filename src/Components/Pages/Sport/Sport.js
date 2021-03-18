import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"
import Background from '../../Object/Background/Background'
import "../Session/session.css"
import Video from "../../Object/Video/Video"
import env from "react-dotenv"
function Sport() {
    const [restart,setRestart] = useState(false);
    const { sportID } = useParams();
    const [exercice, setExercice] = useState();
    useEffect(() => {
        (async()=>{
            let exercice = await axios (`${env.API_URL}/exercice/${sportID}`);
            setExercice(exercice.data);
        })()
    }, [sportID])
    return (
        <div>
            <Background imageURL="https://images.pexels.com/photos/5809900/pexels-photo-5809900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <div className="container__today" >
                <div class="player">
                    {exercice && 
                        <Video 
                            exercice={exercice}
                            restart={restart}
                            setRestart={setRestart}
                        />
                    }
                </div>
            </div>
        </div>
    )
}

export default Sport
