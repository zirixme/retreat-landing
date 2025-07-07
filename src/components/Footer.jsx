import { Mail } from "lucide-react";
function Footer() {
  const linkStyle =
    "text-white/80 hover:text-white transition relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full";

  return (
    <footer className="flex flex-col md:flex-row flex-wrap p-10 md:p-20 gap-12 bg-black text-white justify-between">
      {/* Brand Section */}
      <div className="space-y-2 max-w-xs">
        <img src="/logo.svg" alt="logo" className="mb-3" />
        <h1 className="text-lg font-semibold">Wilderness Retreat</h1>
        <p className="text-white/80">Reconnect. Reflect. Restore.</p>
      </div>

      {/* Browse Links */}
      <nav className="space-y-2">
        <h2 className="font-bold text-lg">Browse</h2>
        <ul className="space-y-1">
          {[
            "Home",
            "About Us",
            "Accommodations",
            "Experiences",
            "Testimonials",
          ].map((item) => (
            <li key={item}>
              <a href="#" className={linkStyle}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Services Links */}
      <nav className="space-y-2">
        <h2 className="font-bold text-lg">Services</h2>
        <ul className="space-y-1">
          {["Plan Your Stay", "Gift Cards", "FAQ", "Contact Us"].map((item) => (
            <li key={item}>
              <a href="#" className={linkStyle}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Subscribe Section */}
      <form className="space-y-3 max-w-sm">
        <h2 className="font-bold text-lg">Want updates from the forest?</h2>
        <div className="relative">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full pl-10 py-2 pr-3 rounded border bg-white text-black"
            autoComplete="off"
          />
          <Mail size={18} className="absolute top-3 left-2.5 text-gray-500" />
        </div>
        <button
          type="submit"
          className="border px-4 py-2 rounded hover:bg-white hover:text-black transition duration-300"
        >
          Subscribe
        </button>
      </form>
    </footer>
  );
}

export default Footer;
