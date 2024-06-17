import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <h1 id="heading" className="head">
        Namaste React using JSX🚀🚀
    </h1>
);

const HeadingComponent = () =>(

    <div id="container">
        <Title />
        <h1>Namaste React from functional component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
