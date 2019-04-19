import React from "react";
// @ts-ignore
import styled from "styled-components";

const Text = styled.span`
  font-weight: 600;
  user-select: none;
`;

const FatText = ({ text, className }: any) => (
  <Text className={className}>{text}</Text>
);

export default FatText;
