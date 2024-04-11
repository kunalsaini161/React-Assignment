import React, { useState } from "react";
import "./style.css"

function DisplayDetails() {
  const [showDetails, setShowDetails] = useState(false);
  const [clickCount, changeClickCount] = useState(0);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
    changeClickCount(clickCount + 1);
    console.log( clickCount + 1);
  };

  return (
    <div className="Container">
      <button onClick={toggleDetails} className="DisplayButton">
        {showDetails ? "Hide Details" : "Display Details"}
      </button>
      <p className="ButtonClicks">Number of Button Clicks: {clickCount}</p>
      {showDetails && <p className="Paragraph">HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page. HTML provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes, and other items. HTML elements are delineated by tags, written using angle brackets.</p>}
    </div>
  );
}

export default DisplayDetails;
