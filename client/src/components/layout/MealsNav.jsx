import React from "react";
import { NavLink } from "react-router-dom";

const MealsNav = ({links}) => {
    return(
        <ul className="meals-nav">
            {links.map((l, i) =>{
                return (
                    <NavLink
                    key={i}
                    to={l.route}
                    className={({ isActive }) => (isActive ? "is-active-meals-nav" : "")}
                    >
                        {l.text}
                    </NavLink>
                )
            })}
        </ul>
    )
}

export default MealsNav;