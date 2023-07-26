import { Profile } from "./Profile";

import React from "react";
import { reducerType, thunkDispatch } from "../../redax/store-redux";

import { connect } from "react-redux";
import {
  changeProfileStatusTC,
  getProfileStatusTC,
  getProfileTC,
  setProfile,
} from "../../redax/profile-reducer";
import { changeLoadingStatus } from "../../redax/users-reducer";

import { RouteComponentProps, withRouter } from "react-router-dom";
import { ProfileApiType } from "../../api/api-social";
import { withAuthRedirect } from "../../hoc/authRedirect";
import { compose } from "redux";

export class ProfileContainerApi extends React.Component<ProfilePropsType> {
  componentDidMount() {
    let id = this.props.match.params.userId;

    
    if (id) {
      this.props.getProfileTC(id);
      this.props.getProfileStatus(id);
    } else {
      const myId = this.props.myId;
      if (myId) {
        this.props.getProfileTC(myId.toString());
        this.props.getProfileStatus(myId.toString());
      }
    }
   
  }

  render() {
    return (
      <>
        <Profile  {...this.props} isLoading={this.props.loading} />
      </>
    );
  }
}

export type stateMapType = ReturnType<typeof stateMap>;

export type ProfilePropsType = ReturnType<typeof stateMap> &
  ReturnType<typeof dispatchMap> &
  RouteComponentProps<{ userId: string }> & { auth: boolean };

export const stateMap = (state: reducerType) => {
  return {
    profile: state.postPage.profile,
    loading: state.usersPage.isLoading,
    myId: state.authReducer.id,
    statusProfile:state.postPage.profileStatus
  };
};

export const dispatchMap = (dispatch: thunkDispatch) => {
  return {
    setProfile: (profile: ProfileApiType | null) =>
      dispatch(setProfile(profile)),
    changeLoadingStatus: (loading: boolean) =>
      dispatch(changeLoadingStatus(loading)),
    getProfileTC: (id: string) => dispatch(getProfileTC(id)),
    getProfileStatus: (id: string) => dispatch(getProfileStatusTC(id)),
    changeStatusProfile:(status:string) => dispatch(changeProfileStatusTC(status))
  };
};

export const ProfileContainer = compose(
  connect(stateMap, dispatchMap),
  withRouter,
  withAuthRedirect
)(ProfileContainerApi) as React.ComponentType;
