import Button from "./Button.jsx";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../utils/motionVariants.js";
function AboutUs() {
  return (
    <section
      className="flex bg-cover h-screen relative"
      style={{ backgroundImage: "url('/beach.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r md:bg-gradient-to-bl from-black/50 to-transparent"></div>
      <div className=" justify-between items-center flex-col bg-black hidden md:flex px-2">
        <p className="-rotate-90 text-6xl font-extrabold text-white">E</p>
        <p className="-rotate-90 text-6xl font-extrabold text-white">R</p>
        <p className="-rotate-90 text-6xl font-extrabold text-white">U</p>
        <p className="-rotate-90 text-6xl font-extrabold text-white">T</p>
        <p className="-rotate-90 text-6xl font-extrabold text-white">A</p>
        <p className="-rotate-90 text-6xl font-extrabold text-white">N</p>
      </div>
      <div className="flex items-center justify-baseline md:justify-end w-full h-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="p-6 md:p-20 max-w-xl text-white z-10"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl tracking-tight font-semibold mb-4"
          >
            Rooted in Nature. <br /> Guided by Purpose.
          </motion.h1>
          <motion.p variants={fadeInUp} className="mb-7">
            We believe in slowing down. In a busy world, we've created a place
            to breathe, rest, and reconnect with nature, with others, and with
            yourself. Whether it’s your first time in the wild or your
            hundredth, we’re here to help you feel at home in the forest, the
            mountains, and within yourself.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button title={"Read Our Story"} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
export default AboutUs;
