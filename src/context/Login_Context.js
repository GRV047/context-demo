import { createContext, useState } from "react";
import { loginAdmin } from "../environment/admin/admin.url";

export const LoginContext = createContext({
    isLogin:false,
    data:{},
    logIn: (userName,password)=>{}
});

const Main_State =({children})=>{

    const [user, setUser] = useState({});

    const [logInState, setLoginState] = useState(false);

    async function logIn(userName,password){
        try{
            let object = {
                "userName":userName,
                "password":password
            }

            const userInfo = await loginAdmin(object);
            console.log(userInfo)
            if(userInfo.status===200){
                setUser({
                    ...userInfo.data
                })
                setLoginState(true)
            }
        }catch (err){
            throw(err);
        }
    }
    return(
        <LoginContext.Provider value = {{user,logInState,logIn}}>
            {children}
        </LoginContext.Provider>
    )
}

export default Main_State