import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => React Element => js Object => HTML Element(render)
let heading = React.createElement(
  "h1",
  { id: "head", xyz: "abc" },
  "Hi! I am H1."
);

// JSX is transpiled before it reaches the JS via PARCEL -> BABEL
//JSX => React.createElement => React Element => js Object => HTML Element(render) ---> Handled by Babel(a JS compiler)
const jsxHeading = <h1> Namaste React using JSX 🐱‍🏍 </h1>; // for single line it's valid JSX
//If U have multiple line it is mandetory is to wrap with parenthesis

// React Components
//  There are two types of components in react -->
// I> Class Based Components --> Old
// II> Functional Based Components --> New

//  React Functional Component ==> a js function which returning some JSX or React Element is Functional Component
//  i) You need to name the function 1st Letter Capital

const Title = () => <h1>🧨 Namaste React 🧨</h1>;

// valid syntaxes
const HeadingComponent3 = () => <h1>Namaste React Functional Component</h1>;
const HeadingComponent = () => {
  return <h1>Namaste React Functional Component</h1>;
};

// Componenet Composition ==> Rendering a component inside of a component
const HeadingComponent2 = () => (
  <div id="container">
    <h2>{jsxHeading}</h2>
    <Title />
    <h1 className="heading">🚀🚀 Namaste React Functional Component 💕🏹</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);
