import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { selectProjects } from '../redux/slices/slices';
import { getAllProjectsThunk } from '../redux/thunks/projectThunk';
import MyRole from '../components/MyRole';
import "../styles/project.css"

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
       <div className="p-5 w-full lg:w-2/4 border relative">
  <div className="flip-card group h-full">
    <div className="flip-card-inner">
      {/* Front Side */}
      <div className="flip-card-front flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <h3 className="text-3xl lg:text-4xl font-bold mb-2 text-white">
            {project.name}
          </h3>
 
        </div>

        <div className="text-white flex flex-col gap-2">
          <span className="text-white text-lg lg:text-xl font-bold mt-2">
            Worked on
          </span>
          <div className="flex gap-2">
            <div className="rounded-full border p-3">Entire frontend UI</div>
            <div className="rounded-full border p-3">Admin Panel</div>
          </div>
        </div>
        <div className="text-white text-lg lg:text-xl font-bold mt-6">
          Technology Used
        </div>
        <div className="flex flex-wrap gap-3 mb-10 mt-2">
          {Array.isArray(project.stack) &&
            project.stack.map((item, idx) =>
              item.split(",").map((subItem, subIdx) => (
                <span
                  key={`${idx}-${subIdx}`}
                  className={`px-3 py-1 rounded-full font-bold text-2xl border bg-white`}
                >
                  {subItem.trim()}
                </span>
              ))
            )}
        </div>
      </div>

      {/* Back Side */}
      <div className="flip-card-back bg-white text-black flex flex-col p-5 border rounded-[30px]">
        <div className='flex justify-around w-full'>

      
 
        <h3 className="text-3xl lg:text-4xl font-bold mb-4">{project.name}</h3>
        <div className="relative">
            <div
              onClick={() => handleModalOpen(project.description)}
              className="rounded-full border-2 bg-white w-10 h-10 flex justify-center items-center cursor-pointer select-none  "
            >
              <span className="font-bold text-2xl lg:text-3xl text-black">i</span>
            </div>
            {/* Tooltip */}
            <div className="absolute w-20 text-center top-12 left-1/2 transform -translate-x-1/2 bg-green-400 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              My Role
            </div>
          </div>
          </div>
        <p className="text-lg lg:text-xl mt-8">
          {project.description}
        </p>
        <div className="flex space-x-4 mt-6">
          <a
            href={project.github_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2 text-2xl lg:text-3xl gap-2 w-2/4"
          >
            GitHub
          </a>
          <a
            href={project.live_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-gradient-to-br from-green-600 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2 text-2xl lg:text-3xl gap-2 w-2/4"
          >
            Live
          </a>
        </div>
      </div>
    </div>
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
