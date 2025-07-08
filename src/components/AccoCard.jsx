function AccoCard({ img, title, paragraph }) {
  return (
    <div
      className="relative text-white flex flex-col justify-end p-6 w-full min-h-[300px] lg:min-h-[395px] bg-cover bg-center max-w-sm lg:max-w-2xl rounded shadow-lg"
      style={{ backgroundImage: `url("${img}")` }}
      aria-label={`Accommodation: ${title}`}
      role="region"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded" />
      <div className="relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold mb-1">{title}</h3>
        <p className="text-sm sm:text-base 2xl:text-xl text-white/90">
          {paragraph}
        </p>
      </div>
    </div>
  );
}
export default AccoCard;
