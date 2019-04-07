import React from "react";
// @ts-ignore
import styled from "styled-components";

const getSize = (size: SIZE) => {
  let num: number;
  if (size === "sm") num = 30;
  else if (size === "md") num = 50;
  else num = 150;
  return `
    width:${num}px;
    height:${num}px;
  `;
};

type SIZE = "sm" | "md" | "lg";

interface AvatarType {
  size: SIZE;
  url: string;
}

const Container = styled.div`
  ${(props: AvatarType) => getSize(props.size)}
  background-image:url(${(props: AvatarType) => props.url});
  background-size:cover;
  border-radius:50%;
  `;

const Avatar = ({ size = "sm", url }: AvatarType) => (
  <Container size={size} url={url} />
);

export default Avatar;
