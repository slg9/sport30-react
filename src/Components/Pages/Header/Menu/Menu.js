import React,{useState,useEffect} from 'react'
import DropDownMenu from './DropDownMenu'
import {motion} from "framer-motion"
import "./menu.css"
import MenuItem from './MenuItem'
import { useHistory } from 'react-router'
function Menu() {    
    const [openDropDown,setOpenDropDown] = useState(false);
    const [currentItem,setCurrentItem]=useState();
    const history= useHistory();
    const animation = {
        open : {
            y:"0",
            transition:{type:"spring",stiffness:35}
        },
        close:{
            y:"-100%",
            transition:{type:"spring",stiffness:50}
        }
    }
    const setLocation = (location)=>{
        switch(location){
            case "/sport/5":
                setCurrentItem("ECHAUFFEMENT");
                break;
            case "/sport/7":
                setCurrentItem("ETIREMENT");
                break;
            case "/sport/1":
                setCurrentItem("1");
                break;
            case "/sport/3":
                setCurrentItem("3");
                break;
            case "/sport/6":
                setCurrentItem("6");
                break;
            case "/sport/4":
                setCurrentItem("4");
                break;
            case "/sport/2":
                setCurrentItem("2");
                break;
            case "/sport/0":
                setCurrentItem("0");
                break;
            default:
                setCurrentItem("TODAY");
                break;
        }
    }
    useEffect(() => {
        history.listen(()=>{
            setLocation(history.location.pathname);
        })
    }, [history.location]);

    useEffect(() => {
        setLocation(history.location.pathname);
    }, [])
    return (
        <div class="container__menu">

            <div class="container__menu__content">

                <MenuItem menuName="TODAY" currentItem={currentItem} setOpenDropDown={setOpenDropDown}/>
                <MenuItem menuName="EXOS" setCurrentItem={setCurrentItem} currentItem={currentItem} openDropDown={openDropDown} setOpenDropDown={setOpenDropDown} dropDown={true}/>
                <MenuItem menuName="ECHAUFFEMENT" currentItem={currentItem} setOpenDropDown={setOpenDropDown} />
                <MenuItem menuName="ETIREMENT" currentItem={currentItem} setOpenDropDown={setOpenDropDown}/>

            </div>
            <motion.div 
                class="container__sub__menu__content"
                initial={{y:"-100%"}}
                variants={animation}
                animate={openDropDown?"open":"close"}
                
            >
                <DropDownMenu currentItem={currentItem} />
            </motion.div>
        </div>
    )
}

export default Menu
