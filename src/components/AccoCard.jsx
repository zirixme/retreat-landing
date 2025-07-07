function AccoCard({ img, title, paragraph }) {
  return (
    <div
      className="text-white flex flex-col justify-end p-4 w-full min-h-[300px] lg:min-h-[395px] bg-cover bg-center max-w-sm rounded shadow"
      style={{ backgroundImage: `url("${img}")` }}
    >
      <h1 className="text-2xl md:text-3xl font-bold mb-1">{title}</h1>
      <p className="text-sm sm:text-base">{paragraph}</p>
    </div>
  );
}
export default AccoCard;
