import React, { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import Section from "./Section";
import cardData from "./cardData";

function App() {
  const [count, setCounter] = useState(0);
  const handleIncreament = (e) => {
    let index = Number(e.target.id);
    cardData[index].cart = true;
    setCounter(count + 1);
  };

  const handleDecreament = (e) => {
    let index = Number(e.target.id);
    cardData[index].cart = false;
    if (count > 0) setCounter(count - 1);
  };
  const handleReset = () => {
    for (var i = 0; i < cardData.length; i++) {
      cardData[i].cart = false;
    }
    setCounter(0);
  };
  return (
    <>
      <Navigation count={count} handleReset={handleReset} />
      <Header />
      <Section
        handleIncreament={handleIncreament}
        handleDecreament={handleDecreament}
      />
      <Footer />
    </>
  );
}

export default App;