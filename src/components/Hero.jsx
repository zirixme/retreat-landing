import Button from "./Button.jsx";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/motionVariants.js";

function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />

      <motion.div
        className="h-full flex flex-col justify-center items-baseline max-w-2xl 2xl:max-w-4xl px-6 md:px-24 relative z-10"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          variants={fadeInUp}
          className="mb-3 text-4xl md:text-5xl 2xl:text-7xl text-white font-extrabold tracking-tight"
        >
          Escape to Where the <br />
          <span className="text-[#5BCC87]">Wild Lives</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mb-6 text-white/85 text-sm 2xl:text-2xl"
        >
          Discover breathtaking destinations, peaceful trails, and the calm of
          untouched landscapes. Whether you're seeking solitude or adventure,
          our retreats reconnect you with the earth.
        </motion.p>

        <motion.div variants={fadeInUp}>
          <a href="#accommodations">
            <Button title={"Find Your Escape"} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
