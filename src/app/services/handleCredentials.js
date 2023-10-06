import axios from "axios";

const Server_URL = "http://localhost:4000";

export const handleRegistrationData = async (signUpData) => {

    console.log('Attempting to send login credentials to back end');
    console.log('Login credentials are: ', signUpData);

    try{
        const data = {}
        const response = axios.post(`${Server_URL}/auth/v1/store_credentials`, data);

    }

    catch{

    }


}