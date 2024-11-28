import Profile_img from "../assets/images/profile-img.png";

const MainSection = () => {


  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r ">
      <div className="container w-full h-screen flex flex-col sm:flex-col md:flex-col lg:flex-row items-center justify-between">
        {/* Left section - Content */}
        <div className="flex flex-col justify-center w-full md:w-3/4 lg:w-1/2 h-full p-4  order-1 sm:order-2 lg:order-1">
          <h1 className="font-extrabold text-4xl lg:text-5xl mb-4 text-left w-full">
            Hello, I am <span className="text-yellow-300">Sanjay</span>
          </h1>
          <p className="text-lg lg:text-xl mb-4 text-left w-full">
            Building Scalable, Innovative, and User-Centric Web Solutions
          </p>
          <p className="lg:text-lg sm:text-sm text-left mb-6">
            As a{" "}
            <span className="text-xl font-bold text-green-300">
              Full-Stack Developer
            </span>
            , I craft seamless digital experiences with cutting-edge
            technologies. From front-end design to backend architecture, I bring
            your ideas to life with robust, scalable, and performance-driven web
            applications.
          </p>

          {/* Button Section */}
          <div className="flex justify-start space-x-4 w-full">
            <button
              type="button"
              className="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center dark:focus:ring-yellow-800"
            >
              Download Resume
              <svg
                className="rtl:rotate-180 w-4 h-4 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
            <a href="#contact">
            <button
              type="button"
              className="px-5 py-2.5 text-base font-medium text-center inline-flex items-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300"
           
            >
              <svg
                className="w-4 h-4 text-white me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
              Contact Us
            </button>
            </a>
          </div>
        </div>

        {/* Right section - Image */}
        <div className="flex justify-center items-center sm:w-full md:w-1/4 lg:w-1/2 p-6 sm:order-1 lg:order-2">
          <img
            src={Profile_img}
            className="w-60 sm:w-80 lg:w-[80%] object-cover rounded-xl "
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
