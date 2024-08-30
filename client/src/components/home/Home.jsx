import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css"

const Home = () => {
    let navigate = useNavigate();
    return(
        <div className="container-fluid" style={{overflow: "hidden"}}>
          <div className="row">
            <div onClick={() => navigate("/cocktails")} className="left-image col-lg-6 col-md-12"><h2 className="home-headline">Cocktails</h2></div>
            <div onClick={() => navigate("/meals")} className="right-image col-lg-6 col-md-12"><h2 className="home-headline">Meals</h2></div>
          </div>
        </div>
    )
}

export default Home;