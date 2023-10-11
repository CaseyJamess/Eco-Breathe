import axios from "axios";

const Server_URL = "http://localhost:4000";

export const handleRegistrationData = async (signUpData) => {

    console.log('Attempting to send login credentials to back end');
    console.log('Login credentials are: ', signUpData);

    try {

        const response = await axios.post(`${Server_URL}/auth/v1/store_credentials`, signUpData);
        console.log('this is the response data : ', response.data);
        return response.data;
    }
    catch (error) {
        console.log('Error sending sign up data', error);
        return { error: "Failed to send sign up data to server" };
    }
}