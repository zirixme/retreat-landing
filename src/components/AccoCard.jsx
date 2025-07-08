function AccoCard({ img, title, paragraph }) {
  return (
    <div
      className="text-white flex flex-col justify-end p-4 w-full min-h-[300px] lg:min-h-[395px] bg-cover bg-center max-w-sm lg:max-w-2xl xl:max-w-4xl rounded shadow-lg relative"
      style={{ backgroundImage: `url("${img}")` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      <h1 className="text-2xl md:text-3xl font-bold mb-1 z-10">{title}</h1>
      <p className="text-sm sm:text-base 2xl:text-2xl text-white/90 z-10">
        {paragraph}
      </p>
    </div>
  );
}
export default AccoCard;
