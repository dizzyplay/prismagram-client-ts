import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useMutation, useQuery } from "react-apollo-hooks";
import { withRouter } from "react-router";
import Loader from "./Loader";
import Avatar from "./Avatar";
import FollowButton from "../Components/FollowButton";
import Button from "../Components/Button";
import FatText from "./FatText";
import { SquarePost } from "./SquarePost";

const GET_USER_PROFILE = gql`
  query getProfile($username: String!) {
    getProfile(username: $username) {
      user {
        id
        avatar
        bio
        fullName
        lastName
        isFollowing
        isSelf
        username
        postsCount
        followingCount
        followersCount
      }
      posts {
        id
        files {
          url
        }
        likesCount
        commentsCount
      }
    }
  }
`;

const LOGOUT = gql`
  mutation userLogout {
    userLogout @client
  }
`;

export const UserProfile = ({ match }: any) => {
  const { data, loading }: any = useQuery(GET_USER_PROFILE, {
    variables: { username: match.params.username }
  });

  const logoutMutation = useMutation(LOGOUT);
  const handleLogout = async () => {
    console.log("test");
    await logoutMutation();
  };
  if (loading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else {
    const { user, posts } = data.getProfile;
    return (
      <Wrapper>
        <>
          <Header>
            <div>
              <Avatar size={"lg"} url={user.avatar} />
            </div>
            <HeaderColumns>
              <UsernameRow>
                <Username>{user.username}</Username>
                {user.isSelf ? (
                  <Button onClick={handleLogout} text={"Log Out"} />
                ) : (
                  <FollowButton
                    isFollowing={user.isFollowing}
                    id={user.id}
                    isText={false}
                  />
                )}
              </UsernameRow>
              <Counts>
                <Count>
                  <FatText text={user.postsCount} /> posts
                </Count>
                <Count>
                  <FatText text={user.followersCount} /> followers
                </Count>
                <Count>
                  <FatText text={user.followingCount} /> following
                </Count>
              </Counts>
              <FullName text={user.fullName} />
              <Bio>{user.bio}</Bio>
            </HeaderColumns>
          </Header>
          <Posts>
            {posts &&
              posts.map((post: any) => (
                <SquarePost
                  key={post.id}
                  id={post.id}
                  likesCount={post.likesCount}
                  commentsCount={post.commentsCount}
                  url={post.files[0].url}
                />
              ))}
          </Posts>
        </>
      </Wrapper>
    );
  }
};

export default withRouter(UserProfile);

const Username = styled.span`
  font-size: 26px;
  display: block;
  margin: 20px 0;
`;

const HeaderColumns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UsernameRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 100px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Counts = styled.ul`
  display: flex;
  margin: 15px 0px;
`;

const Count = styled.li`
  font-size: 16px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
const FullName = styled(FatText)`
  font-size: 16px;
`;

const Bio = styled.p`
  margin: 10px 0;
`;
const Posts = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  grid-column-gap: 20px;
`;
