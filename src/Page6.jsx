const Page6 = () => {
    return (
      <div className="p-4">
        <div className="w-96 max-w-[100px] bg-orange-500 h-1 mx-0 my-5 relative top-3 left-8 sm:left-16 md:left-24 lg:left-32 xl:left-36"></div>
  
        
        <p className="text-orange-500 font-semibold text-2xl sm:text-3xl md:text-4xl relative -top-1 left-6 sm:left-14 md:left-20 lg:left-28 xl:left-32 mx-0 px-4">
          Fees Structure
        </p>
        
        <div className="w-full h-[3rem] my-8 bg-orange-500 flex items-center justify-center">
          <p className="text-white text-2xl font-bold">
            FULL FEES PAYMENT STRUCTURE
          </p>
        </div>
  
      
        <table className="w-full table-fixed  text-center relative bottom-8">
          <thead className="h-[6rem] ">
            <tr className="bg-gray-200">
              <th className="w-1/3 p-2 border border-black">Particular</th>
              <th className="w-1/3 p-2 border border-black">Tuition Fee Structure <p className="font-normal">(Without Hostel)</p></th>
              <th className="w-1/3 p-2 border border-black">Tuition Fee Structure <p className="font-normal">(With Hostel)</p></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-black">Registration Fees</td>
              <td className="p-2 border border-black">Rs. 50,000</td>
              <td className="p-2 border border-black">Rs. 50,000</td>
            </tr>
            <tr>
              <td className="p-2 border border-black">Program Duration</td>
              <td className="p-2 border border-black">4 Semesters</td>
              <td className="p-2 border border-black">4 Semesters</td>
            </tr>
            <tr>
              <td className="p-2 border border-black">Tuition Fees 1st Year</td>
              <td className="p-2 border border-black">Rs. 3,00,000</td>
              <td className="p-2 border border-black">Rs. 3,00,000</td>
            </tr>
            <tr>
              <td className="p-2 border border-black">Tuition Fees 2nd Year</td>
              <td className="p-2 border border-black">Rs. 3,00,000</td>
              <td className="p-2 border border-black">Rs. 3,00,000</td>
            </tr>
            <tr>
              <td className="p-2 border border-black">Hostel+Food 1st Year Fees</td>
              <td className="p-2 border border-black"> - </td>
              <td className="p-2 border border-black">Rs. 120,000</td>
            </tr>
            <tr className="text-white bg-purple-950">
              <td className="p-2 font-bold border border-black">Total Fees</td>
              <td className="p-2 font-bold border border-black">Rs. 650,000</td>
              <td className="p-2 font-bold border border-black">Rs. 770,000</td>
            </tr>
          </tbody>
        </table>
        <div className="text-center ">
            
           <p>
           Registration fee Rs. 50,000 (non-refundable)
           </p>
           <div className="border-b border-dotted border-gray-400  w-[60rem] mx-auto my-2"></div>
           <p>
           First Installment Rs. 3,00,000 (At the time of admission)
           </p> <div className="border-b border-dotted border-gray-400 w-[60rem]  mx-auto my-2"></div>
           

<p>
Second Installment Rs. 3,00,000 (Start of Third semester)
<div className="border-b border-dotted border-black  w-[60rem] mx-auto my-2"></div>

</p>
           
           

        </div>
      </div>
    );
  };
  
  export default Page6;
  