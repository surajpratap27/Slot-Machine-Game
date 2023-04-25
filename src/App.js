import React from "react";
import SlotMatch from "./SlotMatch";

const App = () => {
  return (
    <>
      <h1 className="heading_style">🎰 Welcome to <span style={{ fontWeight: "bold" }}> Slot Machine game </span> 🎰</h1>
      <div className="slotMachine">
        <SlotMatch x='😄' y='😄' z='😄' />
        <SlotMatch x='😄' y='🤯' z='😄' />
        <SlotMatch x='😂' y='😒' z='😄' />
        <SlotMatch x='😘' y='😘' z='😘' />
      </div>

    </>
  )
}

export default App;