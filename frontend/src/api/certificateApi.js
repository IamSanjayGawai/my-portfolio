import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const addCertificate = async (certificate) => {
    try {
        const response = await axios.post(
            `${apiUrl}/api/certificates/add-certificate`,
            certificate,
            { headers: { 'Content-Type': 'multipart/form-data' } }
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getCertificate = async () => {
    try {
        const response = await axios.get(`${apiUrl}/api/certificates/get-certificate`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
