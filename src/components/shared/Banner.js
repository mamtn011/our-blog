const Banner = ({ pageName }) => {
  return (
    <div className="px-4 py-32 bg-black mx-auto text-white text-center">
      <h2 className="text-3xl pt-12 lg:text-5xl leading-snug font-bold mb-5">
        {pageName || "Welcome"}
      </h2>
    </div>
  );
};

export default Banner;
