import { useState } from 'react';
import axios from '../axios/axios';
import { useAuthContext } from './useAuthContext'; 

export const useSignup = () => {
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(null);
    const { dispatch } = useAuthContext();

    const signup = async (user) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post('/api/users', user);
            console.log(response.data);
            localStorage.setItem('user', JSON.stringify(response.data));
            dispatch({ type: 'LOGIN', payload: response.data });
            setLoading(false);
        } catch (error) {
            console.log(error.response?.data);
            setError(error.response?.data);
            setLoading(false);
        }
    };
    return { signup, error, loading };
}