
const TestimonialsSection = () => {
  const avatars = [
    // Left side
    { src: "/testimonial/Ellipse 263.png", size: "w-26", top: "20%", left: "10%" },
    { src: "/testimonial/Ellipse 266.png", size: "w-15", top: "45%", left: "5%" },
    { src: "/testimonial/Ellipse 268.png", size: "w-48", top: "55%", left: "12%" },
    { src: "/testimonial/Ellipse 267.png", size: "w-24", top: "80%", left: "8%" },
    
    // Right side
    { src: "/testimonial/Ellipse 270.png", size: "w-25", top: "30%", right: "15%" },
    { src: "/testimonial/Ellipse 264.png", size: "w-16", top: "20%", right: "5%" },
    { src: "/testimonial/Ellipse 265.png", size: "w-20", top: "50%", right: "10%" },
    { src: "/testimonial/Ellipse 269.png", size: "w-48", top: "70%", right: "8%" },
  ];

  return (
    <section className="relative w-full py-20 px-6 overflow-hidden bg-white">
      {/* Floating Avatars*/}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className={`absolute rounded-full border-4 border-white shadow-lg overflow-hidden ${avatar.size} aspect-square`}
            style={{
              top: avatar.top,
              left: avatar.left,
              right: avatar.right,
            }}
          >
            <img src={avatar.src} alt="Client" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Header */}
        <h2 className="text-4xl md:text-[56px] font-gerbil font-[400px] text-gray-900 mb-16 leading-[66px]">
          <span className="bg-[#D7EEDD] px-4 py-1 rounded-full inline-block mr-2">
            What
          </span>
          our customer <br />
          says 
          <span className="relative inline-block ml-3">
            About Us
            <img 
              src="/projects/Vector 5.png" 
              className="absolute -z-10 bottom-0 md:-bottom-3 left-0 w-full h-auto" 
              alt="underline" 
            />
          </span>
        </h2>

        {/* Testimonial Card */}
        <div className="relative bg-[#F4F9F5] rounded-[40px] p-8 md:p-16 shadow-sm">
          {/* Top Quote Icon */}
          <div className="absolute top-4 -left-5 w-15 md:w-20 md:top-8 md:left-8 text-[#CDE3D4]">
            <img src="/projects/comma (1).png" alt="comma" />
          </div>

          <p className="text-gray-700 text-lg md:text-[30px] leading-[42px] md:px-10 font-[satoshi]">
            Elementum delivered the site within the timeline as they requested. In the end, the client found a 50% increase in traffic within days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable.
          </p>

          {/* Bottom Quote Icon */}
          <div className="absolute bottom-4 -right-3 text-[#CDE3D4] rotate-180 w-15 md:w-20 md:bottom-8 md:right-15">
            <img className="rotate-180" src="/projects/comma (2).png" alt="comma" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;