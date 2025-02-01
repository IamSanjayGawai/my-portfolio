// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import asnaroTop from "../assets/projects/asnaro-top.png"
// import asnaroResult from "../assets/projects/asnaro-result.png"
// import transaction from "../assets/projects/asnaro-transaction.png"
// import asnaroAdmin from "../assets/projects/asnaro-admin.png"
// import asnaroHero from "../assets/projects/asnaro-hero.png"



// // Access API URL from environment variable
// const apiUrl = import.meta.env.VITE_API_URL;

// const ProjectDetail = () => {
//   const { id } = useParams(); // Extracting id from the URL params
//   const [project, setProject] = useState(null); // State to store the project data
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // State to handle error messages

//   // Fetch project data using the id
//   useEffect(() => {
//     const fetchProject = async () => {
//       try {
//         // Make the API request
//         const response = await axios.get(`${apiUrl}/api/projects/get-project/${id}`);
//         setProject(response.data);
//         setLoading(false); // Set loading to false once data is fetched
//       } catch (error) {
//         console.error("Error fetching project:", error);
//         setError('Error fetching project. Please try again later.'); // Set error message
//         setLoading(false); // Stop loading
//       }
//     };

//     // Call the fetch function when the component mounts or the id changes
//     fetchProject();
//   }, [id]); // Effect runs whenever `id` changes

//   if (loading) {
//     return <div>Loading...</div>; // Render loading state
//   }

//   if (error) {
//     return <div>{error}</div>; // Render error message if fetching fails
//   }

//   if (!project) {
//     return <div>Project not found.</div>; // Handle case if no project is found
//   }
// console.log(project)
//   return (
//     <>

//         <>

// <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-20 py-12">
//         <div className="mb-16">
//           <img
//             src={asnaroHero}
//             alt="Project Hero"
//             className="w-full h-[600px] object-cover rounded-lg shadow-lg mb-8"
//           />{" "}
//           <div className="max-w-3xl">
//             <h1 className="text-4xl font-bold text-gray-900 mb-4">
//             {project.name}
//             </h1>{" "}
//             <p className="text-xl text-gray-600 mb-4">
//            {project.description}
//             </p>{" "}
//             <div className="flex items-center text-gray-500">
//               <i className="fas fa-calendar-alt mr-2"></i>
//               <span>Duration: 6 months (January 2023 - June 2023)</span>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
//           {" "}
//           <div className="lg:col-span-2">
//             <section className="mb-16">
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">
//                 Project Overview
//               </h2>
//               <div className="prose max-w-none">
//                 <p>
//                   The client, a leading fashion retailer, needed to modernize
//                   their online presence and improve their conversion rates. The
//                   existing platform was outdated and failed to meet current user
//                   expectations for performance and usability.
//                 </p>{" "}
//                 <h3 className="text-xl font-semibold mt-6 mb-4">
//                   Key Objectives:
//                 </h3>
//                 <ul>
//                   <li>Increase mobile conversion rate by 50%</li>
//                   <li>Reduce cart abandonment rate</li>
//                   <li>Implement modern design patterns</li>
//                   <li>Improve site performance metrics</li>
//                 </ul>{" "}
//               </div>
//             </section>
//             <section className="mb-16">
//                     <h2 className="text-2xl font-bold text-gray-900 mb-6">Visual Showcase</h2>
//                     <div className="grid grid-cols-2 gap-6">
//                         <img src={asnaroTop} alt="Product Listing" className="rounded-lg shadow-md"/>                       
//                          <img src={asnaroResult} alt="Checkout Process" className="rounded-lg shadow-md"/>                     
//                             <img src={transaction} alt="Product Details" className="rounded-lg shadow-md"/>                      
//                               <img src={asnaroAdmin} alt="User Dashboard" className="rounded-lg shadow-md" />                  
//                           </div>
//                 </section>
//             <section className="mb-16">
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">
//                 Development Process
//               </h2>
//               <div className="bg-white p-6 rounded-lg shadow-md">
//                 <div className="flex flex-wrap gap-8 justify-between mb-8">
//                   {" "}
//                   <div className="text-center">
//                     <div className="w-16 h-16 bg-custom/10 rounded-full flex items-center justify-center mx-auto mb-3">
//                       {" "}
//                       <i className="fas fa-search text-custom text-xl"></i>
//                     </div>
//                     <h3 className="font-semibold">Research</h3>
//                   </div>
//                   <div className="text-center">
//                     <div className="w-16 h-16 bg-custom/10 rounded-full flex items-center justify-center mx-auto mb-3">
//                       {" "}
//                       <i className="fas fa-pencil-ruler text-custom text-xl"></i>
//                     </div>{" "}
//                     <h3 className="font-semibold">Design</h3>
//                   </div>
//                   <div className="text-center">
//                     {" "}
//                     <div className="w-16 h-16 bg-custom/10 rounded-full flex items-center justify-center mx-auto mb-3">
//                       <i className="fas fa-code text-custom text-xl"></i>
//                     </div>
//                     <h3 className="font-semibold">Development</h3>
//                   </div>{" "}
//                   <div className="text-center">
//                     <div className="w-16 h-16 bg-custom/10 rounded-full flex items-center justify-center mx-auto mb-3">
//                       {" "}
//                       <i className="fas fa-vial text-custom text-xl"></i>
//                     </div>
//                     <h3 className="font-semibold">Testing</h3>
//                   </div>
//                   <div className="text-center">
//                     <div className="w-16 h-16 bg-custom/10 rounded-full flex items-center justify-center mx-auto mb-3">
//                       {" "}
//                       <i className="fas fa-rocket text-custom text-xl"></i>
//                     </div>
//                     <h3 className="font-semibold">Launch</h3>
//                   </div>
//                 </div>
//               </div>
//             </section>{" "}
//           </div>
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-lg shadow-md p-6 mb-8 sticky top-6">
//               {" "}
//               <h2 className="text-xl font-bold text-gray-900 mb-6">
//                 Technologies Used
//               </h2>
//               <div className="space-y-4">
//                 {" "}
//                 <div className="flex items-center">
//                   <i className="fab fa-react text-2xl text-custom mr-3"></i>
//                   <span>React.js</span>
//                 </div>
//                 <div className="flex items-center">
//                   {" "}
//                   <i className="fab fa-node-js text-2xl text-custom mr-3"></i>
//                   <span>Node.js</span>{" "}
//                 </div>
//                 <div className="flex items-center">
//                   <i className="fas fa-database text-2xl text-custom mr-3"></i>
//                   <span>MongoDB</span>
//                 </div>
//                 <div className="flex items-center">
//                   {" "}
//                   <i className="fab fa-aws text-2xl text-custom mr-3"></i>
//                   <span>AWS</span>
//                 </div>{" "}
//                 <div className="flex items-center">
//                   <i className="fab fa-docker text-2xl text-custom mr-3"></i>
//                   <span>Docker</span>
//                 </div>
//               </div>
//               <div className="mt-8 pt-8 border-t border-gray-200">
//                 {" "}
//                 <h3 className="font-semibold text-gray-900 mb-4">
//                   Project Metrics
//                 </h3>
//                 <div className="space-y-3">
//                   {" "}
//                   <div>
//                     <div className="flex justify-between text-sm mb-1">
//                       <span>Mobile Conversion</span>
//                       <span className="font-semibold">+65%</span>
//                     </div>{" "}
//                     <div className="h-2 bg-gray-200 rounded-full">
//                       <div
//                         className="h-2 bg-custom rounded-full"
//                         style={{width: "65%"}}
//                       ></div>
//                     </div>
//                   </div>
//                   <div>
//                     <div className="flex justify-between text-sm mb-1">
//                       {" "}
//                       <span>Page Load Time</span>
//                       <span className="font-semibold">-40%</span>
//                     </div>
//                     <div className="h-2 bg-gray-200 rounded-full">
//                       <div
//                         className="h-2 bg-custom rounded-full"
//                         style={{width: "40%"}}
//                       ></div>
//                     </div>
//                   </div>
//                   <div>
//                     <div className="flex justify-between text-sm mb-1">
//                       {" "}
//                       <span>User Engagement</span>
//                       <span className="font-semibold">+85%</span>
//                     </div>
//                     <div className="h-2 bg-gray-200 rounded-full">
//                       <div
//                         className="h-2 bg-custom rounded-full"
//                         style={{width: "85%"}}
//                       ></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>{" "}
//             </div>
//           </div>
//         </div>

//         <section className="mb-16">
//           <h2 className="text-2xl font-bold text-gray-900 mb-8">
//             Related Projects
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <a href="#" className="group">
//               <div className="relative overflow-hidden rounded-lg shadow-md">
//                 {" "}
//                 <img
//                   src="https://creatie.ai/ai/api/search-image?query=A modern social media dashboard interface showing analytics, engagement metrics, and content management tools with a clean, professional design&width=400&height=300&orientation=landscape&flag=65ff96d5-6f9d-44e6-9e34-785a5de3663f"
//                   alt="Social Media Dashboard"
//                   className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-200"
//                 />{" "}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//                   {" "}
//                   <div className="absolute bottom-4 left-4 text-white">
//                     <h3 className="font-semibold">Social Media Dashboard</h3>
//                     <p className="text-sm">Analytics Platform</p>
//                   </div>{" "}
//                 </div>
//               </div>
//             </a>
//             <a href="#" className="group">
//               <div className="relative overflow-hidden rounded-lg shadow-md">
//                 {" "}
//                 <img
//                   src="https://creatie.ai/ai/api/search-image?query=A fitness tracking app interface showing workout statistics, progress charts, and achievement badges with a modern, energetic design&width=400&height=300&orientation=landscape&flag=790390ad-cd41-4107-a071-fb29475febe7"
//                   alt="Fitness App"
//                   className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-200"
//                 />{" "}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//                   {" "}
//                   <div className="absolute bottom-4 left-4 text-white">
//                     <h3 className="font-semibold">Fitness Tracking App</h3>
//                     <p className="text-sm">Mobile Application</p>
//                   </div>{" "}
//                 </div>
//               </div>
//             </a>
//             <a href="#" className="group">
//               <div className="relative overflow-hidden rounded-lg shadow-md">
//                 {" "}
//                 <img
//                   src="https://creatie.ai/ai/api/search-image?query=A real estate platform showing property listings, virtual tours, and interactive maps with a luxurious, professional design&width=400&height=300&orientation=landscape&flag=c8a4fdc0-2046-40f5-852f-a7c88d5b43e0"
//                   alt="Real Estate Platform"
//                   className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-200"
//                 />{" "}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//                   {" "}
//                   <div className="absolute bottom-4 left-4 text-white">
//                     <h3 className="font-semibold">Real Estate Platform</h3>
//                     <p className="text-sm">Web Application</p>
//                   </div>{" "}
//                 </div>
//               </div>
//             </a>
//           </div>
//         </section>
//       </main>
//         </>

  
//     </>
//   );
// };

// export default ProjectDetail;




import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projectsData from "../data/projectData"; // Import local project data

const ProjectDetail = () => {
  const { id } = useParams(); // Extracting id from the URL params
  const [project, setProject] = useState(null); // State to store the project data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // State to handle error messages

  // Find the project from local data based on the ID from the URL
  useEffect(() => {
    window.scrollTo(0, 0);
    const selectedProject = projectsData.projects.find((proj) => proj.id === parseInt(id));

    if (selectedProject) {
      setProject(selectedProject); // Set the project data if found
      setLoading(false); // Set loading to false once data is fetched
    } else {
      setError('Project not found.'); // Handle case if no project matches the ID
      setLoading(false);
    }
  }, [id]); // Run this effect whenever the `id` changes

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        Loading project details...
      </div>
    ); // Render loading state
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold text-red-500">
        {error}
      </div>
    ); // Render error message if project not found
  }

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        Project not found.
      </div>
    ); // Handle case if no project is found
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 py-12">
      <div className="mb-16">
        <img
          src={project.image}
          alt="Project Hero"
          className="w-full h-[600px] object-contain rounded-lg shadow-lg mb-8 border-2"
        />
        <div className="max-w-9xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{project.name}</h1>
          <p className="text-xl text-gray-600 mb-6">{project.description}</p>
          <div className="flex justify-center flex-col items-center text-gray-500 mb-6">
            <i className="fas fa-calendar-alt mr-2"></i>
            <span>Duration: 6 months (January 2023 - June 2023)</span>
            <h2 className="text-xl font-bold text-gray-900 mb-2 mt-6 ">Technologies Used</h2>
            <div className="flex justify-center items-center flex-col lg:flex-row w-[80%] gap-2">
  {project.tech_stack.map((tech, index) => (
    <div key={index} className="flex items-center text-gray-600 text-center">
  
      <span className="font-bold">{tech},</span>
    </div>
  ))}
</div>

          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 mb-16">
        <div className="lg:col-span-2">
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
            <div className="prose max-w-none text-gray-700">
              <p>{project.more_details}</p>
              <h3 className="text-xl font-semibold mt-6 mb-4">Key Objectives:</h3>
              <ul>
                {project.problem_faced.map((item, index) => (
                  <li key={index}>{item.problem}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Visual Showcase</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {project.images.map((item, index) => (
                <img key={index} src={item} alt={`Project Image ${index + 1}`} className="rounded-lg shadow-md  border-2xl" />
              ))}
            </div>
          </section>

          <section className="mb-16">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">Development Process</h2>
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex flex-wrap gap-8 justify-between mb-8">
      {/* Mapping of step to icons */}
      {["Research", "Design", "Development", "Testing", "Launch"].map((step, index) => (
        <div key={index} className="text-center flex-1">
          <div className="w-16 h-16 bg-custom/10 rounded-full flex items-center justify-center mx-auto mb-3">
            <i
              className={`fas fa-${step === "Research" ? "search" : 
                            step === "Design" ? "pencil-alt" : 
                            step === "Development" ? "code" : 
                            step === "Testing" ? "vial" : 
                            "rocket"} text-custom text-xl`}
            ></i>
          </div>
          <h3 className="font-semibold">{step}</h3>
        </div>
      ))}
    </div>
  </div>
</section>

        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8 sticky top-6">
    

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Project Metrics</h3>
              <div className="space-y-3">
                {["Mobile Conversion", "Page Load Time", "User Engagement"].map((metric, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{metric}</span>
                      <span className="font-semibold">+85%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-custom rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>



      <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Probmlem Faced</h2>
            <div className="prose max-w-none text-gray-700">
            <ul>
                {project.problem_faced.map((item, index) => (
                  <li key={index}>{item.problem}</li>
                ))}
              </ul>
              <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-6"> Solutions</h2>
              <ul>
                {project.problem_faced.map((item, index) => (
                  <li key={index}>{item.solution}</li>
                ))}
              </ul>
            </div>
          </section>

    </main>
  );
};

export default ProjectDetail;
{/* 
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         
          {project.related_projects && project.related_projects.map((related, index) => (
            <a href={related.link} className="group" key={index}>
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <img
                  src={related.image}
                  alt={related.name}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold">{related.name}</h3>
                    <p className="text-sm">{related.type}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section> */}