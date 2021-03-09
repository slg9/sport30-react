import React,{useEffect} from 'react'
import "./video.css"

function Video({name,urlVideo,start}) {
   
    return (
        <div class="container__video">
            
             <h1>{name}</h1>

             <iframe 
                frameborder="0" 
                height="100%" 
                width="100%"
                src={`${urlVideo}?start=${start}`} 
                allowfullscreen="true"
                />

            
            
        
        </div>
    )
}

export default Video
