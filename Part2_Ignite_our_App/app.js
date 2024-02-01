import React from "react";
import ReactDOM from "react-dom/client";

/* 
complex html structure.
<div id="parent">
    <div id="child1">
        <h1> Hi! I am H1. </h1>
        <h2> Hi! I am H2. </h2>
    </div>
    <div id="child2">
        <h1> Hi! I am H1. </h1>
        <h2> Hi! I am H2. </h2>
    </div>
</div>

*/

let structure = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hi! I am H1."),
    React.createElement("h2", {}, "Hi! I am H2."),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hi! I am H1."),
    React.createElement("h2", {}, "Hi! I am H2."),
  ]),
]);

let heading = React.createElement(
  "h1",
  { id: "head", xyz: "abc" },
  "Hi! I am H1."
); // this is making an react element which is actually is an JavaScript object.

let root = ReactDOM.createRoot(document.getElementById("root")); // taking the reference of Root(HTML) making ReactDomRoot

root.render(structure); // rendering the 'heading' imside of root and if any other elements previously is in the root, it will be replaced by this heading.
