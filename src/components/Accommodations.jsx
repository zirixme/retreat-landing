import AccoCard from "./AccoCard.jsx";
import Button from "./Button.jsx";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../utils/motionVariants.js";
function Accommodations() {
  return (
    <section className="bg-background h-fit grid grid-cols-1 lg:grid-cols-2 p-10 gap-4 place-items-center lg:items-start">
      <div className="flex flex-col gap-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="min-h-[300px] lg:min-h-[395px] max-w-sm lg:max-w-full"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl tracking-tight font-semibold mb-4"
          >
            Stay Close to Nature
          </motion.h1>
          <motion.p variants={fadeInUp} className="mb-6">
            Whether you crave the comfort of a cozy cabin or the charm of a
            treetop escape, each of our stays is designed to bring you closer to
            the natural world without sacrificing rest or comfort. Unplug,
            unwind, and wake up to the sound of the forest.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button title={"Explore All Stays"} />
          </motion.div>
        </motion.div>
        <div
          className="text-white flex flex-col justify-end p-4  min-h-[300px] lg:min-h-[395px] bg-cover bg-center  rounded shadow max-w-sm lg:max-w-full"
          style={{
            backgroundImage: "url('/alpine-cabin-lookout.jpg')",
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
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <AccoCard
          img={"/treetop-hideaway.jpg"}
          title={"Treetop Hideaway"}
          paragraph={
            "Elevated above the ground, this unique retreat lets you sleep among the trees. Features a hammock, reading nook, and stargazing skylight."
          }
        />
        <AccoCard
          img={"/woodland-cabin.jpg"}
          title={"Woodland Cabin"}
          paragraph={
            "Nestled in the trees, this warm wooden cabin offers a queen bed, a wood-burning stove, and a large window with mountain views."
          }
        />
        <AccoCard
          img={"/mountain-view-dome.jpg"}
          title={"Mountain View Dome"}
          paragraph={
            "A cozy geodome tucked into the hillside with panoramic mountain views. Features a skylight for stargazing and a plush king-size bed."
          }
        />
        <AccoCard
          img={"/forest-lodge.jpg"}
          title={"Forest Lodge"}
          paragraph={
            "Ideal for small groups or families, this spacious lodge features two bedrooms, a shared kitchen, and a wrap-around porch."
          }
        />
      </div>
    </section>
  );
}
export default Accommodations;
