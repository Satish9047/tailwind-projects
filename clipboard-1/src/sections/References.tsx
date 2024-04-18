const References = () => {
  return (
    <>
      <section id="references">
        <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:justify-between md:space-y-0">
          <img src="images/logo-google.png" alt="google logo" />
          <img src="images/logo-ibm.png" alt="ibm logo" />
          <img src="images/logo-microsoft.png" alt="microsoft logo" />
          <img src="images/logo-hp.png" alt="hp logo" />
          <img
            src="images/logo-vector-graphics.png"
            alt="vector-graphics logo"
          />
        </div>
      </section>
      <section id="bottom">
        <div className="section-container my-20">
          <h3>Clipoard for iOS and MacOS</h3>
          <p className="section-content mb-10">
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you're ready to start adding to your clipboard.
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
    </>
  );
};

export default References;
