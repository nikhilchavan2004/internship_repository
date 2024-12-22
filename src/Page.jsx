const Page = () => {
  return (
    <div className="relative top-28">
      <div className="flex">
        <div>
          <div className="w-96 max-w-[100px] bg-orange-500 h-1 mx-0 my-5 relative top-3 left-8 sm:left-16 md:left-24 lg:left-32 xl:left-36"></div>

          {/* Fees Structure heading */}
          <p className="text-orange-500 font-semibold text-2xl sm:text-3xl md:text-4xl relative -top-1 left-6 sm:left-14 md:left-20 lg:left-28 xl:left-32 mx-0 px-4">
            Hostel Fee
          </p>

          <p className="relative left-[15rem] top-5">
            What Are Include In this Hostel Fee Structure
          </p>

          <div className="mx-auto relative left-[15rem] top-9 font-bold text-white">
            <div className="w-[20rem] h-12 bg-orange-600 text-center">
              <span className="relative top-2">
                Hostel + Food 1st Year Fees
              </span>
            </div>
            <div
              className="w-[20rem] h-12 text-center"
              style={{ backgroundColor: "rgb(0, 0, 80)" }}
            >
              <span className="relative top-2">1,20,000</span>
            </div>
          </div>

          <div className="w-[40rem] relative left-[15rem] top-[6rem] text-justify">
            <p className="font-bold">Hostels - Home Away from Home</p>
            <br />
            <p>
              Choosing a University is also about choosing a new home. We ensure
              that students dwell in a healthy environment that helps them to
              grow and learn without any obstacle.
            </p>
            <p>
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
            <span className="text-orange-600 font-bold relative top-3">
              Hostel Helpline:
            </span>
            <p className="my-3">Girl's Hostel: 9012345678</p>
          </div>
        </div>

        <div className="relative left-[18rem] top-11 w-[43rem] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent mix-blend-overlay pointer-events-none" />
          <img
            src="./Admission page Assets/img5.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex relative left-[25rem] bottom-[8rem] gap-3">
        <img
          src="./Admission page Assets/Hostel fee icon/h4.png"
          alt=""
          className="h-[5rem] w-[5rem]"
        />
        <img
          src="./Admission page Assets/Hostel fee icon/h3.png"
          alt=""
          className="h-[5rem] w-[5rem]"
        />
        <img
          src="./Admission page Assets/Hostel fee icon/h2.png"
          alt=""
          className="h-[5rem] w-[5rem]"
        />
        <img
          src="./Admission page Assets/Hostel fee icon/h1.png"
          alt=""
          className="h-[5rem] w-[5rem]"
        />
      </div>
    </div>
  );
};

export default Page;
