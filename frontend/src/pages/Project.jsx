import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { selectProjects } from '../redux/slices/slices';
import { getAllProjectsThunk } from '../redux/thunks/projectThunk';

const Projects = () => {
  const projects = useAppSelector(selectProjects);
  const dispatch = useAppDispatch();

  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  useEffect(() => {
    console.log('Dispatching getAllProjectsThunk...');
    dispatch(getAllProjectsThunk());
  }, [dispatch]);

  return (
    <>
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black">
              My Projects
            </h2>
            <p className="font-light text-black lg:mb-16 sm:text-xl">
              Highlights of my professional projects, demonstrating expertise in
              developing innovative, scalable, and user-focused applications
              across diverse domains, are outlined below.
            </p>
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <img
                    className="w-full lg:h-60 sm:h-80 md:h-80 object-cover rounded-t-lg border-2 p-2"
                    src={project.image}
                    alt={project.name}
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {Array.isArray(project.stack) &&
                      project.stack.map((item, idx) =>
                        item.split(",").map((subItem, subIdx) => (
                          <span
                            key={`${idx}-${subIdx}`}
                            className={`text-xs font-medium px-2 py-1 rounded-full ${
                              subIdx % 3 === 0
                                ? "bg-purple-500 text-white"
                                : subIdx % 3 === 1
                                ? "bg-blue-500 text-white"
                                : "bg-green-500 text-white"
                            }`}
                          >
                            {subItem.trim()}
                          </span>
                        ))
                      )}
                  </div>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex space-x-4 text-gray-500 justify-around">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-black flex justify-center items-center"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      GitHub
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 flex justify-center items-center"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

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
    </>
  );
};

export default Projects;
