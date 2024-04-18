const SuperCharge = () => {
  return (
    <section id="supercharge">
      <div className="section-container my-20">
        <h3>Supercharge your work flow</h3>
        <p className="section-content mb-16">
          We've got the tools to boost your productivity.
        </p>

        {/* items cantainer */}
        <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
          {/* item 1 */}
          <div className="flex flex-col items-center space-y-5">
            <img className="mb-6" src="images/icon-blacklist.svg" alt="icon" />
            <h5>Create Blacklists</h5>
            <p className=" max-w--md text-grayishBlue">
              Easily search your sippets by content, category, web address,
              application, and more.
            </p>
          </div>

          {/* item 2 */}
          <div className="flex flex-col items-center space-y-5">
            <img className="mb-6" src="images/icon-text.svg" alt="icon" />
            <h5>Plain Text Snppents</h5>
            <p className=" max-w--md text-grayishBlue">
              Remove unwanted formatting from copied text for a consistennt look
            </p>
          </div>

          {/* item 3 */}
          <div className="flex flex-col items-center space-y-5">
            <img className="mb-6" src="images/icon-preview.svg" alt="icon" />
            <h5>Sneak Preview</h5>
            <p className=" max-w--md text-grayishBlue">
              Quick preview od all snippets on your Clipboard for easy access
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperCharge;
