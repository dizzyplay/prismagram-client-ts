import React from "react";
// @ts-ignore
import styled from "styled-components";

const Text = styled.span`
  font-weight: 600;
`;

const FatText = ({ text }: { text: string }) => <Text>{text}</Text>;

export default FatText;
