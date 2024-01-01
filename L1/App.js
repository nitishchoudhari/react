import React from "react";
import ReactDOM from "react-dom/client";

/* React code*/
const root = ReactDOM.createRoot(document.getElementById('root'));

const heading = <h1>Hello this is react Element</h1>;

const Title = () => (<> <h1>This is React Component </h1> {heading} </>)

root.render(<Title />)
