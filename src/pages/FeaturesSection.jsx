

const FeaturesSection = () => {
  const features = [
    {
      desc: "Office of multiple interest content",
      title: "Collaborative & partnership",
    },
    {
      desc: "The hanger US Air force digital experimental",
      title: "We talk about our weight",
    },
    {
      desc: "Delta faucet content, social, digital",
      title: "Piloting digital confidence",
    },
  ];

  return (
    <section id="Services" className="relative w-full py-24 px-6 md:px-20 lg:mt-40 ">
      
<div className="absolute -top-25 right-0 w-full lg:w-1/2 h-full pointer-events-none z-0 overflow-visible">
  <img 
    src="/projects/Vector 2516 (1).png" 
    alt="" 
    className="hidden lg:block w-full h-auto object-contain object-top lg:-translate-y-[25%] xl:-translate-y-[25%] 2xl:-translate-y-[35%]"
  />
</div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading Area */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-gerbil font-[400px] leading-12 md:leading-19 text-gray-900 text-start">
            What we{' '}
            <span className="bg-[#D7EEDD] px-6 py-1 rounded-full inline-block">
              can
            </span>
            <br />
            <span className="relative inline-block mt-2">
              offer you!
              
              <img 
                src="/projects/Vector 5.png" 
                className="absolute -z-10 -bottom-3 left-0 w-[80%] md:w-full h-auto" 
                alt="" 
              />
            </span>
          </h2>
        </div>

        {/* Features List */}
        <div className="border-t border-gray-300">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="group border-b border-gray-300 py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-8 items-center hover:bg-gray-50 transition-colors cursor-pointer px-4"
            >
              {/* Left: Small Description */}
              <div className="md:col-span-3">
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-[180px]">
                  {item.desc}
                </p>
              </div>

              {/* Center: Large Feature Title */}
              <div className="md:col-span-8">
                <h3 className="sm:text-[30px] text-4xl md:text-[50px] font-gerbil font-[400px] text-gray-900 tracking-tight">
                  {item.title}
                </h3>
              </div>

              {/* Right: Arrow Icon */}
              <div className="md:col-span-1 flex justify-end">
                <div className="w-12 h-12 flex items-center justify-center group-hover:translate-x-2 transition-transform duration-300">
                  <svg 
                    width="48" 
                    height="12" 
                    viewBox="0 0 48 12" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-gray-900"
                  >
                    <path d="M0 6H46M46 6L41 1M46 6L41 11" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;