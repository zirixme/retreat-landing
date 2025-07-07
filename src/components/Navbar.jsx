import Button from "./Button.jsx";
import { Menu } from "lucide-react";
import { useState } from "react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "Experiences", "Journal", "Contact"];
  return (
    <header className="w-full absolute top-0 left-0 z-20">
      <nav className="flex justify-between px-4 md:px-8 py-4 bg-transparent">
        <div>
          <ul>
            <li key={"logo"}>
              <img src="/logo.svg" alt="logo" />
            </li>
          </ul>
        </div>
        <div>
          <ul className="hidden md:flex gap-10 items-center text-white z-20">
            {navLinks.map((text) => (
              <li key={text}>
                <a
                  href="#"
                  className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                >
                  {text}
                </a>
              </li>
            ))}
            <li>
              <a href="#experiences">
                <Button title={"Get Started"} />
              </a>
            </li>
          </ul>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu color="white" size={40} aria-expanded aria-label="Menu" />
        </button>
        {/* Mobile menu */}
        {isOpen && (
          <ul className="absolute top-full text-white left-0 w-full bg-black/40 p-4 h-screen flex flex-col gap-4 md:hidden">
            <li>
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
          </ul>
        )}
      </nav>
    </header>
  );
}
export default Navbar;
