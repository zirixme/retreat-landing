function Button({ title }) {
  return (
    <button className="bg-green-normal text-white px-4 py-2 rounded cursor-pointer hover:bg-green-dark transition-all duration-200">
      {title}
    </button>
  );
}
export default Button;
