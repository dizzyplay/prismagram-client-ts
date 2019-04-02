import * as React from "react";
import { ReactElement, useState } from "react";
import styled from "styled-components";
import { MyTheme } from "../Styles/Theme";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Box = styled.div`
  ${(props: MyTheme) => props.theme.whiteBox}
  border-radius:0px;
  width: 100%;
  max-width: 350px;
`;

const Form = styled(Box)`
  padding: 40px;
  form {
    width: 100%;
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 7px;
      }
    }
  }
`;
const Auth = (): ReactElement => {
  const [action, setAction] = useState("logIn");
  return (
    <Wrapper>
      <Form>
        {action === "logIn" && (
          <form>
            <input placeholder={"Email"} />
          </form>
        )}
      </Form>
    </Wrapper>
  );
};

export default Auth;
