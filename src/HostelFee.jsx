const HostelFee = () => {
  return (
    <div className="relative top-28">
      <div className="block lg:flex">
        <div>
          <div className="w-96 max-w-[100px] bg-orange-500 h-1 mx-0 my-5 relative top-3 left-8 sm:left-16 md:left-24 lg:left-32 xl:left-36 animate-[slideIn_0.5s_ease-out]"></div>
          
          <p className="text-orange-500 font-semibold text-2xl sm:text-3xl md:text-4xl relative -top-1 left-6 sm:left-14 md:left-20 lg:left-28 xl:left-32 mx-0 px-4 animate-[fadeIn_0.8s_ease-out]">
            Hostel Fee
          </p>

          <p className="text-center lg:text-left lg:relative lg:left-[15rem] mt-5 lg:mt-0 lg:top-5 animate-[fadeIn_1s_ease-out]">
            What Are Include In this Hostel Fee Structure
          </p>

          <div className="mx-auto w-fit lg:mx-0 lg:relative lg:left-[15rem] mt-6 lg:mt-0 lg:top-9 font-bold text-white animate-[slideUp_0.8s_ease-out]">
            <div className="w-[20rem] h-12 bg-orange-600 text-center hover:bg-orange-700 transition-colors duration-300">
              <span className="relative top-2">
                Hostel + Food 1st Year Fees
              </span>
            </div>
            <div
              className="w-[20rem] h-12 text-center hover:bg-blue-950 transition-colors duration-300"
              style={{ backgroundColor: "rgb(0, 0, 80)" }}
            >
              <span className="relative top-2">1,20,000</span>
            </div>
          </div>

          <div className="w-full px-4 lg:px-0 lg:w-[40rem] mt-8 lg:mt-0 lg:relative lg:left-[15rem] lg:top-[6rem] text-justify animate-[fadeIn_1.2s_ease-out]">
            <p className="font-bold">Hostels - Home Away from Home</p>
            <br />
            <p>
              Choosing a University is also about choosing a new home. We ensure
              that students dwell in a healthy environment that helps them to
              grow and learn without any obstacle.
            </p>
            <p className="mt-4">
              Chandigarh University Campus has separate hostels for boys and
              girls with all modern facilities and attached mess. The hostel
              mess serves fresh and hygienic food. You will be provided with
              facilities like internet, music room, and common room with TV &
              cable facility, salon facilities, room for indoor games and a
              reading room with a collection of national/international
              newspapers, magazines, etc. The hostels' houses have a fully
              equipped gym and separate courts for Volleyball, Basket Ball, and
              Badminton. The concerned and highly experienced staff looks after
              the university assets and ensures that the hostel remains
              responsive all the time.
            </p>
            <span className="text-orange-600 font-bold block relative top-3 hover:text-orange-700 transition-colors duration-300">
              Hostel Helpline:
            </span>
            <p className="my-3">Girl's Hostel: 9012345678</p>
          </div>
        </div>

        <div className="relative lg:left-[18rem] lg:top-11 w-full lg:w-[43rem] mt-8 lg:mt-0 overflow-hidden animate-[fadeIn_1.5s_ease-out] group">
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent mix-blend-overlay pointer-events-none group-hover:from-black/30 transition-all duration-300" />
          <img
            src="./Admission page Assets/img5.jpg"
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center lg:justify-start lg:relative lg:left-[25rem] lg:bottom-[8rem] gap-3 mt-8 lg:mt-0">
        {[4, 3, 2, 1].map((num, index) => (
          <img
            key={num}
            src={`./Admission page Assets/Hostel fee icon/h${num}.png`}
            alt=""
            className="h-[5rem] w-[5rem] hover:scale-110 transition-transform duration-300 animate-[fadeIn_0.5s_ease-out]"
            style={{ animationDelay: `${index * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
};

const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes slideIn {
    from { transform: translateX(-100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`;
document.head.appendChild(style);

export default HostelFee;