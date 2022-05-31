import { useState, useContext } from "react"
import { LoginContext } from "../context/Login_Context";
import { useNavigate } from "react-router-dom";

const Login = ()=>{

    const {logIn} = useContext(LoginContext)
    let navigate = useNavigate();
    const [logInData,setLogin] = useState({
        "userName":"",
        "password":""
    })

    function handleInput(event){
        const key = event.target.name;
        const value=event.target.value;

        setLogin({...logInData, [key]:value})
    }
    function loginUser(event){
        event.preventDefault();
        console.log(logInData)
        logIn(logInData.userName,logInData.password);
        navigate("/signup")
    }
    return (
        <>
        <form className="form___section" onSubmit={loginUser}>
                <div className="input-group mb-3">
                    <div className="input-group-text">
                        <h5>user name</h5>
                    </div>
                    <input type="text" className="form-control"  
                    id="userName"
                    name="userName"
                    value={logInData.userName}
                    onChange={handleInput}/>
                </div>

                <div className="input-group">
                    <div className="input-group-text">
                        <h5>password</h5>
                    </div>
                    <input type="text" className="form-control"  
                    id="password"
                    name="password"
                    value={logInData.password}
                    onChange={handleInput}/>
                </div>
                <div className="col-12 form___button___element">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
        </>
    )
}

export default Login