import { Redirect, Route, Switch } from "react-router-dom";

import "./App.css";

import { NavBar } from "./components/NavBar/NavBar";

import { DialogsContainer } from "./components/Dialogs/Dialogst-Container";
import { UsersContainer } from "./components/Users/UsersContainer";
import { ProfileContainer } from "./components/Profile/ProfileContainer";
import { HeaderContainer } from "./components/Header/HeaderContainer";
import { FormDataType, Login, LoginForm } from "./components/Login/Login";
import { connect } from "react-redux";
import { reducerType, thunkDispatch } from "./redax/store-redux";
import { useEffect } from "react";
import { authLogInTC, authStateTC } from "./redax/auth-reducer";
import { Loader } from "./other/addComponents/Loader/Loader";


function App(props: propsAppType) {
  console.log("render App");

  useEffect(() => {
    props.authStateTC();
  }, []);
  if (!props.loaderApp) {
    return <Loader />;
  }
  const submit = (value: FormDataType) => {
    props.authLogInTC(value);
  };

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <NavBar />
      <div className="app-wrapper-page">
        <Switch>
          <Route path="/Profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/Dialogs" render={() => <DialogsContainer />} />

          <Route path="/Users" render={() => <UsersContainer />} />

          <Route
            path="/Login"
            render={() =>
              props.auth ? (
                <Redirect to="Profile" />
              ) : (
                <LoginForm onSubmit={submit} />
              )
            }
          />
          <Redirect to="/Profile" />
        </Switch>
      </div>
    </div>
  );
}

const stateMap = (state: reducerType) => {
  return {
    loaderApp: state.appReducer.loader,
    auth: state.authReducer.authLogin,
  };
};
const dispatchMap = (dispatch: thunkDispatch) => {
  return {
    authStateTC: () => dispatch(authStateTC()),
    authLogInTC: (value: FormDataType) => dispatch(authLogInTC(value)),
  };
};

type stateMapType = ReturnType<typeof stateMap>;
type dispatchMapType = ReturnType<typeof dispatchMap>;
type propsAppType = stateMapType & dispatchMapType;

export default connect(stateMap, dispatchMap)(App);
