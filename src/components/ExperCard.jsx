function ExperCard({ img, title, paragraph }) {
  return (
    <div className="text-left w-full max-w-sm">
      <div className="relative rounded mb-4 h-64 overflow-hidden shadow-lg">
        <img
          src={img}
          alt={img}
          className="absolute inset-0 w-full h-full object-cover object-[70%]"
        />
      </div>
      <div>
        <h2 className="text-xl sm:text-2xl font-bold mb-1 2xl:text-3xl 2xl:mb-3">
          {title}
        </h2>
        <p className="text-sm sm:text-base 2xl:text-2xl">{paragraph}</p>
      </div>
    </div>
  );
}
export default ExperCard;
