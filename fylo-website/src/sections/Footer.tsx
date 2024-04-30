const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-darkBlue2 text-white">
      <div className="container mx-auto px-5 pb-10">
        {/* flex container */}
        <div className="flex flex-col justify-between space-y-24 md:flex-row md:space-y-0">
          {/* email */}
          <div className="mt-10 space-y-6">
            <div className="flex flex-items-center space-x-3 md:mt-mt-10">
              <figure className="w-6 my-auto">
                <img
                  src="images/icon-phone.svg"
                  alt="phone icon"
                  className="scale-10"
                />
              </figure>
              <h3>9840252791</h3>
            </div>

            <div className="flex flex-items-center space-x-3 md:mt-mt-10">
              <figure className="w-6 my-auto">
                <img
                  src="images/icon-email.svg"
                  alt="email icon"
                  className="scale-10"
                />
              </figure>
              <h3>satishprajapati930@gmail.com</h3>
            </div>
          </div>
          {/* menus */}
          <div className="flex flex-col space-y-10 text xl md:text-base md:space-x-base md:space-x-20 md:space-y-0 md:flex-row">
            <div className="flex flex-col space-y-3">
              <a href="#">About</a>
              <a href="#">jobs</a>
              <a href="#">Press</a>
              <a href="#">blog</a>
            </div>
            <div className="flex flex-col space-y-3">
              <a href="#">Contact Us</a>
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
            </div>
          </div>

          {/* social media */}
          <div className="flex justify-center pb-10 space-x-3">
            <div>
              <a href="#">
                <img
                  src="images/facebook.svg"
                  alt="facebook icon"
                  className="p-2 bg-darkblue rounded-full ficon"
                />
              </a>
            </div>
            <div>
              <a href="#">
                <img
                  src="images/instagram.svg"
                  alt="instagram icon"
                  className="p-2 bg-darkblue rounded-full ficon"
                />
              </a>
            </div>
            <div>
              <a href="#">
                <img
                  src="images/twitter.svg"
                  alt="twitter icon"
                  className="p-2 bg-darkblue rounded-full ficon"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-28">
          <p className="text-center text-white text-xs">
            Copyright &#169; {year} All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
