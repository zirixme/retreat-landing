import ExperCard from "./ExperCard.jsx";
function Experiences() {
  return (
    <section className="bg-background h-fit text-center pt-20 flex flex-col items-center">
      <div className="max-w-screen-xl flex justify-center items-center gap-5 md:gap-10 mb-4">
        <hr className="w-14 md:w-20" />
        <h1 className="text-4xl md:text-5xl tracking-tight font-semibold">
          Discover What Awaits You
        </h1>
        <hr className="w-14 md:w-20" />
      </div>
      <p className="mb-16 max-w-2xl ">
        From mindful mornings to heart-pumping hikes, our experiences are
        crafted to reconnect you with the wild, with others, and with yourself.
        Whether you’re here to rest, explore, or grow we have something just for
        you.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        <ExperCard
          img={"/foraging.jpg"}
          title={"Foraging & Plant Walks"}
          paragraph={
            "Learn about local plants, herbs, and how nature nourishes us led by a certified herbalist."
          }
        />
        <ExperCard
          img={"/campfire.jpg"}
          title={"Evening Fire Circles"}
          paragraph={
            "Gather around the fire to share stories, reflect, or simply enjoy the stars in good company."
          }
        />
        <ExperCard
          img={"/hike.jpg"}
          title={"Guided Adventures"}
          paragraph={
            "Wander through alpine trails with expert guides who know every hidden path and story the forest holds."
          }
        />
      </div>
    </section>
  );
}
export default Experiences;
