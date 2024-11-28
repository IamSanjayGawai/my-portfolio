import { useEffect, useState } from "react";
import { getCertificateThunk } from "../redux/thunks/certificateThunk";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectCertificates } from "../redux/slices/slices";

const Certificates = () => {
  const certificates = useAppSelector(selectCertificates);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCertificateThunk());
    console.log(certificates);
    console.log("Dispatching getCertificateThunk...");
  }, [dispatch]);

  const [showAll, setShowAll] = useState(false);
  const visibleCertificates = showAll ? certificates : certificates.slice(0, 4);

  return (
    <section className="bg-gray-100 dark:bg-gray-900">
      <div className="py-12 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-10 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            My Certificates
          </h2>
          <p className="font-medium text-gray-700 dark:text-gray-300 sm:text-lg">
            A showcase of my professional certificates that validate my skills
            and knowledge across various domains and technologies.
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 lg:grid-cols-3">
          {visibleCertificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-5 flex flex-col items-center">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-16 h-16 mb-4 rounded-full border"
                />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2">
                  {cert.issuer}
                </p>
                <p className="mt-3 mb-4 text-sm text-gray-700 dark:text-gray-300 text-center">
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
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            {showAll ? "View Less" : "View All"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
