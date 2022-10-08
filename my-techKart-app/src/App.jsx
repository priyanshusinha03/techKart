import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TopHeader from "./components/Headers/TopHeader";
import LandingPage from "./Pages/LandingPage";
import RegisterLogin from "./Pages/RegisterLogin";
function App() {
  return (
    <>
      <Router>
        <Route exact path="/home" component={TopHeader} />
        <Route exact path="/register" component={RegisterLogin} />
        <Route exact path="/" component={LandingPage} />
      </Router>
    </>
  );
}

export default App;
