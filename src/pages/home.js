import { useContext } from "react";
import {LoginContext} from "../context/Login_Context"

const Home = ()=>{

    const {user} = useContext(LoginContext)
    console.log(user);
    return (
        <>
        <h1>Home</h1>
        </>
    )
}

export default Home;