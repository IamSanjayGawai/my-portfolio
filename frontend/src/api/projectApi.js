import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

export const createProject = async (project) => {
    try {
        // Send FormData to the backend as multipart/form-data
        const response = await axios.post(`${apiUrl}/api/projects`, project, {
            headers: {
                'Content-Type': 'multipart/form-data', // Ensure the correct content type
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to create project");
    }
};

export const getProjects = async () => {
    try {
        const response = await axios.get(`${apiUrl}/api/projects/get-projects`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const deleteProjects = async (id) => {
    try {
        const response = await axios.post(`${apiUrl}/api/projects/delete-project/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};


