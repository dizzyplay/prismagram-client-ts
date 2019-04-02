import * as React from "react";
import GlobalStyle from "../Styles/GlobalStyles";
// @ts-ignore
import styled, { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import Router from "./Router";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Footer from "./Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Query = gql`
  {
    isLoggedIn @client
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 935px;
  width: 100%;
`;

const App = () => {
  const { data } = useQuery(Query);
  const isLoggedIn = data.isLoggedIn;

  return (
    <ThemeProvider theme={Theme}>
      <Wrapper>
        <GlobalStyle />
        <Router isLoggedIn={isLoggedIn} />
        <Footer />
        <ToastContainer position={toast.POSITION.TOP_CENTER} />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
