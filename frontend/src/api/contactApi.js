
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;


export const makecontact = (contact) => {
    try {
        const response = axios.post(
            `${apiUrl}/api/email/contact`,
            contact,

        );
        return response;
    } catch (error) {
        console.error('Error creating blog:', error);
    }
};