import axios from '../axios/axios';

const signin = async (user) => {
    try {
        const response = await axios.post('/api/auth/signin', user);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export { 
    signin 
};