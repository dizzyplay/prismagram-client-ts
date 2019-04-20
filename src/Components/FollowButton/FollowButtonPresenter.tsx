import * as React from "react";
import Button from "../Button";
import styled from "styled-components";

const CLINK = styled.div`
  width: 200px;
`;

type Props = {
  isFollowing: boolean;
  handleFollow: (id: string) => void;
  id: string;
};
export const FollowButtonPresenter = (props: Props) => {
  return (
    <CLINK onClick={() => props.handleFollow(props.id)}>
      <Button text={props.isFollowing ? "언팔로우" : "팔로우"} />
    </CLINK>
  );
};
