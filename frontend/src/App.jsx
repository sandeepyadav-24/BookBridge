import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Sell from "./Components/Sell";
import "../src/scrollbar.css"
import AvailableBooksToRent from "./Components/AvailableBooksToRent";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Store from "./Components/Store";
import Rent from "./Components/Rent";
import AvailableBooks from "./Components/AvailableBooks";

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
              <Route path="/store" element={<Store />}></Route>
              <Route path="/store/createsell" element={<Sell />}></Route>
              <Route path="/store/rent" element={<Rent />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/store/availablebooks" element={<AvailableBooks />}></Route>
              <Route path="/store/availablebookstorent" element={<AvailableBooks />}></Route>

            </Routes>
          </Router>
        </>
      </div>
    </RecoilRoot>
  );
};
export default App;
