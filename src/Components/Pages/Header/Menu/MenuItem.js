import React from 'react'
import {ArrowDropDown} from "@material-ui/icons"
import { motion } from "framer-motion"
import {useHistory} from "react-router-dom"
import "./menuItem.css"
function MenuItem({ menuName,setOpenDropDown,openDropDown,dropDown,currentItem}) {
    const history = useHistory();
    const animation={
        "hover":{
            scale:1.2,
            color:"rgba(128,128,128,0.8)",
            transition:{type:"spring",stiffness:80}
        },
        "down":{
            rotate:0
        },
        "up":{
            rotate:180,
        }
    }
    
    const action=()=>{
        setOpenDropDown && setOpenDropDown(!openDropDown);
        if(menuName !== "EXOS"){
            setOpenDropDown && setOpenDropDown(false);
        let location ;
        switch(menuName){
            case "ECHAUFFEMENT":
                location = "/sport/5";
                break;
            case "ETIREMENT":
                location = "/sport/7";
                break;
            case "EXOS":
                location = "/exos";
                break;
            default:
                location = "/";
                break;

        }
        history.push(location);
    }

    }
    return (
        <div className="container__menu__item">
        <motion.div 
            onClick={action}
            variants={animation} 
            whileHover="hover"
            class={menuName === currentItem ?`menu__item__selected`:`menu__item`}
        >
            {menuName}
            {dropDown && 
            
                <motion.div
                    variants={animation}
                    animate={openDropDown?"up":"down"}
                >
                    <ArrowDropDown /> 
                </motion.div>
            }
            
        </motion.div>
        </div>
    )
}

export default MenuItem
