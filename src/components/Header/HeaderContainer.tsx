import React from "react";

import { Header } from "./Header";
import { connect } from "react-redux";

import { reducerType, thunkDispatch } from "../../redax/store-redux";
import {
  authLoginOutTC,
  authStateTC,
  setAuthState,
} from "../../redax/auth-reducer";

export class HeaderContainerApi extends React.Component<HeaderContainerApiPropsType> {
  componentDidMount() {
    // this.props.authStateTC();
  }

  render() {
    return (
      <Header
        logOutHandler={() => this.props.authLoginOutTC()}
        authState={this.props.authState}
      />
    );
  }
}

export type HeaderContainerApiPropsType = ReturnType<typeof mapState> &
  ReturnType<typeof dispatchMap>;
const dispatchMap = (dispatch: thunkDispatch) => {
  return {
    setAuthState: (id: number, email: string, login: string) =>
      dispatch(setAuthState(id, email, login)),
    authStateTC: () => dispatch(authStateTC()),
    authLoginOutTC: () => dispatch(authLoginOutTC()),
  };
};
const mapState = (state: reducerType) => {
  return {
    authState: state.authReducer,
  };
};

export const HeaderContainer = connect(
  mapState,
  dispatchMap
)(HeaderContainerApi);
