import React, { useState, useEffect } from 'react';
import "./Search.css"

export default function Search() {
  const img = {
    maxHeight: "39rem"
  };
  const hm={
    display: "flex"
  };
  const srch={
    width: "100rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#464646"
  };
  const btn={
    backgroundColor: "#ff7800",
    color: "#000000",
    borderColor: "#ff7800"
  };
  const frm={
    display: "flex",
    justifyContent: "center",
    marginBottom: "100px"
  };
  const textArray = [
    'Hungry?',
    'Late from work?',
    'Need to relax?',
    'Cooking gone wrong?',
    'House party?',
  ];
  const [displayText, setDisplayText] = useState(textArray[0]);
  const [animationClass, setAnimationClass] = useState('scrolling-text');

  const updateText = () => {
    setAnimationClass('scrolling-text-exit');
    setTimeout(() => {
      setDisplayText(textArray[(textArray.indexOf(displayText) + 1) % textArray.length]);
      setAnimationClass('scrolling-text-enter');
    }, 500);
  };

  useEffect(() => {
    const timer = setInterval(updateText, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [displayText]);
  return (
    <div style={hm}>
      <div className="fortune-machine" style={srch}>
        <div className={`fortune-text ${animationClass}`} style={{}}><h1>{displayText}</h1></div>
        <div><h5 style={{"color":"#ff7800", "padding":"0px 60px", "marginBottom":"30px"}}>Order good food from favourite restraunts near you</h5></div>
        <div>
        <form className="form-inline" style={frm}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{"width":"25rem"}}
          />
          <button className="btn my-2 my-sm-0" type="submit" style={btn}>
            Find Food
          </button>
        </form>
        </div>
        <div style={{"marginBottom":"10px", "padding": "0px 60px"}}><h5>POPULAR CITIES IN INDIA</h5></div>
        <div style={{"marginBottom":"10px", "padding": "0px 60px"}}><h7> Delhi  </h7><h7 style={{"color":"#ff7800"}}> Mumbai  </h7><h7> Lucknow  </h7><h7 style={{"color":"#ff7800"}}> Kolkata  </h7><h7> Ahmedabad  </h7><h7 style={{"color":"#ff7800"}}> & more...</h7>
        </div>
      </div>
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq"
        className="d-block w-100"
        alt="..."
        style={img}
      />
    </div>
  );
}
