import React from "react";
import { reducerType } from "../redax/store-redux";
import { connect } from "react-redux";

import { Redirect } from "react-router-dom";

const stateMap = (state: reducerType) => {
  return {
    auth: state.authReducer.authLogin,
  };
};
type stateMap = ReturnType<typeof stateMap>;

export function withAuthRedirect<A extends object>(
  Component: React.ComponentType<A>
) {
  function AuthWrapperHoc(props: stateMap) {
    
    
    const { auth, ...restProps } = props;
    if (auth) return <Component  {...(restProps as A)} />;
    return <Redirect to="/Login" />;
  }

  return connect(stateMap)(AuthWrapperHoc);
}
