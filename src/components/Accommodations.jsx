import AccoCard from "./AccoCard.jsx";
import Button from "./Button.jsx";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../utils/motionVariants.js";
function Accommodations() {
  return (
    <section
      id="accommodations"
      className="bg-background h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-4 place-items-center md:items-start"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="min-h-[300px] lg:min-h-[395px] max-w-sm lg:max-w-full md:max-w-2xl  flex flex-col justify-center md:p-7 md:col-span-2 md:text-center"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-4xl md:text-5xl 2xl:text-7xl tracking-tight font-semibold mb-4"
        >
          Stay Close to Nature
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="mb-6 2xl:text-2xl 2xl:max-w-3xl"
        >
          Whether you’re after a cozy cabin or a treetop hideaway, each stay
          brings you closer to nature without giving up comfort. Unplug, relax,
          and wake up to the sound of the forest.
        </motion.p>
        <motion.div variants={fadeInUp}>
          <Button title={"Explore All Stays"} />
        </motion.div>
      </motion.div>
      <div
        className="text-white flex flex-col justify-end p-4 w-full min-h-[300px] lg:min-h-[395px] bg-cover bg-center max-w-sm lg:max-w-2xl rounded shadow md:hidden"
        style={{
          backgroundImage: "url('/alpine-cabin-lookout-compressed.webp')",
          backgroundPosition: "0% 80%",
        }}
      >
        <h1 className="text-2xl md:text-3xl font-bold mb-1">
          Alpine Cabin Lookout
        </h1>
        <p>
          A cozy cabin with big windows and mountain views. Great for quiet
          nights and watching the stars.
        </p>
      </div>

      <AccoCard
        img={"/treetop-hideaway-compressed.webp"}
        title={"Treetop Hideaway"}
        paragraph={
          "Elevated above the ground, this unique retreat lets you sleep among the trees. Features a hammock, reading nook, and stargazing skylight."
        }
      />
      <AccoCard
        img={"/woodland-cabin-compressed.webp"}
        title={"Woodland Cabin"}
        paragraph={
          "Nestled in the trees, this warm wooden cabin offers a queen bed, a wood-burning stove, and a large window with mountain views."
        }
      />
      <AccoCard
        img={"/mountain-view-dome-compressed.webp"}
        title={"Mountain View Dome"}
        paragraph={
          "A cozy geodome tucked into the hillside with panoramic mountain views. Features a skylight for stargazing and a plush king-size bed."
        }
      />
      <AccoCard
        img={"/forest-lodge-compressed.webp"}
        title={"Forest Lodge"}
        paragraph={
          "Ideal for small groups or families, this spacious lodge features two bedrooms, a shared kitchen, and a wrap-around porch."
        }
      />
    </section>
  );
}
export default Accommodations;
