const Hero = () => {
  return (
    <section id="hero" className="h-screen">
      <div className="max-w-6xl mx-auto text-center mb-40 px-10 pt-16">
        <img
          className="mx-auto my-16"
          src="images/logo.svg"
          alt="clipboard logo"
        />
        <h3>A history of everything you copy</h3>
        <p className="section-content mb-10">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        {/* button container */}
        <div className="button-container">
          <a
            className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
            href=""
          >
            Download for iOS
          </a>
          <a
            className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
            href=""
          >
            Download for Mac
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
