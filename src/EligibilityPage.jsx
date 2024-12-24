import { useState, useEffect } from 'react';

const EligibilityPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <div className={`my-20 text-justify max-w-full overflow-x-hidden flex-row transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className={`w-30 max-w-[100px] bg-orange-500 h-1 mx-0 my-5 relative top-3 left-8 sm:left-16 md:left-24 lg:left-32
          transition-all duration-700 transform ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}
        ></div>
        <p className={`text-orange-500 font-semibold text-2xl sm:text-3xl md:text-4xl relative -top-1 left-6 sm:left-14 md:left-20 lg:left-28 mx-0 px-4
          transition-all duration-700 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'}`}>
          Eligibily Criteria
        </p>
      </div>
      <div className="relative">
        <ul className="relative sm:left-16 md:left-16 lg:left-32 flex-col max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] z-10">
          {[
            "Graduation Degree In Any Stream.",
            "B.COM/ M.COM Students",
            "BBA/ BCA/ MCA Students",
            "CAT/MAT/XAT/MH-CET/CET/CMAT Aspirants & Coaching Classes.",
            "Bachelor of Arts (BA) / Master of Arts (MA).",
            "BE/ B.TECH/ M.TECH",
            "Bachelor of Science (B.Sc) / Master of Science (M.Sc)",
            "CA Aspirant Students",
            "Consultant, Counsellors"
          ].map((text, index, array) => (
            <li
              key={index}
              className={`relative bg-white transition-all duration-700 transform
                ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start my-3 group hover:bg-orange-50 rounded-lg p-2 transition-all duration-300">
                <div className="w-6 h-6 rounded-full border-2 border-orange-500 flex items-center justify-center mr-2 flex-shrink-0
                  group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <span className="text-orange-500 text-sm font-bold group-hover:text-white">✓</span>
                </div>
                <span className="text-base sm:text-lg group-hover:text-orange-600 transition-colors duration-300">{text}</span>
              </div>
              {index !== array.length - 1 && (
                <div className="border-b border-dotted border-gray-400 w-[40rem] my-2"></div>
              )}
            </li>
          ))}
        </ul>
        <div className={`block lg:hidden relative mt-8 transition-all duration-1000 transform 
          ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[50px] opacity-0'}`}>
          <div className="relative
            w-[300px] sm:w-[400px] md:w-[450px]
            h-[300px] sm:h-[400px] md:h-[450px]
            left-4 sm:left-24 md:left-48
            overflow-hidden rounded-lg
            hover:shadow-2xl transition-shadow duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent mix-blend-overlay pointer-events-none" />
            <img
              src="./Admission page Assets/img3.jpg"
              alt="success"
              className="w-full h-full object-cover md:bg-white md:opacity-100 transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
        <div className={`hidden lg:block relative sm:mt-0 sm:left-[300px] md:left-[400px] lg:left-[600px] z-0
          transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[50px] opacity-0'}`}>
          <div className="relative
            w-[500px]
            h-[500px]
            bottom-[500px]
            left-96
            overflow-hidden rounded-lg
            hover:shadow-2xl transition-shadow duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent mix-blend-overlay pointer-events-none" />
            <img
              src="./Admission page Assets/img3.jpg"
              alt="success"
              className="w-full h-full object-cover md:bg-white md:opacity-100 transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EligibilityPage;