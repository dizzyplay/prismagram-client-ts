import React from "react";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { mytheme } from "../../Styles/Theme";
// @ts-ignore
import styled from "styled-components";

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
interface presenterObj {
  [key: string]: any;
}
export default ({
  name,
  loginPassword,
  signupPassword,
  firstName,
  lastName,
  email,
  username,
  action,
  setAction,
  onSubmit,
  secret
}: presenterObj) => {
  return (
    <Wrapper>
      <Form>
        {action === "logIn" && (
          <form onSubmit={onSubmit}>
            <Input placeholder={"Email"} {...email} type={"email"} />
            <Button text={"Log in"} />
          </form>
        )}
        {action === "signUp" && (
          <form onSubmit={onSubmit}>
            <Input placeholder={"First name"} {...firstName} />
            <Input placeholder={"Last name"} {...lastName} />
            <Input placeholder={"Email"} {...email} />
            <Input placeholder={"Username"} {...username} />
            <Input
              placeholder={"Password"}
              {...signupPassword}
              type={"password"}
            />
            <Button text={"Sign up"} />
          </form>
        )}
        {action === "secret" && (
          <form onSubmit={onSubmit}>
            <Input placeholder={"Email"} {...email} />
            <Input placeholder={"비밀키"} {...secret} />
            <Button text={"비밀키를 입력해주세요"} />
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
