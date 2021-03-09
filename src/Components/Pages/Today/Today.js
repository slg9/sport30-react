import React,{useState,useEffect} from 'react'
import Background from '../../Object/Background/Background'
import "./today.css"
import Video from "../../Object/Video/Video"
function Today() {
    const exercices = [
        {
            name: "pectoraux",
            urlVideo: "https://www.youtube.com/embed/2m6FlDwaIhc",
            start: 70,
            urlImg:"https://images.pexels.com/photos/5809900/pexels-photo-5809900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
            name: "bras",
            urlVideo: "https://www.youtube.com/embed/97RT7J7ikpw",
            start: 62
        }
        ,
        {
            name: "abdos",
            urlVideo: "https://www.youtube.com/embed/3eQa7C6D4XU",
            start: 65
        }
        ,
        {
            name: "epaule & dos",
            urlVideo: "https://www.youtube.com/embed/n4fsXXfU5jY",
            start: 50
        },
        {
            name: "jambes",
            urlVideo: "https://www.youtube.com/embed/G2NWfxVM8jg",
            start: 54
        }
        ,
        {
            name: "echauffement",
            urlVideo: "https://www.youtube.com/embed/BrD3prXS-y0",
            start: 44
        }
        ,
        {
            name: "HIIT",
            urlVideo: "https://www.youtube.com/embed/4QVnGLuIXO8",
            start: 155
        }
        ,
        {
            name: "Etirement",
            urlVideo: "https://www.youtube.com/embed/1lVKy__VtQw",
            start: 85
        }
    ]
    const days = [
        { 
            day: "lundi", 
            exercice: [5,0,1,2] 
        },
        { 
            day: "mardi", 
            exercice: [5,3,2,4] 
        },
        { 
            day: "mercredi", 
            exercice: [7] 
        }
        ,
        { 
            day: "jeudi", 
            exercice: [5,0,0] 
        }
        ,
        { 
            day: "Vendredi", 
            exercice: [5,2,3,6] 
        }
        

    ]
    const [currentDay,setCurrentDay] = useState(undefined);
    const [currentExercices,setCurrentExercices] = useState([]);
    const [indexEx,setIndexEx]=useState(0);
    const [exercicePlaying,setExercicePlaying]=useState({});
    useEffect(()=>{
        const dayNum = new Date().getDay()-1;
        console.log(dayNum);
        let idVideo = days[dayNum].exercice[0];
        console.log(exercices[idVideo]);
        setCurrentDay(days[dayNum].day);
        setCurrentExercices(days[dayNum].exercice);
        setExercicePlaying(exercices[idVideo]);
        console.log(exercicePlaying)
        
    },[]);

    useEffect(()=>{
        setExercicePlaying(exercices[currentExercices[indexEx]]);
    },[indexEx,currentExercices])

    const nextExercice = ()=>{
        let max = currentExercices.length-1;
        setIndexEx(indexEx == max ?0:indexEx+1);
    }
    const prevExercice = ()=>{
        let max = currentExercices.length-1;
        setIndexEx(indexEx == 0 ?max:indexEx-1);
    }
    
    return (
        <div>
            <Background imageURL="https://images.pexels.com/photos/5809900/pexels-photo-5809900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        <div className="container__today">
            <h1>Voici les excercices du {currentDay}</h1>
                <div class="player">
                    <div class="action__zone">
                        <button style={{visibility:indexEx > 0?"visible":"hidden"}} onClick={prevExercice}>PREV</button>
                    </div>
                    <div class="video__zone">
                    {exercicePlaying && <Video key={indexEx} name={exercicePlaying.name} urlVideo={exercicePlaying.urlVideo} start={exercicePlaying.start} /> }
                    </div>
                    <div class="action__zone">
                        <button 
                            style={{visibility:indexEx < currentExercices.length -1?"visible":"hidden"}}  
                            onClick={nextExercice}
                        >NEXT
                        </button>
                        
                    </div>

                </div>
                
        </div>
        </div>

    )
}

export default Today
