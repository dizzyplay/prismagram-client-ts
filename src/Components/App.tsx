import React, { Component } from 'react';
import {GlobalStyle} from "../Styles/GlobalStyles"
import {ThemeProvider} from "styled-components";
import Theme from "../Styles/Theme"
import Router from "./Router";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <>
        <GlobalStyle/>
        <Router isLoggedIn={false}/>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
