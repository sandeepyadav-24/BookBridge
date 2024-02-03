import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import About from "./Components/About";
import Contact from "./Components/Contact";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import CarouselBanner from "./Components/CarouselBanner";

const App = () => {
  return (
    <RecoilRoot>
      <div>
        <>
          <Router>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
            </Routes>
          </Router>
        </>
      </div>
    </RecoilRoot>
  );
};
export default App;