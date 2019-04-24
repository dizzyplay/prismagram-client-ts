import * as React from "react";
import { UserProfile } from "../Components/UserProfile";
import { withRouter } from "react-router";

const Profile = ({ match }: any) => {
  return <UserProfile match={match} />;
};
export default withRouter(Profile);
