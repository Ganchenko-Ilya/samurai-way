import React from "react";
import { NavLink } from "react-router-dom";
import s from './NavBar.module.css'




export const  NavBar = () => {


    return (
        <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to="/Profile"  activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
        <NavLink to="/Dialogs" activeClassName={s.active} >Dialogs</NavLink>
        </div>
        <div className={s.item}>
        <NavLink to="/Users" activeClassName={s.active} >Users</NavLink>
        </div>
        <div className={s.item}>
          <a>News</a>
        </div>
        <div className={s.item}>
          <a>Music</a>
        </div>

        <div className={s.item}>
          <a>Settings</a>
        </div>
      </nav>
    )

}