import Button from "./Button.jsx";
function Hero() {
  return (
    <section
      className="h-screen bg-cover"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="h-screen flex flex-col justify-center items-baseline max-w-2xl px-24 relative z-10">
        <h1 className="mb-3 text-5xl text-white font-extrabold tracking-tight">
          Escape to Where the
          <br /> <span className="text-[#5BCC87]">Wild Lives</span>
        </h1>
        <p className="mb-6 text-white text-small">
          Discover breathtaking destinations, peaceful trails, and the calm of
          untouched landscapes. Whether you're seeking solitude or adventure,
          our retreats reconnect you with the earth.
        </p>
        <Button title={"Find Your Escape"} />
      </div>
    </section>
  );
}

export default Hero;
