import { HashRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Random from "./Pages/Random";
import Images from "./Pages/Images";
import Navabar from "./components/Navbar";
import Main from "./Pages/Main";
import { Analytics } from "@vercel/analytics/react";
const App = () => {
  return (
    <>
      <Router>
        <Analytics />
        {/* <Navabar /> */}
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="" element={<Random />}>
              <Route path="" element={<Outlet />} />
            </Route>
            <Route path="/pintrest" element={<Images />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
