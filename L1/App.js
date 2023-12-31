import React from "react";
import ReactDOM from "react-dom/client";

/* React code*/
const root = ReactDOM.createRoot(document.getElementById('root'));


const elem = <h1>Hey I am react element</h1>

const Title = () => <h2>{elem} Functional component 2 title</h2>
const Heading = () => <h1> {Title()} Hello Functional Component</h1>;

root.render(<Heading />);