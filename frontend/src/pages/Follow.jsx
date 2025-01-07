import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Follow = () => {
  return (
    <section className="bg-gray-50 py-8  md:py-16">
      <div className=" px-4 2xl:px-0">
        <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
          <h2 className="lg:text-5xl font-extrabold text-gray-900 text-4xl text-center w-full">
            Follow Me
          </h2>
        </div>

        <div className="flex flex-row w-full ">
          {/* Social Media Links */}
          <div className="flex justify-center items-center w-full lg:gap-10 gap-4">
            <div className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform transform duration-300">
              <div className="bg-gray-900 rounded-full p-3 shadow-lg">
                <a href="https://github.com/IamSanjayGawai/" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="w-12 h-12 text-white" />
                </a>
              </div>
              <p className="text-lg font-semibold text-gray-700">GitHub</p>
            </div>
            <div className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform transform duration-300">
              <div className="bg-blue-700 rounded-full p-3 shadow-lg">
                <a href="https://www.linkedin.com/in/sanjay-gawai-74a6b815b/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="w-12 h-12 text-white" />
                </a>
              </div>
              <p className="text-lg font-semibold text-gray-700">LinkedIn</p>
            </div>
            {/* <div className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform transform duration-300">
              <div className="bg-blue-400 rounded-full p-3 shadow-lg">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="w-12 h-12 text-white" />
                </a>
              </div> 
              <p className="text-lg font-semibold text-gray-700">Twitter</p>
            </div> */}
            <div className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform transform duration-300">
              <div className="bg-pink-600 rounded-full p-3 shadow-lg">
                <a href="https://www.instagram.com/iam_sanjay_gawai/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="w-12 h-12 text-white" />
                </a>
              </div>
              <p className="text-lg font-semibold text-gray-700">Instagram</p>
            </div>
            <div className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform transform duration-300">
              <div className="bg-blue-800 rounded-full p-3 shadow-lg">
                <a href="https://www.facebook.com/profile.php?id=61567079777266" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="w-12 h-12 text-white" />
                </a>
              </div>
              <p className="text-lg font-semibold text-gray-700">Facebook</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Follow;
