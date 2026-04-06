import ProfileClusterSection from "../components/ProfileCard";

const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 md:pt-24 md:pb-2 flex flex-col items-center relative overflow-hidden mt-10  text-black  z-10">
      {/* Headline */}
      <div className="head max-w-7xl mx-auto relative flex flex-col justify-center items-center px-6">
        <h1 className="font-gerbil font-[400px] text-[30px] md:text-[50px] lg:text-[60px]  md:leading-24 tracking-tight relative flex flex-col lg:leading-28 leading-13 xl:text-[80px] xl:leading-[126px]">
          <div className="text-center">
            The{" "}
            <span className="relative">
              thinkers
              <svg
                className="pointer-events-none absolute -bottom-1 left-0 w-full overflow-hidden [aspect-ratio:595/56] -z-10"
                viewBox="0 0 595 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden={true}
              >
                <path
                  d="M72.1335 3H538.634L0.133545 27H594.134L293.134 53"
                  stroke="#FFC250"
                  strokeWidth={6}
                />
              </svg>
            </span>
            <span> and</span>
          </div>
          <div className="text-center">
            {" "}
            doers were ch
            <span className="bg-[#FFC2EA] rounded-full -z-10  px-2">
              anging
            </span>{" "}
          </div>

          <div className="text-center">
            <span className="relative inline-block px-4 py-1.5 bg-secondary rounded-full z-10">
              the{" "}
              <span className="bg-[#D7EEDD] inset-0  rounded-full px-2 -z-10">
                status
              </span>{" "}
              Quo
            </span>{" "}
            with
          </div>

          <img
            src="/projects/Ellipse 736.png"
            className="absolute top-30 lg:top-40 bottom-0 -right-10 w-10 md:-right-20 md:w-20 lg:w-25 lg:-right-30 hidden sm:block"
          />
        </h1>

        {/* Sub-headline */}
        <p className="mt-0 text-center text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed lg:mt-15">
          We are a team of strategists, designers, communicators, researchers.
          Together, we believe that progress only happens when you refuse to
          play things safe.
        </p>
      </div>

      <img
        src="/projects/Vector 2510.png"
        className="absolute hidden md:block top-100 w-15 lg:top-70 lg:w-20 bottom-0 left-0 -z-10"
      />
      <img
        src="/projects/Vector 2511.png"
        className="absolute hidden md:block top-100 lg:top-70 w-17 lg:w-20 bottom-0 left-10 -z-10"
      />
      <ProfileClusterSection />
    </section>
  );
};

export default HeroSection;
