import Button from "./Button.jsx";

function Navbar() {
  return (
    <header className="w-full absolute top-0 left-0 z-10">
      <nav className="hidden md:flex justify-between px-8 py-4 bg-transparent">
        <div>
          <ul>
            <li>
              <img src="/logo.svg" alt="" />
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-10 items-center text-white">
            <li className="">
              <a href="#" className="">
                Home
              </a>
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
              <Button title={"Get Started"} />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
