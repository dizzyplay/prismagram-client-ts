import React, {Component} from 'react';
import GlobalStyle from "../Styles/GlobalStyles"
import {ThemeProvider} from "styled-components";
import Theme from "../Styles/Theme"
import Router from "./Router";
import {gql} from "apollo-boost"
import {useQuery} from "react-apollo-hooks";

const Query = gql`
    {
        isLoggedIn @client 
    }
`;

const App = ()=>{
  const {data}= useQuery(Query);
  const isLoggedIn = data.isLoggedIn;

    return (
      <ThemeProvider theme={Theme}>
        <>
          <GlobalStyle/>
          <Router isLoggedIn={isLoggedIn}/>
        </>
      </ThemeProvider>
    );
  }


export default App;
