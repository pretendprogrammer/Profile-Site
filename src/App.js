import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeComtainer from "./Containers/HomeComtainer";
import Footer from "./Components/Footer";
import ResumeContainer from "./Containers/ResumeContainer";
import NavBar from "./Components/NavBar";
import RapidbuSContainer from "./Containers/RapidbuSContainer";
import AppPrivacyPolicy from "./Components/AppPrivacyPolicy";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/appSupport/privacyPolicy">
            <AppPrivacyPolicy />
          </Route>
          <Route exact path="/Resume">
            <ResumeContainer />
          </Route>
          <Route exact path="/RapidbuS">
            <RapidbuSContainer />
          </Route>
          <Route exact path="/contact"></Route>
          <Route exact path="/">
            <HomeComtainer />
          </Route>
        </Switch>
        <Route path="/">
          <Footer />
        </Route>
      </Router>
    </div>
  );
}

export default App;
