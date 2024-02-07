import React from "react";
import "../../styles/home.css"

const Home = () => {
    return(
        <>
        <div className="container-fluid" style={{overflow: "hidden"}}>
          <div className="row">
            <div className="left-image col-lg-6 col-md-12"><h2 className="home-headline">Cocktails</h2></div>
            <div className="right-image col-lg-6 col-md-12"><h2 className="home-headline">Cooking</h2></div>
          </div>
        </div>
        </>
    )
}

export default Home;