const Features = () => {
  return (
    <section id="features">
      <div className="section-container my-20 px-10">
        <div className=" relative flex flex-col md:flex-row md:space-x-32">
          {/* image  */}
          <figure className="md:w-1/2">
            <img
              className="md:absolute top-0 right-[50%]"
              src="images/image-computer.png"
              alt="computer img"
            />
          </figure>

          {/* item container */}
          <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16 ">
            {/* item 1 */}
            <div>
              <h5>Ouick Search</h5>
              <p className="max-w-md text-grayishBlue">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>

            {/* item 2 */}
            <div>
              <h5>ICloud Sync</h5>
              <p className="max-w-md text-grayishBlue">
                Instantly saves and syncs snippets across all your devices.
              </p>
            </div>

            {/* item 3 */}
            <div>
              <h5>Compeletely History</h5>
              <p className="max-w-md text-grayishBlue">
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
