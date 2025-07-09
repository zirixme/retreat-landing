function Button({ title }) {
  return (
    <button className="bg-green-normal text-white rounded cursor-pointer hover:bg-green-dark px-4 py-2 2xl:px-6 2xl:py-3 2xl:text-2xl transition-all duration-200">
      {title}
    </button>
  );
}
export default Button;
