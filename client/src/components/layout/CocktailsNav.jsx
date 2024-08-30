import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/layout.css"

const CocktailsNav = ({links}) => {
    return(
        <>
            <ul className="cocktails-nav">
                    {links.map((l, i) =>{
                        return (
                                <NavLink
                                key={i}
                                to={l.route}
                                className={({ isActive }) => (isActive ? "is-active-cocktail-nav" : "")}
                                >
                                    {l.text}
                                </NavLink>
                        )
                    })}
            </ul>
        </>
    )
}

export default CocktailsNav;