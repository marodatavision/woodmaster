import { USERAUTHURL } from "../config/baseurls";

const axios = window.axios;


export default class UserAuth {

    // Auth URL is defined in seperate file (see imports)

    /**
     * User Registration
     * @param {string | object} name 
     * @param {string} email 
     * @param {string} password 
     * @param {string} passwordConfirmation 
     * @returns response promise
     */
    static async register (name, email, password, password_confirmation){

        let data = null;

        if(typeof(name) == 'string'){
            data = {
                name,
                email,
                password,
                password_confirmation
            };
        }
        else if(typeof(name) == 'object' && Object.keys(name).length === 4){
            data = name;
        }

        await axios.get('/sanctum/csrf-cookie')

        let response = await axios.post(`${USERAUTHURL}/register`, data);

        return response
    }

    /**
     * User Login
     * @param {string | object} email 
     * @param {string} password 
     * @returns response promise
     */
    static async login (email, password){

        let data = null;

        if(typeof(email) == 'string'){
            data = {
                email,
                password
            };
        }
        else if(typeof(email) == 'object' && Object.keys(email).length === 2){
            data = email;
        }

        await axios.get('/sanctum/csrf-cookie')

        let response = await axios.post(`${USERAUTHURL}/login`, data);

        return response
    }

    /**
     * Just log out the user
     * @returns response promise
     */
    static async logout (){
        
        let response = await axios.get(`${USERAUTHURL}/logout`)

        return response;
    }

    /**
     * Simple request to check if user session is still active
     * @returns response promise
     */
    static async checkAuth(){

        await axios.get('/sanctum/csrf-cookie')
        let response = axios.get(`${USERAUTHURL}/checkauth`)

        return response;
    }
}