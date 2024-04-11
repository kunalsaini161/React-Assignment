import React, { useState } from "react";

function InputDetails() {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");

  const addingItem = () => {
    if (inputText.trim() !== "") {
      setItems([...items, inputText]);
      setInputText("");
    }
  };

  return (
    <div className="Container">
      <div>
        <h1 className="inputHeading">Input Area</h1>
        <input
          className="inputText"
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text here"
        />
        <button className="addButton" onClick={addingItem}>Add</button>
      </div>
      <ul className="itemsList">
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              backgroundColor: (index + 1) % 5 === 0 ? "blue" : "transparent",
            }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InputDetails;
