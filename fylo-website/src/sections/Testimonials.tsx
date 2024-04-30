const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-50 dark:bg-darkBlue">
      <div className="container mx-auto px-6 pt-12 pb-80 md:pb-96">
        {/* box container */}
        <div className="relative flex flex-col w-full space-y-5 md:flex-row md:space-y-0 md:space-x-12">
          {/* Quotes images */}
          <img
            src="images/bg-quotes.png"
            alt=""
            className="absolute left-1 -top-2 w-10 md:-top-16 md:w-20"
          />
          {/* box 1 */}
          <div className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 md:w-1/3">
            <p className="text-sm leading-5 md:text-lg">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            {/* customer Info */}

            <div className="flex space-x-4">
              <img
                src="images/profile-1.jpg"
                alt="testimonial-user"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h5 className="text-sm font-semibold">Satish Prajapti</h5>
                <p className="text-xs font-extralight">Founder & CEO of Fylo</p>
              </div>
            </div>
          </div>

          {/* box 2 */}
          <div className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 md:w-1/3">
            <p className="text-sm leading-5 md:text-lg">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            {/* customer Info */}

            <div className="flex space-x-4">
              <img
                src="images/profile-2.jpg"
                alt="testimonial-user"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h5 className="text-sm font-semibold">Bikesh Bhaila</h5>
                <p className="text-xs font-extralight">
                  Founder & CEO of KT Solution
                </p>
              </div>
            </div>
          </div>

          {/* box 3 */}
          <div className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 md:w-1/3">
            <p className="text-sm leading-5 md:text-lg">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            {/* customer Info */}

            <div className="flex space-x-4">
              <img
                src="images/profile-3.jpg"
                alt="testimonial-user"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h5 className="text-sm font-semibold">Kriti Khoteja</h5>
                <p className="text-xs font-extralight">
                  Founder & CEO of Newa Wears
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
