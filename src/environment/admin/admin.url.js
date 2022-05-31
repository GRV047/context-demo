import {admin,common} from "../api"
import axios from "axios"

//Get
// Generat Rest Control where we pass filter and recive response
async function get(filter) {
    const url = common.adminCommon + `?filter=${filter}`
    return await axios.get(url);
}

//post
// Creating New Instence

async function post(body) {
    const url = common.adminCommon;
    return await axios.post(url, body);
}

//update
//Update any record based on filter

async function update(where, body) {
    const url = common.adminCommon + `?where=${where}`;
    return await axios.post(url, body);
}

//Sign Up End Point

async function signUp(object) {
    const url = admin.signUp;
    //console.log(url)
    return await axios.post(url,object);
}

//LOGIN METHOD ENDPOINT
async function loginAdmin(object){
    const url = admin.logIn;
    //console.log(url,object)
    return await axios.post(url,object);
}

export {
    signUp,
    get,
    post,
    update,
    loginAdmin
}