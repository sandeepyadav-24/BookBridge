const Banner3 = () => {
  return (
    <div className="md:m-20">
      <div className="flex flex-col md:flex-row">
        <div>
          <h1 className="text-black-800 font-bold text-5xl px-5">
            Discover, track and talk about the books you are reading
          </h1>
          <button
            className=" text-white bg-black  px-6 mx-5  py-1 text-2xl rounded-3xl my-5"
            onClick={() => (window.location = "/signup")}
          >
            Get started free
          </button>
        </div>
        <div>
          <img className="h-300 w-600" src="public/banner3_img.png"></img>
        </div>
      </div>
      <div className="bg-white px-5 py-3 rounded-xl my-2 text-[#380067] font-semibold mx-8 md:mx-96 text-center">
        Read complete story of why and how we built glimpse
      </div>
      <h1 className="mx-2 text-center text-[#380067] font-bold">
        Made by Sandeep Yadav and Akshit
      </h1>
    </div>
  );
};
export default Banner3;
