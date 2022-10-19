import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        <Routes>
          <Route
            exact
            path="/app-support/privacy-policy"
            element={<AppPrivacyPolicy />}
          />
          <Route exact path="/resume" element={<ResumeContainer />} />
          <Route exact path="/rapidbus" element={<RapidbuSContainer />} />
          <Route exact path="/" element={<HomeComtainer />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
