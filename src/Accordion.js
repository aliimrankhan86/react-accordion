import React, { useState, useRef } from "react";
import Chevron from "./Chevron";

function Accordion(props) {
  const [active, setActive] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const content = useRef(null);
  const [chevron, setChevron] = useState("");

  function toggleAccordion() {
    setActive(active === "" ? "active" : "");
    setHeightState(
      active === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setChevron(active === "active" ? "chevron-down" : "");

    console.log(content.current.scrollHeight);
  }
  return (
    <div>
      <h2 onClick={toggleAccordion} className={`chevron ${active}`}>
        {props.title}
        <Chevron className={`chevron-right ${chevron}`} width="20px" />
      </h2>
      <div
        ref={content}
        className={`accordion-content`}
        style={{ maxHeight: setHeight }}
      >
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
      </div>
    </div>
  );
}

export default Accordion;
