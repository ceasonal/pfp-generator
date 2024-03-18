import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Images from "./Images";
import Navabar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react"
const App = () => {
  return (
    <>
      <Router>
        <Analytics/>
        <Navabar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/images" element={<Images />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;