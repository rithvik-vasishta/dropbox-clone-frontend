import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const uploadFile = (file) => {
    const formData = new FormData();
    formData.append('file', file);

    const token = localStorage.getItem('token');
    return axios.post(
        `${API_URL}/upload`,
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`,
            },
        }
    );
};

// export const downloadFile = (fileId) => {
//     const token = localStorage.getItem('token');
//     return axios.get(
//         `${API_URL}/download/${fileId}`,
//         {
//             headers: { Authorization: `Bearer ${token}` },
//             responseType: 'blob',
//         }
//     );
// };

export default { uploadFile };