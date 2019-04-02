import React from "react";
import Presenter from "./Presenter";
import { useState } from "react";
import { useFormInput } from "../../Hooks/form";
import { useMutation } from "react-apollo-hooks";
import { CREATE_ACCOUT, LOG_IN } from "./Queries";
import { toast } from "react-toastify";

export default () => {
  const [action, setAction] = useState("logIn");
  const name = useFormInput("");
  const loginPassword = useFormInput("");
  const signupPassword = useFormInput("");
  const firstName = useFormInput("");
  const lastName = useFormInput("");
  const email = useFormInput("");
  const username = useFormInput("");
  const createAccount = useMutation(CREATE_ACCOUT, {
    update: (_, result) => {
      const res: boolean = result.data.createAccount;
      if (res) {
        toast("회원가입이 완료되었습니다.");
      } else {
        toast.error("문제발생!!!");
      }
    },
    variables: {
      email: email.value,
      username: username.value,
      firstName: firstName.value,
      lastNAme: lastName.value
    }
  });
  const requestSecret = useMutation(LOG_IN, {
    update: (_, result) => {
      if (!result.data.requestSecret) {
        toast.error("해당 이메일의 사용자가 존재하지 않습니다.");
      } else toast("해당 이메일로 비밀키가 발송되었습니다.");
    },
    variables: { email: email.value }
  });

  const onSubmit = (e: Event) => {
    e.preventDefault();
    if (action === "logIn") {
      if (email.value !== "") {
        requestSecret();
      } else {
        toast.error("이메일을 입력해주세요");
      }
    } else if (action === "signUp") {
      if (
        email.value !== "" &&
        username.value !== "" &&
        firstName.value !== "" &&
        lastName.value !== ""
      ) {
        createAccount();
      } else {
        toast.error("필드를 입력해주세요");
      }
    }
  };

  const onLogin = (e: Event) => {
    e.preventDefault();
  };
  return (
    <Presenter
      name={name}
      loginPassword={loginPassword}
      signupPassword={signupPassword}
      firstName={firstName}
      lastName={lastName}
      email={email}
      username={username}
      action={action}
      setAction={setAction}
      onSubmit={onSubmit}
    />
  );
};
