const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-curvey-light-mode dark:bg-curvy-dark-mode bg-no-repeat bg-contain bg-bottom"
    >
      {/* Hero container */}
      <div className="container mx-auto px-6 text-center md:pt-20 pb-52">
        <img
          src="images/illustration-intro.png"
          alt="hero image"
          className="mx-auto"
        />
        <h1 className="max-w-2xl mx-auto mb-10 text-3xl font-bold leading-normal mt-14 md:text-4xl">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="max-w-xm mx-auto mb-10 test-sm md:max-w-xl md:text-lg">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends,
          family, and co-workers.
        </p>
        <button className="p-3 rounded-full w-52 bg-green-500 hover:scale-95">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
