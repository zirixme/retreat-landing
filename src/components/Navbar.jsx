function Navbar() {
  return (
    <nav className="flex justify-between px-8 py-4 bg-transparent">
      <div>
        <ul>
          <li>
            <img src="/logo.svg" alt="" />
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-10 items-center">
          <li className="">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Experiences</a>
          </li>
          <li>
            <a href="#">Journal</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <button className="bg-button text-white px-4 py-2 rounded">
              Get Started
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
