import * as React from "react";
import Button from "../Button";
import styled from "styled-components";
import FatText from "../FatText";
import { mytheme } from "../../Styles/Theme";

const CLINK = styled.div`
  width: 100%;
`;

type Props = {
  isFollowing: boolean;
  handleFollow: (id: string) => void;
  id: string;
  isText: boolean;
};

const BlueText =styled(FatText)`
  color: ${(props:mytheme)=>props.theme.blueColor};
  cursor: pointer;
`

export const FollowButtonPresenter = (props: Props) => {
  return (
    <>
    {props.isText ?
        <span onClick={()=>props.handleFollow(props.id)}>
          <BlueText text={props.isFollowing ? "언팔로우":"팔로우"}/>
        </span>
        :
        <CLINK onClick={() => props.handleFollow(props.id)}>
          <Button text={props.isFollowing ? "언팔로우" : "팔로우"} />
        </CLINK>
    }
    </>
  );
};
