function TestiCard({ img, name, paragraph }) {
  return (
    <div className="flex flex-col items-center text-black bg-white rounded px-4 py-8 md:px-8 md:py-10 grow-0">
      <div className="w-24 h-24 md:w-50 md:h-50 rounded-full overflow-hidden mb-4">
        <img
          src={img}
          alt=""
          className="object-cover object-center w-full h-full"
        />
      </div>
      <h1 className="mb-2">{name}</h1>
      <div className="mb-2">
        <img src="/stars.svg" alt="rating" />
      </div>
      <p className="max-w-2xs">{paragraph}</p>
    </div>
  );
}
export default TestiCard;
