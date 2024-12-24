const AddmissionPage = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="w-30 max-w-[100px] bg-orange-500 h-1 mx-0 my-5 relative top-3"></div>
      <p className="text-orange-500 font-semibold text-4xl relative -top-1 mx-0">
        Overview
      </p>
      
      <div className="flex flex-col md:flex-row mx-auto gap-6 mt-8">
        <div className="w-full md:w-[60%] h-auto flex flex-col">
          <div className="text-lg text-justify h-auto">
            <p>
              Imagine working on real-life projects, analyzing financial data,
              and developing strategies to drive business growth. You'll have
              the opportunity to work with experienced finance professionals,
              gaining invaluable insights and practical skills that will prepare
              you for a successful career in the finance industry.
            </p>
          </div>
          <div className="w-full md:w-[60rem] h-auto md:h-[20rem] bg-gray-200 relative md:-left-[8rem] px-4 md:px-0">
            <p className="relative md:left-[8rem] md:top-[1rem] text-lg w-full md:w-[46rem] text-justify py-4 md:py-0">
              The Practical MBA program offers a comprehensive approach to
              business education, blending rigorous coursework with practical
              experiences. Participants have the opportunity to gain one year
              of valuable job experience, giving them a competitive edge in the
              job market. Additionally, the program provides certifications
              covering various crucial business areas. Alongside this,
              participants receive focused training in soft skills and other
              valuable sessions. Through hands-on learning & a customizable
              curriculum, participants develop critical thinking & problem
              solving abilities. The program also fosters networking
              opportunities, preparing individuals to thrive in the ever-evolving
              business landscape. Join the Practical MBA to unlock your
              business potential, acquire real-world experience, earn
              certifications, and enhance your soft skills.
            </p>
          </div>
        </div>
        
        <div className="w-full md:w-[60rem] relative min-h-[300px] sm:min-h-[400px] md:min-h-full">
          <div className="relative md:left-[5rem] h-full w-full md:w-[33rem] rounded-lg overflow-hidden transition-transform duration-500 transform hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent z-10"/>
            <img
              src="./public/Admission page Assets/Akhilesh sir.png"
              alt="Akhilesh Sir"
              className="w-full h-full object-cover rounded-lg opacity-0 animate-fadeIn md:relative md:left-[2.3rem]"
            />
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in forwards;
        }
      `}</style>
    </div>
  );
};

export default AddmissionPage;