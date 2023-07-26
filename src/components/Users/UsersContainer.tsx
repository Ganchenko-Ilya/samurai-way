import { connect } from "react-redux";
import { Dispatch, compose } from "redux";
import React, { ComponentType } from "react";
import { reducerType, thunkDispatch } from "../../redax/store-redux";

import { Users } from "./Users";
import { Loader } from "../../other/addComponents/Loader/Loader";

import {
  changeFollowUsers,
  changeFollowUsersTC,
  changeLoadingStatus,
  pageChange,
  setUserTC,
  userStatusFollow,
} from "../../redax/users-reducer";
import { StatusFollowingType } from "../../api/api-social";
import { withAuthRedirect } from "../../hoc/authRedirect";

////////////////////////////////////////////////////////////

///////////Type
export type dispatchMapType = ReturnType<typeof dispatchObj>;
export type UserPropsType = stateMapType & dispatchMapType;
export type stateMapType = ReturnType<typeof stateMap>;
//////////////////////////////

///////////////PROPS
const stateMap = (state: reducerType) => {
  return {
    users: state.usersPage.items,
    totalCount: state.usersPage.totalCount,
    pageSize: state.usersPage.pageSize,
    pageFocus: state.usersPage.pageFocus,
    isLoading: state.usersPage.isLoading,
  };
};

const dispatchObj = (dispatch: thunkDispatch) => {
  return {
    changeFollowUsers: (id: string) => dispatch(changeFollowUsers(id)),

    pageChange: (page: number) => dispatch(pageChange(page)),
    changeLoadingStatus: (loading: boolean) =>
      dispatch(changeLoadingStatus(loading)),
    userStatusFollow: (id: string, status: StatusFollowingType) =>
      dispatch(userStatusFollow(id, status)),
    setUserTC: (pageFocus: number, pageSize: number) =>
      dispatch(setUserTC(pageFocus, pageSize)),
    changeFollowUsersTC: (id: string) => dispatch(changeFollowUsersTC(id)),
  };
};
//////////////////////////////////////

//Component

export class UsersContainerApi extends React.Component<UserPropsType> {
  funcChangeLoading() {
    this.props.changeLoadingStatus(!this.props.isLoading);
  }
  componentDidMount() {
    this.props.setUserTC(this.props.pageFocus, this.props.pageSize);
  }

  getNewPage(el: number) {
    this.props.setUserTC(el, this.props.pageSize);
  }

  async changeFollowUserApi(id: number) {
    this.props.changeFollowUsersTC(id.toString());
  }

  render() {
    return (
      <>
        {this.props.isLoading ? (
          <Loader />
        ) : (
          <Users
            onPageChanged={(el: number) => this.getNewPage(el)}
            changeFollow={(id: number) => this.changeFollowUserApi(id)}
            totalCount={this.props.totalCount}
            users={this.props.users}
            pageFocus={this.props.pageFocus}
            pageSize={this.props.pageSize}
          />
        )}
      </>
    );
  }
}
//////////////////////////////////

export const UsersContainer = compose(
  connect(stateMap, dispatchObj),
  withAuthRedirect
)(UsersContainerApi) as ComponentType;
