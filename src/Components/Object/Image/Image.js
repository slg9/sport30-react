import React,{useState, useRef} from "react";
import "./image.css"

const Image =({urlImg})=>{
    const [loadingImage,setLoadingImage] = useState(true);
    const imgRef = useRef();

    const handleLoading =(event)=>{
        event.target.src=urlImg;
       setLoadingImage(false);
    }
    return(
        <img  onLoad={handleLoading} src="https://cdn.pixabay.com/photo/2016/05/08/14/22/batteries-1379208_960_720.png" style={{display:loadingImage?"none":"flex"}} />
    )
}

export default Image;