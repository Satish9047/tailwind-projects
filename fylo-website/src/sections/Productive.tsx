const Productive = () => {
  return (
    <section id="productive" className="bg-white dark:bg-darkBlue">
      {/* productive container */}
      <div className="container flex flex-col items-cennter mx-auto px-6 pt-24 pb-32 md:flex-row d:space-x-16">
        {/* image */}
        <div className="md:w-1/2">
          <img
            src="/images/illustration-stay-productive.png"
            alt="productive image"
            className="mb-10"
          />
        </div>
        {/* content */}
        <div className="flex flex-col items-start md:w-1/2">
          <div className="flex flex-col space-y-5">
            <h4 className="max-w-md text-xl font-bold md:text-4xl">
              Stay productive, wherever you are
            </h4>
            <p className="text-md md:test-lg">
              Never let location be an issues when accessing your files. Fylo
              has you covered for all of your file storage needs.
            </p>
            <p className="text-md md:test-lg">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>
          {/* link */}
          <div className="block mt-4">
            <a href="#" className="border-b border-accentCyan text-accentCyan">
              See how Flyo workes
              <img
                src="images/icon-arrow.svg"
                alt="arrow icon"
                className="inline pl-2"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productive;
