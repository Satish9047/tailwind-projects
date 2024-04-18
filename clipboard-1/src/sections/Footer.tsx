const Footer = () => {
  return (
    <section id="footer" className="bg-gray-50">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* image */}
          <img
            className="scale-50"
            src="images/logo.svg"
            alt="clipboard logo"
          />

          {/* container for menus and social */}
          <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
            {/* menus */}
            <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
              {/* menu 1 */}
              <div className="flex flex-col space-y-4 text-center md:text--left">
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    FAQs
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    Contact Us
                  </a>
                </div>
              </div>
              {/* menu 2 */}
              <div className="flex flex-col space-y-4 text-center md:text--left">
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    Privacy Policy
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    Press Kit
                  </a>
                </div>
              </div>
              {/* menu 3 */}
              <div className="flex flex-col space-y-4 text-center md:text--left">
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    Install Guide
                  </a>
                </div>
              </div>
            </div>
            {/* social Icons */}
            <div className="flex justify-between w-32 py-1">
              <a href="#">
                <img
                  className="duration-200 ficon"
                  src="images/icon-facebook.svg"
                  alt="facebook logo"
                />
              </a>
              <a href="#">
                <img
                  className="duration-200 ficon"
                  src="images/icon-twitter.svg"
                  alt="twitter logo"
                />
              </a>
              <a href="#">
                <img
                  className="duration-200 ficon"
                  src="images/icon-instagram.svg"
                  alt="instagram logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
