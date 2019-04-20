import * as React from "react";
// @ts-ignore
import styled from "styled-components";
import { mytheme } from "../Styles/Theme";

const Container = styled.button`
  width: 100%;
  border: 0;
  border-radius: ${(props: mytheme) => props.theme.borderRadius};
  color: white;
  font-weight: 600;
  background-color: ${(props: mytheme) => props.theme.blueColor};
  text-align: center;
  padding: 7px 0px;
  font-size: 14px;
  outline: none;
`;

const Button: ({ text }: any) => any = ({ text }) => (
  <Container>{text}</Container>
);

export default Button;
