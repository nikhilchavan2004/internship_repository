const Page7 = () => {
    return (
      <div>
        <div className="w-96 max-w-[100px] bg-orange-500 h-1 mx-0 my-5 relative top-3 left-8 sm:left-16 md:left-24 lg:left-32 xl:left-36"></div>
        
        {/* Fees Structure heading */}
        <p className="text-orange-500 font-semibold text-2xl sm:text-3xl md:text-4xl relative -top-1 left-6 sm:left-14 md:left-20 lg:left-28 xl:left-32 mx-0 px-4">
          Educational Loan
        </p>
        
        <p className="text-center text-2xl sm:text-3xl font-bold text-orange-500 my-8 sm:my-12">
          We Accept :-
        </p>
        
       
        <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-4 px-4 sm:px-6 md:px-8">
          <img src="./Admission page Assets\Payment icon\Paytm.png" className="h-12 sm:h-15 lg:h-20 w-[6rem] lg:w-24" alt="Paytm" />
          <img src="./Admission page Assets\Payment icon\Gpay.png" className="h-16 sm:h-20 lg:h-20 w-[6rem] lg:w-24" alt="GPay" />
          <img src="./Admission page Assets\Payment icon\bhim.png" className="h-16 sm:h-20 lg:h-20 w-[6rem] lg:w-24" alt="BHIM" />
          <img src="./Admission page Assets\Payment icon\SBI.png" className="h-16 sm:h-20 lg:h-20 w-[6rem] lg:w-24" alt="SBI" />
          <img src="./Admission page Assets\Payment icon\Jio.png" className="h-16 sm:h-20 lg:h-20 w-[6rem] lg:w-24" alt="Jio" />
          <img src="./Admission page Assets\Payment icon\PhonP.png" className="h-16 sm:h-20 lg:h-20 w-[6rem] lg:w-24" alt="PhonePe" />
          <img src="./Admission page Assets\Payment icon\Paypal.png" className="h-16 sm:h-20 lg:h-20 w-[6rem] lg:w-24" alt="PayPal" />
          <img src="./Admission page Assets\Payment icon\Mastercard.png" className="h-16 sm:h-20 lg:h-20 w-[6rem] lg:w-24" alt="Mastercard" />
          <img src="./Admission page Assets\Payment icon\Paypal.png" className="h-16 sm:h-20 lg:h-20 w-[6rem] lg:w-24" alt="PayPal" />
          <img src="./Admission page Assets\Payment icon\Maestro.png" className="h-16 sm:h-20 lg:h-20 w-[6rem] lg:w-24" alt="Maestro" />
          <img src="./Admission page Assets\Payment icon\Amrican xpres.png" className="h-16 sm:h-20 lg:h-20 w-[6rem] lg:w-24" alt="American Express" />
        </div>
  
        <div className="w-full h-auto sm:h-[3.4rem] relative my-7 bg-orange-700 flex items-center justify-center shadow-lg text-center py-3 sm:py-0">
          <p className="text-white text-xl sm:text-2xl font-bold px-4">
            <span className="mx-auto my-auto relative bottom-2 right-3 text-3xl sm:text-4xl">.</span>
            FULL FEES PAYMENT STRUCTURE
          </p>
        </div>
  
        <ul className="text-center px-4 sm:px-0">
          <li className="relative right-0 sm:right-10 mb-4">
            <span className="text-5xl sm:text-6xl text-orange-500 relative bottom-1 right-1">.</span>
            It can be revised as per institutional norms.
          </li>
          <li className="relative left-0 sm:left-[5rem]">
            <span className="text-5xl sm:text-6xl text-orange-500 right-1">.</span>
            The student can also pay the amount in installments (3–12 months maximum)
            <p className="relative left-0 sm:-left-[6rem] mt-2">
              (Any applicable interest will be paid by students.)
            </p>
          </li>
        </ul>
      </div>
    );
  };
  
  export default Page7;