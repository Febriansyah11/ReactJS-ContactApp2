import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Reducer from "./components/content/people/reducer/Reducer";
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./App.css";

function App() {
  return (
    <Provider store={createStore(Reducer)}>
      <Router>
        <Fragment>
          <Header />
          <Content />
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
