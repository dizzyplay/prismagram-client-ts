import React, { Component } from 'react';
import {GlobalStyle} from "../Styles/GlobalStyles"
import {ApolloProvider} from "react-apollo-hooks";
import {ThemeProvider} from "styled-components";
import Theme from "../Styles/Theme"
import Router from "./Router";
import client from "../Apollo/Client";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <ApolloProvider client={client}>
        <GlobalStyle/>
        <Router isLoggedIn={false}/>
        </ApolloProvider>
      </ThemeProvider>
    );
  }
}

export default App;
