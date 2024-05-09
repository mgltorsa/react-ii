import React, { useEffect, useRef, useState } from "react";
import LuzComponent from "../components/LuzComponent";

const Luz = () => {
  const [activada, setActivada] = useState(false);
  
  useEffect(() => {
    setActivada(true)
  }, [])

  useEffect(() => {
    
    if(activada){
        alert("Luz activada")
    }
   
  }, [activada, setActivada])
  
  
  return (
    <div>
      <LuzComponent encendida={activada} />
      <button onClick={() => setActivada(!activada)} 
      onKeyDown={(evt) => {
        console.log("evt",evt)
      }}>
        Encender o Apagar
      </button>
    </div>
  );
};

export default Luz;
