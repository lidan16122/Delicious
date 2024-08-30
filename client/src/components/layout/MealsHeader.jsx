import React from "react";
import MealsNav from "./MealsNav";

const MealsHeader = () => {
    return(
        <>
        <header>
            <MealsNav
                links ={[
                    {route: "/", text: "HOME"},
                    {route: "/meals/recipes", text: "RECIPES"},
                    {route: "/meals/search", text:"SEARCH"},
                    {route: "/meals/profile", text:"UPLOAD MEAL"}
                ]}
             />
        </header>
        </>
    )
}

export default MealsHeader;