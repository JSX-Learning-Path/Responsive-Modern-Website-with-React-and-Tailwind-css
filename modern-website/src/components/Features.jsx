const features = [
  {
    title: "Fast Performance",
    description:
      "Experience lightning-fast load times and smooth interactions.",
    image: "code-faster",
    imagePosition: "left",
  },
  {
    title: "Smart Debugging",
    description:
      "Find your mistakes and fix them quickly with our intelligent debugging tools.",
    image: "debugging",
    imagePosition: "right",
  },
  {
    title: "Seamless Collaboration",
    description: "Works closely with your team and shape your future together",
    image: "collaboration",
    imagePosition: "left",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="py-16 sm:py-20 px-10 sm:mx-6 lg:px-8 relative"
    >
      <div>
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-b from-white to-grey-300 bg-clip-text text-transparent">
              Your Development Environment
            </span>
            <br />
            <span className="bg-gradient-to-b from-blue-400 to-cyan bg-clip-text text-transparent">
              {" "}
              WorkFLow
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Features;
