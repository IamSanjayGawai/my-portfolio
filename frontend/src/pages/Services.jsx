

const Services = () => {
    return (
      <>
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="text-center mb-12">
              <h2 className="lg:text-5xl font-extrabold text-white text-4xl">
                Our <span className="text-green-400">Services</span>
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                Discover the wide range of services we offer to help you achieve your goals. From development to design, we've got you covered.
              </p>
            </div>
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {/* Service 1 */}
              <div className="bg-black rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center items-center mb-4 w-14 h-14 rounded-full bg-blue-100">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Web Development</h3>
                <p className="text-white">
                  Build scalable, responsive, and high-performance websites tailored to meet your business needs with cutting-edge technologies.
                </p>
              </div>
  
              {/* Service 2 */}
              <div className="bg-black rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center items-center mb-4 w-14 h-14 rounded-full bg-blue-100">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">App Development</h3>
                <p className="text-white">
                  Create powerful mobile applications with intuitive UI/UX, ensuring exceptional performance and user satisfaction.
                </p>
              </div>
  
              {/* Service 3 */}
              <div className="bg-black rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center items-center mb-4 w-14 h-14 rounded-full bg-blue-100">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">UI/UX Design</h3>
                <p className="text-white">
                  Design user interfaces that captivate and create experiences that inspire, aligning creativity with user satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default Services;
  