import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
// import Navabar from "./components/Navbar";
const App = () => {
  return (
    <>
      <Router>
        {/* <Navabar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;