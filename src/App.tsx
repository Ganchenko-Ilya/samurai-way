import React from "react";
import {  Route } from "react-router-dom";

import "./App.css";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Header } from "./components/Header/Header";
import { NavBar } from "./components/NavBar/NavBar";

import { Profile } from "./components/Profile/Profile";
import { stateType } from "./redax/state";
type AppTypeProps = {
  state:stateType

}

function App( props: AppTypeProps) {
  return (
    
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="app-wrapper-page">
        <Route path='/Profile' render={() => <Profile post={props.state.postPage}/>}/>
        <Route path='/Dialogs' render={() => <Dialogs dialogs={props.state.dialogsPage}  />}/>
        
      </div>
    </div>
    
  );
}

export default App;
