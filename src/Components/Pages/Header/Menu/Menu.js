import React from 'react'
import "./menu.css"
import MenuItem from './MenuItem'
function Menu() {
    
    return (
        <div class="container__menu">

            <div class="container__menu__content">

                <MenuItem menuName="TODAY" />
                <MenuItem menuName="EXOS" dropDown={true}/>
                <MenuItem menuName="ECHAUFFEMENT" />
                <MenuItem menuName="ETIREMENT" />

            </div>
        </div>
    )
}

export default Menu
