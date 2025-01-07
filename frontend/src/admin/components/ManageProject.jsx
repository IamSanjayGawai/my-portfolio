import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectProjects } from "../../redux/slices/slices";
import { useEffect } from "react";
import { getAllProjectsThunk, deleteProjectsThunk } from "../../redux/thunks/projectThunk";
import { useNavigate } from "react-router-dom";
import UpdateProject from "./UpdateProject";

const ManageProject = () => {
  const projects = useAppSelector(selectProjects);
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    console.log("Dispatching getAllProjectsThunk...");
    dispatch(getAllProjectsThunk());
  }, [dispatch]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Manage Projects</h1>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="w-full border-collapse bg-white">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Project Name</th>
              <th className="px-4 py-2 text-left">Project Images</th> 
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects && projects.length > 0 ? (
              projects.map((project, index) => (
                <tr key={project.id} className="border-b">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{project.name}</td>
                  <td className="px-4 py-2">
                    <img src={project.image} className="object-cover h-20" alt="Project" />
                  </td>
                  <td className="px-4 py-2">{project.description}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 text-sm rounded ${
                        project.status === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => navigate(`/update-project/${project._id}`)}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2">
                      Edit
                    </button>
                    <button
                      onClick={() => dispatch(deleteProjectsThunk(project._id))}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center text-gray-500 px-4 py-2">
                  No projects found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProject;
