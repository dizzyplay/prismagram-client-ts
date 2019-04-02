import * as React from "react";
// @ts-ignore
import styled from "styled-components";
import { mytheme } from "../Styles/Theme";

const Container = styled.input`
  border: 0;
  border: ${(props: mytheme) => props.theme.boxBorder};
  border-radius: ${(props: mytheme) => props.theme.borderRadius};
  background-color: ${(props: mytheme) => props.theme.bgColor};
  height: 35px;
  font-size: 12px;
  padding: 0px 15px;
`;

const Input: ({
  placeholder,
  required
}: {
  placeholder: string;
  required?: boolean;
}) => any = ({ placeholder, required = true }) => (
  <Container placeholder={placeholder} required={required} />
);

export default Input;
