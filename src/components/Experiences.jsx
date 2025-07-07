import ExperCard from "./ExperCard.jsx";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  imageFadeIn,
} from "../utils/motionVariants.js";

function Experiences() {
  return (
    <section
      id="experiences"
      className="bg-background h-fit text-center pt-20 flex flex-col items-center pb-20"
    >
      <motion.div
        className="max-w-screen-xl flex justify-center items-center gap-10 mb-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <hr className="w-0 md:w-20" />
        <motion.h1
          className="text-4xl md:text-5xl tracking-tight font-semibold"
          variants={fadeInUp}
        >
          Discover What Awaits You
        </motion.h1>
        <hr className="w-0 md:w-20" />
      </motion.div>
      <motion.p
        className="mb-16 max-w-2xl"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        From mindful mornings to heart-pumping hikes, our experiences are
        crafted to reconnect you with the wild, with others, and with yourself.
        Whether you’re here to rest, explore, or grow we have something just for
        you.
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        <div>
          <ExperCard
            img={"/foraging.jpg"}
            title={"Foraging & Plant Walks"}
            paragraph={
              "Learn about local plants, herbs, and how nature nourishes us led by a certified herbalist."
            }
          />
        </div>
        <div>
          <ExperCard
            img={"/campfire.jpg"}
            title={"Evening Fire Circles"}
            paragraph={
              "Gather around the fire to share stories, reflect, or simply enjoy the stars in good company."
            }
          />
        </div>
        <div>
          <ExperCard
            img={"/hike.jpg"}
            title={"Guided Adventures"}
            paragraph={
              "Wander through alpine trails with expert guides who know every hidden path and story the forest holds."
            }
          />
        </div>
      </div>
    </section>
  );
}
export default Experiences;
