import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
  <h1 id="title" key="h1">
    Namaste React
  </h1>
);

const Title = () => {
  return <h1>This is title</h1>;
};
const xyz = 10;
const HeaderComponent = () => {
  return (
    <div>
      {xyz}
      <Title />
      {heading}
      <h1>Namaste React Functional Component</h1>
      <h2>This is h2 tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
