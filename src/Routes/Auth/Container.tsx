import React from "react";
import Presenter from "./Presenter";
import { useState } from "react";
import { useFormInput } from "../../Hooks/form";
import { useMutation } from "react-apollo-hooks";
import { CONFIRM_SECRET, CREATE_ACCOUT, LOG_IN } from "./Queries";
import { toast } from "react-toastify";
import { errorMessage } from "../../utils";

export default () => {
  const [action, setAction] = useState("logIn");
  const name = useFormInput("");
  const loginPassword = useFormInput("");
  const signupPassword = useFormInput("");
  const firstName = useFormInput("");
  const lastName = useFormInput("");
  const email = useFormInput("");
  const username = useFormInput("");
  const secret = useFormInput("");

  const createAccount = useMutation(CREATE_ACCOUT, {
    variables: {
      email: email.value,
      username: username.value,
      firstName: firstName.value,
      lastNAme: lastName.value
    }
  });

  const confirmSecretMutation = useMutation(CONFIRM_SECRET, {
    variables: {
      email: email.value,
      secretKey: secret.value
    }
  });
  const requestSecret = useMutation(LOG_IN, {
    variables: { email: email.value }
  });

  const onSubmit = async (e: Event) => {
    e.preventDefault();
    if (action === "logIn") {
      if (email.value !== "") {
        try {
          const { data } = await requestSecret();
          if (!data.requestSecret)
            toast.error("해당 이메일의 사용자가 존재하지 않습니다.");
          else {
            toast.success("해당 이메일로 비밀키가 발송되었습니다.");
            setAction("secret");
          }
        } catch {
          toast.error("cant' request"); //서버 에러 처리시 처리
        }
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
        try {
          const { data } = await createAccount();
          if (data.createAccount) toast("회원가입이 완료되었습니다.");
          else toast.error("정보가 잘못되었습니다.");
        } catch (e) {
          toast.error(errorMessage(e.message));
        }
      } else {
        toast.error("필드를 입력해주세요");
      }
    } else if (action === "secret") {
      try {
        const { data } = await confirmSecretMutation();
        const token: string = data.confirmSecret;
        alert(token);
      } catch (e) {
        toast.error(errorMessage(e.message));
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
      secret={secret}
    />
  );
};
