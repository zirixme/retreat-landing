function ExperCard({ img, title, paragraph }) {
  return (
    <div className="text-left w-full max-w-sm">
      <div className="relative rounded mb-4 h-64 overflow-hidden">
        <img
          src={img}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[70%]"
        />
      </div>
      <div>
        <h2 className="text-xl sm:text-2xl font-bold mb-1">{title}</h2>
        <p className="text-sm sm:text-base">{paragraph}</p>
      </div>
    </div>
  );
}
export default ExperCard;
