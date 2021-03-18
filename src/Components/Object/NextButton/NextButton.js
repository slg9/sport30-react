import React from "react";
import {motion} from "framer-motion";

const NextButton = ({nextExercice}) => {
    return (
        <motion.svg
            onClick={nextExercice}
            style={{ cursor: "pointer" }}
            height="50px"
            version="1.1"
            viewBox="0 0 68 48"
            width="100%"
            whileTap={{ scale: 1.1 }}

        >
            <motion.path whileHover={{ fill: "rgba(128,128,128,1)" }} d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="rgba(0,0,128,1)"></motion.path>
            <line x1="40%" x2="60%" y1="30%" y2="53%" style={{ stroke: "white", strokeWidth: 5 }} ></line>
            <line x1="40%" x2="60%" y1="70%" y2="47%" style={{ stroke: "white", strokeWidth: 5 }} ></line>

        </motion.svg>
    )
}
export default NextButton;