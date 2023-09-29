import React from "react";
import ReactDOM from "react-dom/client";



const JSFunctionTitle = () => {
    <h1 id="title">This is the title Section</h1>
}

const ReactElement = (
    <h1>This is the react element used</h1>
)

const HeaderComponent = () => {
    return (
    <div>
        <JSFunctionTitle />
        {ReactElement}
        <h1>THis is the  HeaderComponent</h1>
        <h2>This is the h2 tag</h2>
    </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);