import { useState } from "react";
import axios from "../axios/axios";
import { useAuthContext } from "./useAuthContext";

export const useSignin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuthContext();

    const signin = async (user) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.post('/api/auth/signin', user);
            localStorage.setItem('user', JSON.stringify(response.data));
            dispatch({ type: 'LOGIN', payload: response.data });
            setIsLoading(false);
        } catch (error) {
            setError(error.response?.data);
            setIsLoading(false);
        }
    };

    return { signin, error, isLoading };
}