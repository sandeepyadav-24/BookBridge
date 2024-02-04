import Banner1 from "./Banner1";
import Navbar from "./Navbar";
import "../../src/scrollbar.css"
//import Search from "./Search";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";

const Home = () => {
  return (
    <div className="bg-[#FAE8FE] py-5 sm:py-12">
      <Navbar></Navbar>
      <Banner1></Banner1>
      <Banner2></Banner2>
      <Banner3></Banner3>
    </div>
  );
};
export default Home;
