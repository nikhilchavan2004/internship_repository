import  { useState, useEffect } from 'react';

const ApplicationPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const steps = [
    "Click on 'Create an Account' and register yourself by providing your basic details.",
    "After login, proceed to pay Application Form Fees - Rs. 1000",
    "You can use UPI, Internet Banking, Debit Card and Credit Card for making the online payment After successful payment, you need to fill the application form.",
    "Once the application form is submitted, the Admission Department will communicate the GD and PI dates along with FBS's internal aptitude test schedule.",
    "In case you clear the selection process, you will receive the communication from the Admission Department regarding the further registration process."
  ];

  return (
    <div className={`container mx-auto px-4 py-12 md:py-20 transition-all duration-1000 ease-out ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
     
      <div className="relative mb-8">
        <div className={`w-24 h-1 bg-orange-500 mb-4 transition-all duration-700 ease-out ${
          isVisible ? 'w-24 opacity-100' : 'w-0 opacity-0'
        }`} />
        <h1 className={`text-orange-500 font-semibold text-2xl sm:text-3xl md:text-4xl transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}>
          How To Apply?
        </h1>
      </div>

    
      <div className="space-y-6 max-w-4xl">
        
        <div className={`space-y-2 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}>
          <p className="text-base sm:text-lg">
            Visit www.finxl.in and click on apply now or you can directly visit our online admission portal
          </p>
          <p className="text-blue-600 hover:text-blue-700 transition-colors hover:scale-105 transform duration-300">
            www.finxl.in/mba
          </p>
        </div>

        <ul className="space-y-4 pl-4">
          {steps.map((step, index) => (
            <li 
              key={index} 
              className={`flex items-start gap-3 text-base sm:text-lg transition-all duration-500 hover:translate-x-2 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: `${700 + index * 150}ms` }}
            >
              <span className="text-orange-500 font-bold flex-shrink-0 transform transition-transform duration-300 hover:scale-125">✓</span>
              <span>{step}</span>
            </li>
          ))}
        </ul>

        <div className={`text-base sm:text-lg transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
          style={{ transitionDelay: `${1500}ms` }}
        >
          <p>
            The candidates who wish to pursue MBA program have to appear for FBS 2024 Test Schedule on 5th of Every Month in a year or can apply with scores from 2023 onwards of{" "}
            <span className="font-bold hover:text-orange-500 transition-colors duration-300">
              GMAT™/ CAT/ NMAT/ CMAT/ MAT/ MH CET/ XAT.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage;