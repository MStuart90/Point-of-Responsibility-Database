import React from "react";
import "./App.css";
import { BrowserRouter as Router, 
  //Link, 
  Route, Switch } from "react-router-dom";
import Navbarx from "./Components/Navbarx";
import Contribute from "./Contribute";
import HowToUsePord from "./HowToUsePord";
import Home from "./Home";
import Show from "./Show";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Contact from "./Contact";


function App() {
  /*const history = useHistory() 

  useEffect(() => {
     return history.listen((location) => { 
        console.log(`You changed the page to: ${location.pathname}`) 
     }) 
  },[history]) */

  return (
    <div className="wrapper flex">
      <main>
        <Router >
          <Navbarx />
          <Switch>
            <Route path="/SignIn" component={SignIn} /> 
            <Route path="/SignUp" component={SignUp} /> 
            <Route path="/Contact" component={Contact} /> 
            <Route path="/Contribute" component={Contribute} /> 
            <Route path="/HowToUsePord" component={HowToUsePord} /> 
            <Route exact path="/id:id" component={Show} /> 
            <Route exact path="/" component={Home} /> 
          </Switch>
        </Router>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;