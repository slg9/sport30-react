import React,{useEffect} from 'react';
import {motion} from 'framer-motion';
import {useHistory} from "react-router-dom"
import "./dropDownMenu.css"
import { GolfCourse } from '@material-ui/icons';
function DropDownMenu({currentItem}) {
    const history = useHistory();
    const animation={
        "hover":{
            scale:1.1,
            color:"black",
            backgroundColor:"white",
            transition:{type:"spring",stiffness:50}
        }
    }

    const goTo =(sportID)=>{
        history.push(`/sport/${sportID}`);
        console.log("goTo: "+sportID);
    }
  
    
    return (
        <div 
            class="container__drop__down"
            
        >
            <motion.div variants={animation} whileHover="hover" onClick={()=>{goTo(1)}} class={currentItem === "1" ?`drop__down__field__selected`:`drop__down__field`}>
                BRAS 
            </motion.div>
            <motion.div variants={animation} whileHover="hover" onClick={()=>{goTo(4)}} class={currentItem === "4" ?`drop__down__field__selected`:`drop__down__field`}>
                JAMBES
            </motion.div>
            <motion.div variants={animation} whileHover="hover" onClick={()=>{goTo(2)}} class={currentItem === "2" ?`drop__down__field__selected`:`drop__down__field`}>
                ABDOS
            </motion.div>
            <motion.div variants={animation} whileHover="hover" onClick={()=>{goTo(0)}} class={currentItem === "0" ?`drop__down__field__selected`:`drop__down__field`}>
                PECTORAUX
            </motion.div>
            <motion.div variants={animation} whileHover="hover" onClick={()=>{goTo(3)}} class={currentItem === "3" ?`drop__down__field__selected`:`drop__down__field`}>
                EPAULE & DOS
            </motion.div>
            <motion.div variants={animation} whileHover="hover" onClick={()=>{goTo(6)}} class={currentItem === "6" ?`drop__down__field__selected`:`drop__down__field`}>
                HIIT
            </motion.div>
        </div>
    )
}

export default DropDownMenu
