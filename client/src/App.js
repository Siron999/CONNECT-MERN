import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Layouts/Header";
import PostsDisplay from "./components/Pages/PostsDisplay";
import Register from "./components/Auth/Register";
import Login from './components/Auth/Login';


import "./App.css";




function App() {




  return (
    
      <BrowserRouter>
       
       
          <Header />
          <div className="container1">
          <Switch>
              
              <Route exact path="/" component={PostsDisplay} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
            </Switch>
            </div>
     
      </BrowserRouter>
      
  );
}


export default App;