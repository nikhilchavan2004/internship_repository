

const InfiniteScrollGrid = () => {
  const images = [
    "./Admission page Assets/company_logos/4.jpg",
    "./Admission page Assets/company_logos/2560px-J_P_Morgan_Logo_2008_1.svg.png",
    "./Admission page Assets/company_logos/2560px-KPMG_logo.svg.png",
    "./Admission page Assets/company_logos/UPL logo.png",
    "./Admission page Assets/company_logos/1280px-Deloitte.svg.png",
    "./Admission page Assets/company_logos/Accenture-logo.png",
    "./Admission page Assets/company_logos/Moodys-Analytics_.png",
    "./Admission page Assets/company_logos/hitachi-logo.png",
    "./Admission page Assets/company_logos/Infosys_logo.png",
    "./Admission page Assets/company_logos/Northern trust.png",
    "./Admission page Assets/company_logos/TCS_NewLogo.png",
    "./Admission page Assets/company_logos/Tech_Mahindra logo.png",
    "./Admission page Assets/company_logos/Capgemini_201x_logo.svg.png",
    "./Admission page Assets/company_logos/bmc-removebg-preview.png",
    "./Admission page Assets/company_logos/tu-removebg-preview.png",
  ];

  // Split images into three rows
  const firstRow = images.slice(0, 5);
  const secondRow = images.slice(5, 10);
  const thirdRow = images.slice(10);

  const LogoRow = ({ images, direction }) => (
    <div className={`flex whitespace-nowrap ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'} hover:pause py-4 md:py-8`}>
      <div className="flex gap-[1rem] md:gap-[1rem]">
        {[...images, ...images].map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-44 md:w-64 h-24 md:h-32 flex justify-center items-center bg-white rounded-lg p-2 md:p-4 shadow-md 
                      transition-all duration-300 ease-in-out transform 
                      hover:shadow-2xl hover:scale-110 hover:z-10 hover:bg-gray-50"
          >
            <div className="w-[8rem] h-[8rem] flex items-center justify-center">
              <img
                src={src}
                alt={`logo ${index + 1}`}
                className="w-full h-auto max-h-16 md:max-h-20 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative top-[20rem] w-full overflow-hidden">
      <style jsx global>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes scroll-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        
        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right 60s linear infinite;
        }
        
        .hover:pause:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="px-4 md:px-8">
        <p className="text-2xl md:text-4xl text-orange-600 font-bold">
          Our Leading Recruiters
        </p>
        <div className="w-[20rem] sm:w-[30rem] md:w-[35rem] h-[0.05rem] bg-orange-400"></div>
        <p className="my-2 md:my-3 text-base md:text-lg">
          Institutional alliances with leading companies to ensure a strong bonding with the industry and many more...
        </p>
      </div>

      <div className="mt-2 md:mt-15">
        <div className="overflow-hidden my-8 md:my-12 ">
          <LogoRow images={firstRow} direction="left" />
        </div>
        <div className="overflow-hidden my-8 md:my-12 relative lg:bottom-[6rem] sm:bottom-[1.5rem] md:bottom-[6rem]">
          <LogoRow images={secondRow} direction="right" />
        </div>
        <div className="overflow-hidden my-8 md:my-12 relative lg:bottom-[12rem] sm:bottom-[3rem] md:bottom-[12rem] ">
          <LogoRow images={thirdRow} direction="left" />
        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollGrid;