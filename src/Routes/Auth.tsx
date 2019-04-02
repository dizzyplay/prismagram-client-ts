import * as React from "react";
import { ReactElement, useState } from "react";
// @ts-ignore
import styled from "styled-components";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { mytheme } from "../Styles/Theme";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Box = styled.div`
  ${(props: mytheme) => props.theme.whiteBox}
  border-radius:0px;
  width: 100%;
  max-width: 350px;
`;

const StateChanger = styled(Box)`
  text-align: center;
  padding: 20px 0px;
`;
const Link = styled.span`
  color: ${(props: mytheme) => props.theme.blueColor};
  cursor: pointer;
`;

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  form {
    width: 100%;
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 7px;
      }
    }
    button {
      margin-top: 10px;
    }
  }
`;
const Auth = (): ReactElement => {
  const [action, setAction] = useState("logIn");
  return (
    <Wrapper>
      <Form>
        {action === "logIn" ? (
          <form>
            <Input placeholder={"Username"} required={true} />
            <Input placeholder={"Password"} required={true} />
            <Button text={"Log in"} />
          </form>
        ) : (
          <form>
            <Input placeholder={"First name"} />
            <Input placeholder={"Last name"} />
            <Input placeholder={"Email"} />
            <Input placeholder={"Username"} />
            <Input placeholder={"Password"} />
            <Button text={"Sign up"} />
          </form>
        )}
      </Form>
      <StateChanger>
        {action === "logIn" ? (
          <>
            Don't have an account?{" "}
            <Link onClick={() => setAction("signUp")}>Sign up</Link>
          </>
        ) : (
          <>
            Have an account?{" "}
            <Link onClick={() => setAction("logIn")}>Log in</Link>
          </>
        )}
      </StateChanger>
    </Wrapper>
  );
};

export default Auth;
