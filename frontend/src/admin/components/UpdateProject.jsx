import React from 'react'

const UpdateProject = () => {
  return (
    <div>UpdateProject</div>
  )
}

export default UpdateProject



// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "../../redux/hooks";
// import { updateProjectThunk, getProjectByIdThunk } from "../../redux/thunks/projectThunk";

// const UpdateProject = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useAppDispatch();
//   const project = useAppSelector((state) =>
//     state.projects.find((proj) => proj._id === id)
//   );

//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     image: "",
//     status: "active",
//   });

//   useEffect(() => {
//     if (id && !project) {
//       dispatch(getProjectByIdThunk(id));
//     } else if (project) {
//       setFormData({
//         name: project.name || "",
//         description: project.description || "",
//         image: project.image || "",
//         status: project.status || "active",
//       });
//     }
//   }, [id, project, dispatch]);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     dispatch(updateProjectThunk({ id, ...formData }))
//       .then(() => {
//         alert("Project updated successfully!");
//         navigate("/manage-projects");
//       })
//       .catch((err) => {
//         console.error(err);
//         alert("Failed to update project.");
//       });
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold text-gray-800 mb-4">Update Project</h1>
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
//         <div className="mb-4">
//           <label className="block text-gray-700">Project Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             className="w-full border px-3 py-2 rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Description</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleInputChange}
//             className="w-full border px-3 py-2 rounded"
//             rows={5}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Image URL</label>
//           <input
//             type="text"
//             name="image"
//             value={formData.image}
//             onChange={handleInputChange}
//             className="w-full border px-3 py-2 rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Status</label>
//           <select
//             name="status"
//             value={formData.status}
//             onChange={handleInputChange}
//             className="w-full border px-3 py-2 rounded"
//           >
//             <option value="active">Active</option>
//             <option value="inactive">Inactive</option>
//           </select>
//         </div>
//         <button
//           type="submit"
//           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//         >
//           Update Project
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UpdateProject;
