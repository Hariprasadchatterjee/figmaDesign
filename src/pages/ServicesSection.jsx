const ServicesSection = () => {
  return (
    <div className="relative w-full  bg-white font-satoshi  mb-10  px-6 md:px-20">
      {/* Background Decorative Wavy Line */}
      <img
        src="/projects/Vector 2517.png"
        alt="Wavy line"
        className="absolute hidden md:block top-1/2 left-0 w-full z-0 opacity-80 pointer-events-none transform -translate-y-1/2"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="absolute  md:hidden lg:block right-20 md:top-10 md:left-150  w-20 h-30 bg-[#FF2020] rounded-full blur-3xl" />
        {/* --- TOP SECTION --- */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-32">
          {/* Text Content */}
          <div className="w-full md:w-3/4 space-y-6">
            <h1 className="text-3xl md:text-5xl font-gerbil font-[400px] leading-12 md:leading-19 text-gray-900">
              <span className="relative inline-block">
                Tomorrow
                <img
                  src="/projects/Vector 5.png"
                  className="absolute -bottom-1 -z-10 left-0 w-full"
                  alt="underline"
                />
              </span>{" "}
              should
              <br />
              be better than{" "}
              <span className="bg-[#D7EEDD] rounded-full px-4">today</span>
            </h1>
            <p className="text-gray-600 max-w-md text-lg leading-relaxed">
              We are a team of strategists, designers, communicators,
              researchers. Together, we believe that progress happens when you
              refuse to play things safe.
            </p>
            <button className="flex items-center gap-4 text-gray-900 font-semibold group hover:text-red-500 transition-colors">
              Read more <img src="/projects/Arrow 4.png" alt="readmore" />
            </button>
          </div>

          {/* Image with Decorative Square */}
          <div className="relative w-full md:w-[450px] aspect-square mt-12 md:mt-0">
            {/* Red Square (Polygon 3) */}
            <img
              src="/projects/Polygon 3.png"
              className="absolute top-5 -right-4 md:-right-20 w-25 md:w-48 z-0 rotate-8 md:rotate-12"
              alt="Decoration"
            />
            {/* Profile Circle */}
            <div className="relative z-10 w-full h-full rounded-full  shadow-2xl overflow-hidden">
              <img
                src="/servicesImages/image 348.png"
                className="w-full h-full object-cover"
                alt="Team meeting"
              />
            </div>
          </div>
        </div>

        {/* --- BOTTOM SECTION --- */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between">
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6 md:pl-20">
            <h2 className="text-3xl md:text-5xl font-gerbil font-[400px] leading-12 md:leading-19 text-gray-900 text-start">
              {/* Line 1 */}
              <span className="block mb-2">
                <span className="bg-[#D7EEDD] px-1 mr-1 rounded-full  inline-block">
                  See {" "}
                </span>
                how we can
              </span>

              {/* Line 2 */}
              <span className="block">
                help you{" "}
                <span className="relative inline-block">
                  progress
                  <img
                    src="/projects/Vector 5.png"
                    className="absolute -bottom-1 -z-10 left-0 w-full h-auto pointer-events-none"
                    alt="underline"
                  />
                </span>
              </span>
            </h2>
            <p className="text-gray-600 max-w-md text-lg leading-relaxed">
              We add a layer of fearless insights and action that allows change
              makers to accelerate their progress in areas such as brand,
              design, digital, comms and social research.
            </p>
            <button className="flex items-center gap-4 text-gray-900 font-semibold group hover:text-red-500 transition-colors">
              Read more{" "}
              <img src="/projects/Arrow 4.png" alt="readmore" />
            </button>
          </div>

          {/* Image with Decorative Triangles */}
          <div className="relative w-full md:w-[450px] aspect-square mt-12 md:mt-0">
            {/* Top Left Triangle (Polygon 1) */}
            <img
              src="/projects/Polygon 1 (1).png"
              className="absolute top-4 left-0 w-24 md:w-32 z-0 rotate-8"
              alt="Decoration"
            />
            {/* Bottom Right Triangle (Polygon 2) */}
            <img
              src="/projects/Polygon 2.png"
              className="absolute bottom-0 md:-bottom-10 right-0 w-24 md:w-40 z-20 rotate-0"
              alt="Decoration"
            />
            {/* Profile Circle */}
            <div className="relative z-10 w-full h-full rounded-full shadow-2xl overflow-hidden">
              <img
                src="/servicesImages/image 348 (1).png"
                className="w-full h-full object-cover"
                alt="Working together"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
