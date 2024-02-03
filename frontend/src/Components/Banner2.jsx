const Banner2 = () => {
  return (
    <div className="bg-white my-5 rounded-3xl md:m-20">
      <div className="flex flex-col md:flex-row ">
        <div className="px-16 py-10">
          <h1 className="text-5xl font-bold py-8">
            Share glimse of the books you read.
          </h1>
          <h1 className="text-xl font-medium">
            Share your thoughts and favourite quotes ith glimse in one click.
          </h1>
        </div>
        <div className="bg-[#E9D5FF] p-10 md:w-[1000px] md:rounde">
          <img
            className="rounded-xl "
            src="public/feature_img.png"
            alt="image"
          ></img>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="px-16 py-10">
          <h1 className="text-5xl font-bold py-8">
            Find books from different genres
          </h1>
          <h1 className="text-xl font-medium">
            like fiction, non-fiction, buisness, technology, and more.
          </h1>
        </div>
        <div className="bg-[#E9D5FF] p-10 md:w-[925px]">
          <img
            className="rounded-xl"
            src="public/category_img.png"
            alt="image"
          ></img>
        </div>
      </div>
    </div>
  );
};
export default Banner2;

{
  /*listValue.map((data) => {
          return (
            <GeneralBook
              key={idCounter++}
              author={data.author}
              description={data.description}
              title={data.title}
              subTitle={data.subTitle}
            ></GeneralBook>
          );
          //<br/>
        })*/
}
