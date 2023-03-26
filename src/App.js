import React from "react";
import ReactDOM from "react-dom/client";
import { Title } from "./components/Header";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

//React Element
const heading = (
  <h1 id="title" key="h1">
    Food Villa
  </h1>
);

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
