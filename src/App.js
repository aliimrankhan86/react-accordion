import React, { useState, useRef } from "react";
import "./styles.css";
import Accordion from "./Accordion";

function App() {
  return (
    <div className="App">
      <Accordion
        title="American Hangman"
        content="<p>2 men are chained up in a basement. The captor has cameras aimed at them and is streaming it on the internet - turning it into a trial on the held, retired judge's last court case. The viewers become the jurors</p>"
      />
      <Accordion
        title="American Hangman"
        content="<p>2 men are chained up in a basement. The captor has cameras aimed at them and is streaming it on the internet - turning it into a trial on the held, retired judge's last court case. The viewers become the jurors
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>"
      />
      <Accordion
        title="American Hangman"
        content="<p>2 men are chained up in a basement. The captor has cameras aimed at them and is streaming it on the internet - turning it into a trial on the held, retired judge's last court case. The viewers become the jurors
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
        </p>"
      />
    </div>
  );
}

export default App;
