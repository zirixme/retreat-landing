function ExperCard({ img, title, paragraph }) {
  return (
    <div className="text-left w-full max-w-sm lg:max-w-2xl h-full">
      <div className="relative rounded mb-4 h-60 xl:h-[360px] overflow-hidden shadow-lg">
        <img
          src={img}
          alt={`Experience: ${title}`}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-2 sm:p-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-1 2xl:text-3xl 2xl:mb-3">
          {title}
        </h2>
        <p className="text-sm sm:text-base 2xl:text-2xl">{paragraph}</p>
      </div>
    </div>
  );
}
export default ExperCard;
