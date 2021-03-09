import React,{useState} from 'react'
import {ArrowDropDown} from "@material-ui/icons"
import { motion } from "framer-motion"
import "./menuItem.css"
import DropDownMenu from './DropDownMenu'
function MenuItem({ menuName ,dropDown}) {
    const hoverAnimation = {
        animation: { color: 1.2 },
        transition: { stiffness: 2 }
    }
    const [openDropDown,setOpenDropDown] = useState(false);
    
    return (
        <div className="container__menu__item">
        <motion.div whileHover={hoverAnimation.animation} transition={hoverAnimation.transition} class="menu__item">
            {menuName}
            {dropDown && <ArrowDropDown onClick={()=>{setOpenDropDown(!openDropDown)}}/> }
            
        </motion.div>
        {openDropDown && <DropDownMenu className="container__drop"/> }
        </div>
    )
}

export default MenuItem
