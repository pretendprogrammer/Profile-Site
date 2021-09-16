import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeComtainer from "./Containers/HomeComtainer";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/otherProjects"></Route>
          <Route exact path="/resume"></Route>
          <Route exact path="/RapidbuS"></Route>
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
