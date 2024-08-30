import React, { useState, useEffect, useRef } from "react";
import {Routes, Route, useLocation} from "react-router-dom";
import Home from "./components/home/Home";
import "./styles/home.css";
import CocktailsHome from "./components/home/CocktailsHome";
import CocktailsHeader from "./components/layout/CocktailsHeader";
import MealsHome from "./components/home/MealsHome";
import MealsHeader from "./components/layout/MealsHeader";

function App() {
  const location = useLocation();
  const [showCocktailsHeader, setShowCocktailsHeader] = useState(false);
  const [showMealsHeader, setShowMealsHeader] = useState(false);

  useEffect(() => {
    setShowCocktailsHeader(location.pathname.includes("/cocktails"));
    setShowMealsHeader(location.pathname.includes("/meals"));
  }, [location.pathname]);

  return (
    <>
      {showCocktailsHeader && <CocktailsHeader />}
      {showMealsHeader && <MealsHeader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cocktails" element={<CocktailsHome />} />
        <Route path="meals" element={<MealsHome />} />
      </Routes>
    </>
  );
}

export default App;
