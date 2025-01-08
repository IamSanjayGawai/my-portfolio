import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { selectProjects } from '../redux/slices/slices';
import { getAllProjectsThunk } from '../redux/thunks/projectThunk';
import MyRole from '../components/MyRole';


const Projects = () => {
  const projects = useAppSelector(selectProjects);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true); // Add loading state
  const [showAll, setShowAll] = useState(false);
  const [clikedOnMyRole, setClikedOnMyRole] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null); // State to store selected project

  const handleModalOpen = (project) => {
    setClikedOnMyRole(true);
    setSelectedProject(project); // Store the full project
  };
  

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      await dispatch(getAllProjectsThunk());
      console.log(visibleProjects)
      setLoading(false); // Set loading to false once data is fetched
    };
    fetchProjects();
  }, [dispatch]);

  
  // Skeleton Loader Component
  const SkeletonCard = () => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
      <div className="w-full lg:h-60 sm:h-80 md:h-80 bg-gray-300"></div>
      <div className="p-5">
        <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded mb-4 w-1/2"></div>
        <div className="flex space-x-2 mb-4">
          <div className="h-6 w-12 bg-gray-300 rounded"></div>
          <div className="h-6 w-16 bg-gray-300 rounded"></div>
        </div>
        <div className="h-3 bg-gray-300 rounded w-full"></div>
      </div>
    </div>
  );


  return (
    <>
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 lg:text-5xl font-extrabold text-gray-900 text-4xl">
              My Projects
            </h2>
            <p className="font-light text-black lg:mb-16 sm:text-xl">
              Highlights of my professional projects, demonstrating expertise in
              developing innovative, scalable, and user-focused applications
              across diverse domains, are outlined below.
            </p>
          </div>
          {loading ? (
  <h1 className='font-bold'>
    Data is loading from the database. It might take some time as we are using the free version of MongoDB.
  </h1>
) : ""}
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
            {
            
            loading
              ? Array(4) // Show 4 skeletons as placeholders
                  .fill(null)
                  .map((_, idx) => <SkeletonCard key={idx} />)
              :
            
            
            visibleProjects.map((project, index) => (
              <div
                key={index}
                className=" rounded-[50px] shadow-lg overflow-hidden flex w-full bg-[#102762] xs:flex-col lg:flex-row"
              >
                <div className='w-full lg:w-2/4 border flex justify-center items-center p-6'>
                <a href={project.live} target="_blank" rel="noopener noreferrer ">
                  <img
                    className="w-full h-[450px] object-cover  rounded-t-lg border-2 p-2"
                    src={project.image}
                    alt={project.name}
                  />
                </a>
                </div>
       {/* right section */}
                <div className="p-5 w-full lg:w-2/4 border ">
                <div className="flex justify-between items-center">
  <h3 className="text-3xl lg:text-4xl font-bold mb-2 text-white">{project.name}</h3>
  <div className="relative group">
    <div
      onClick={() => handleModalOpen(project.description)} 
    className="rounded-full border bg-white w-10 h-10 flex justify-center items-center  cursor-pointer select-none">
      <span 
        onClick={() => handleModalOpen(project.description)} className="font-bold text-2xl lg:text-3xl">i</span>
    </div>
    {/* Tooltip */}
    <div 
    className="absolute w-20 text-center top-12 left-1/2 transform -translate-x-1/2 bg-green-400 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
      My Role {/* Replace 'project.role' with the actual role text */}
    </div>
  </div>
</div>

                 
                  <div className='text-white flex flex-col gap-2'><span className='text-white text-lg lg:text-xl font-bold mt-2'>Worked on</span>
                  <div className="flex gap-2">
                  <div className='rounded-full border p-3'>Entire frontend UI </div>
                  <div className='rounded-full border p-3'>Admin Panel</div>
                  </div>
             
                  </div>
                  <div className='text-white text-lg lg:text-xl font-bold mt-6'>Technology Used</div>
                  <div className="flex flex-wrap gap-3 mb-10 mt-2">
                    {/* {Array.isArray(project.stack) &&
                      project.stack.map((item, idx) =>
                        item.split(",").map((subItem, subIdx) => (
                          <span
                            key={${idx}-${subIdx}}
                            className={ px-2 py-1 rounded-full font-bold text-2xl ${
                              subIdx % 3 === 0
                                ? "bg-purple-500 text-white"
                                : subIdx % 3 === 1
                                ? "bg-blue-500 text-white"
                                : "bg-green-500 text-white"
                            }}
                          >
                            {subItem.trim()}
                          </span>
                        ))
                      )} */}
                         {Array.isArray(project.stack) &&
                      project.stack.map((item, idx) =>
                        item.split(",").map((subItem, subIdx) => (
                          <span
                            key={`${idx}-${subIdx}`}
                            className={ `px-3 py-1 rounded-full font-bold text-2xl border bg-white`}
                          >
                            {subItem.trim()}
                          </span>
                        ))
                      )}
                  </div>
                  {/* <p className="text-gray-700 text-sm mb-4 line-clamp-3 ">{project.description}</p> */}
                  <div className="flex space-x-4 text-white justify-around">
                    <a
                      href={project.github_link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-black flex justify-center items-center cursor-pointer border px-4 py-2 rounded-full text-2xl lg:text-3xl gap-2  w-2/4"
                    >
                      <svg
                        className="w-10 h-10"
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
                      href={project.live_link}
                      className=" hover:text-gray-900 flex justify-center items-center border px-4 py-2 rounded-full text-2xl lg:text-3xl gap-2 w-2/4"
                    >
                      <svg
                        className="w-10 h-10"
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
                       {/* right section */}
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
      {clikedOnMyRole && selectedProject && (
  <MyRole setClikedOnMyRole={setClikedOnMyRole} projectDetail={selectedProject} />
)}

    </>
  );
};

export default Projects; 