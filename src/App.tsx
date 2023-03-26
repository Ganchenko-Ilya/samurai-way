import React from "react";
import "./App.css";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Header } from "./components/Header/Header";
import { NavBar } from "./components/NavBar/NavBar";

import { Profile } from "./components/Profile/Profile";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="app-wrapper-page">
        <Dialogs />
        <Profile />
      </div>
    </div>
  );
}

export default App;
