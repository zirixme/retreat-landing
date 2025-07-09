import TestiCard from "./TestiCard.jsx";
import { staggerContainer, fadeInUp } from "../utils/motionVariants.js";
import { motion } from "framer-motion";
function Testimonials() {
  return (
    <section
      className="flex h-fit p-10 md:p-20 bg-cover bg-center text-white relative flex-col items-center"
      style={{ backgroundImage: "url('/testimonial-bg-compressed.webp')" }}
    >
      <div className="bg-gradient-to-b from-black/30 to-transparent absolute inset-0"></div>
      <motion.div
        className="text-center z-10 mb-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h1
          variants={fadeInUp}
          className="text-4xl md:text-5xl 2xl:text-6xl tracking-tight font-semibold mb-4"
        >
          What Our Guests Say
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="2xl:text-2xl max-w-3xl mx-auto"
        >
          Every visit leaves a mark and we’re grateful to be part of so many
          journeys. Here's what some of our guests have shared:
        </motion.p>
      </motion.div>
      <div className="z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 ">
        <TestiCard
          img={"/person-1-compressed.webp"}
          name={"Sarah T."}
          paragraph={
            "“A magical escape. I arrived stressed and left grounded. The forest walks and evening fires were unforgettable.”"
          }
        />
        <TestiCard
          img={"/person-3-compressed.webp"}
          name={"Daniel R."}
          paragraph={
            "“The perfect balance of adventure and peace. The cabin was cozy, and the team made me feel truly welcome.”"
          }
        />
        <TestiCard
          img={"/person-2-compressed.webp"}
          name={"Olivia C."}
          paragraph={
            "“It felt like time slowed down here. No pressure, no noise just the forest and my breath.” "
          }
        />
        <TestiCard
          img={"/person-4-compressed.webp"}
          name={"Thomas E."}
          paragraph={
            "“I came to unplug but left recharged. The stillness, the stars, the people everything was just right.”"
          }
        />
      </div>
    </section>
  );
}
export default Testimonials;
