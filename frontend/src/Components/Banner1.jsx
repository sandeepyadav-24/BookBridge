const Banner1 = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-3xl md:m-20 md:p-10 p-5 m-5 ">
      <div>
        <h1 className="font-bold text-4xl  px-3 md:px-8 py-3 md:py-5">
          Book-Bridge: The Connecting Bridge Between You and Your Favourite Books
        </h1>
        <h1 className="font-medium text-xl px-3 md:px-8 py-3 md:py-5">
          Lend and Borrow Books within JIIT
        </h1>
      </div>
      <div>
        <img src="https://png.pngtree.com/png-vector/20220915/ourmid/pngtree-man-holding-book-and-laptop-in-modern-vector-style-vector-png-image_48611674.jpg"></img>
      </div>
    </div>
  );
};

export default Banner1;
