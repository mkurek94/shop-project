import axios, { AxiosResponse } from "axios"

type PostSignUpPayload = {
    userName: string;
    password: string;
    email: string;
}

export const postSignUp = ({userName, password, email}: PostSignUpPayload): Promise<AxiosResponse> => {
    return axios.post('/api/users/signup', {email, userName, password});
}