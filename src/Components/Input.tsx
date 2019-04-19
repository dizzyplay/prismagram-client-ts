import React from "react";
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

interface Input {
  placeholder: string;
  value: string;
  type?: string;
  required?: boolean;
  onChange: (e: { target: HTMLInputElement }) => any;
  className: any;
}

function Input({
  placeholder,
  required = true,
  onChange,
  value,
  type = "text",
  className
}: Input) {
  return (
    <Container
      className={className}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      value={value}
      type={type}
    />
  );
}

export default Input;
