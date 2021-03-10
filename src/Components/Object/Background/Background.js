import React from 'react'
import "./background.css"
function Background({imageURL}) {
    return (
        <div 
            class="background__container" 
            style={
                {
                    background:`url(${imageURL})`,
                    backgroundSize:'cover',
                    backgroundPositionY:'center',
                    backgroundRepeat:'no-repeat',
                    backgroundAttachment:'fixed'
                }
            }
        >
            <div class="background__opacity">
            </div>

        </div>
    )
}

export default Background
