import React from "react";
import CocktailsNav from "./CocktailsNav";

const CocktailsHeader = () => {
    return(
        <>
        <header>
            <CocktailsNav
                links ={[
                    {route: "/", text: "HOME"},
                    {route: "/cocktails/recipes", text: "DRINKS"},
                    {route: "/cocktails/search", text:"SEARCH"},
                    {route: "/cocktails/profile", text:"UPLOAD DRINK"}
                ]}
             />
        </header>
        </>
    )
}

export default CocktailsHeader;