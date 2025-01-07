import { useEffect, useState } from "react";
import { getCertificateThunk } from "../redux/thunks/certificateThunk";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectCertificates } from "../redux/slices/slices";

const Certificates = () => {
  const certificates = useAppSelector(selectCertificates);
  const [loading, setLoading] = useState(true); // Add loading state
  const dispatch = useAppDispatch();

  useEffect(() => {
        const fetchProjects = async () => {
          setLoading(true);
          console.log(certificates);
          console.log('Dispatching getCertificateThunk...');
          await  dispatch(getCertificateThunk());
          setLoading(false); // Set loading to false once data is fetched
        };
        fetchProjects();
  }, [dispatch]);

  const [showAll, setShowAll] = useState(false);
  const visibleCertificates = showAll ? certificates : certificates.slice(0, 4);

  const SkeletonCard = () => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse lg:h-[300px] sm:h-[200px] md:h-[300px]  p-6">
      <div className="w-full  flex  justify-center items-center">
      <div className=" bg-gray-300 w-16 h-16 mb-4 rounded-full border "></div>
      </div>
      <div className="p-5 flex justify-center items-center flex-col">
      <div className="h-2 bg-gray-300 rounded mb-4 w-1/3"></div>
        <div className="h-4 bg-gray-300 rounded mb-4 w-full"></div>
        <div className="h-4 bg-gray-300 rounded mb-4 w-full"></div>
        <div className="h-4 bg-gray-300 rounded mb-4 w-full"></div>
    
        <div className="h-8 w-40 bg-gray-300 rounded"></div>
      </div>
    </div>
  );

  return (
    <section className="bg-gray-100 ">
      <div className="py-12 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-10 lg:mb-16">
          <h2 className="mb-4 lg:text-5xl font-extrabold text-gray-900 text-4xl ">
            My Certificates
          </h2>
          <p className="font-medium text-gray-700  sm:text-lg">
            A showcase of my professional Certificates that validate my skills
            and knowledge across various domains and technologies.
          </p>
        </div>
        
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 lg:grid-cols-3">
          {
              loading
                ? Array(6) // Render 4 skeletons as placeholders during loading
                    .fill(null)
                    .map((_, idx) => <SkeletonCard key={idx} />)
                : visibleCertificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] shadow-lg border dark:border-gray-700 hover:shadow-xl  hover:scale-105 transition-transform transform duration-300 "
            >
              <div className="p-5 flex flex-col items-center ">
                <div className="flex justify-start w-full bg-green-400 rounded-full items-center mb-8 gap-8">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-16 h-16  rounded-full border border-l-green-400  bg-white"
                />
                <span className="font-bold text-white text-2xl">Coding Ninjas</span>
                </div>
                <h3 className="lg:text-2xl font-semibold text-black  text-center">
                  {cert.name}
                </h3>
                <p className="text-sm text-black dark:text-gray-400 text-center mt-2">
                  {cert.issuer}
                </p>
                <p className="mt-3 mb-4 text-sm text-black text-center line-clamp-4">
                  {cert.description}
                </p>
                <a
                  href={cert.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 rounded-lg"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Dynamic Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            {showAll ? 'View Less' : 'View All'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
