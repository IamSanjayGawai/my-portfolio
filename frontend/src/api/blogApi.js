import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;


export const addBlog = (blog) => {
    try {
        const response = axios.post(
            `${apiUrl}/api/blogs/add-blog`,
            blog,
            { headers: { 'Content-Type': 'multipart/form-data' } }
        );
        return response;
    } catch (error) {
        console.error('Error creating blog:', error);
    }
};

export const getBlog = async () => {
    try {
        const response = await axios.get(`${apiUrl}/api/blogs/get-blog`);
        console.log(response.data, "blog data api");
        return response.data; // Return the resolved data
    } catch (error) {
        console.error('Error fetching blog data:', error);
    }
};

export const getBlogById = async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/api/blogs/get-blog/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching blog data:', error);
    }
};
