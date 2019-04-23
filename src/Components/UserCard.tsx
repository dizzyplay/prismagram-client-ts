import * as React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import FatText from "./FatText";
import FollowButton from "../Components/FollowButton";
import { DefaultUser } from "./Icons";

const Card = styled.div`
  ${props => props.theme.whiteBox}
  display:flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const EAvatar = styled(Avatar)`
  margin-bottom: 15px;
`;

const ELink = styled(Link)`
  margin-bottom: 10px;
`;

type Props = {
  id: string;
  username: string;
  url: string;
  isSelf: boolean;
  isFollowing: boolean;
};

export function UserCard({ id, username, url, isSelf, isFollowing }: Props) {
  return (
    <Card>
      {url ? <EAvatar size={"md"} url={url} /> : <DefaultUser />}
      <ELink to={`/${username}`}>
        <FatText text={username} />
      </ELink>
      {!isSelf && <FollowButton isFollowing={isFollowing} id={id} isText={false} />}
    </Card>
  );
}
