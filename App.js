 import React from "react";
 import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
 import Home from "./component/Home";
 import Menu from "./component/Menu";
import Pnf from "./component/Pnf";
import Track from './component/Track'
 

 
function App() {
  return (
    <div>
     <Router>
     <Menu/>
      <ToastContainer autoClose={5000} position={"top-right"}/>
      <Routes>
          <Route path={`/`} element={<Home/>}/>
          <Route path={`/home`} element={<Home/>}/>
          <Route path={`/tracks/:id`} element={<Track/>}/>
          <Route path={`/*`} element={<Pnf/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
