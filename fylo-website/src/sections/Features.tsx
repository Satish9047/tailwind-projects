const Features = () => {
  return (
    <section id="features" className="pt-12 bg-gray-50 dark:bg-darkBlue1">
      {/* features container */}
      <div className="container mx-auto px-6 pb-32">
        {/* row 1 */}
        <div className="flex flex-col space-y-24 text-center md:flex-row md:space-y-0">
          {/* item 1 */}
          <div className="flex flex-col items-center space-y-2 md:w-1/2">
            <div className="flex item-center justify-center h-24 mb-6">
              <img src="images/icon-access-anywhere.svg" alt="anywhere icon" />
            </div>

            <h3 className="text-xl font-bold">
              Access your file from anywhere
            </h3>
            <p className="max-w-md">
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </div>

          {/* item 2 */}
          <div className="flex flex-col items-center space-y-2 md:w-1/2">
            <div className="flex item-center justify-center h-24 mb-6">
              <img src="images/icon-security.svg" alt="anywhere icon" />
            </div>

            <h3 className="text-xl font-bold">Security you can trust</h3>
            <p className="max-w-md">
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>
        </div>

        {/* row 2 */}
        <div className="flex flex-col mt-28 space-y-24 text-center md:flex-row md:space-y-0">
          {/* item 3 */}
          <div className="flex flex-col items-center space-y-2 md:w-1/2">
            <div className="flex item-center justify-center h-24 mb-6">
              <img src="images/icon-collaboration.svg" alt="anywhere icon" />
            </div>

            <h3 className="text-xl font-bold">
              Access your file from anywhere
            </h3>
            <p className="max-w-md">
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </div>

          {/* item 4 */}
          <div className="flex flex-col items-center space-y-2 md:w-1/2">
            <div className="flex item-center justify-center h-24 mb-6">
              <img src="images/icon-any-file.svg" alt="anywhere icon" />
            </div>

            <h3 className="text-xl font-bold">Security you can trust</h3>
            <p className="max-w-md">
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
