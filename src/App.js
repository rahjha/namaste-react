import React,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

//Chunking
//Code splitting
//Dynamic bunding
//lazy loading
//on demand loading

const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = () =>{

  const [userInfo, setUserInfo] = useState();

  useEffect(()=>{
    //Make an API call and send userName
    const data = {
      name : "Rahul Jha"
    }
    setUserInfo(data.name);
  },[])

    return(
      <UserContext.Provider value={{ loggedInUser : userInfo, setUserInfo }}>
        <div className="app">
            <Header />
            <Outlet />
        </div>
      </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
  {
    path : "/",   
    element : <AppLayout/>,
    children :[
      {
        path : "/",
        element : <Body />
      },
      {
        path : "/contact",
        element : <Contact />
      },
      {
        path : "/about",
        element : <About />
      },
      {
        path : "/restaurants/:resId",
        element : <RestaurantMenu />
      },
      {
        path : "/grocery",
        element : <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>
      }
    ],
    errorElement : <Error />
  }
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
