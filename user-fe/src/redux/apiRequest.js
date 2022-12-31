import axios from 'axios';
import { loginFailed, loginStart, loginSuccess, registerFailed, registerSuccess, registerStart, logOutStart, logOutSuccess, logOutFailed } from './authSlice';
import { getUserFailed, getUserStart, getUserSuccess } from './userSlice';


export const loginUser = async(user, dispatch, navigate) => {
    dispatch(loginStart());
    try{
        const res = await axios.post("https://petshop-ktww.onrender.com/v1/auth/login", user);
        dispatch(loginSuccess(res.data));
        navigate("/");
    } catch(err) {
        dispatch(loginFailed());
    }
}

export const registerUser = async(user, dispatch, navigate) =>{
    dispatch(registerStart());
    try{
        await axios.post("https://petshop-ktww.onrender.com/v1/auth/register", user);
        dispatch(registerSuccess());
        navigate("/login");
    } catch(err){
        dispatch(registerFailed());
    }
}



// LogOut User


export const logOut = async(dispatch, id, navigate, accessToken, axiosJWT) => {
    dispatch(logOutStart());
    try{
        await axiosJWT.post("https://petshop-ktww.onrender.com/v1/auth/logout",id,{
            headers: {token: `Bearer ${accessToken}`}
        });
        dispatch(logOutSuccess());
        navigate("/login");
    } 
    catch(err){
        dispatch(logOutFailed());
    }
}

/// add token to header
export const getAllUser = async(accessToken, dispatch) => {
    dispatch(getUserStart());
    try{
        const res = await axios.get('https://petshop-ktww.onrender.com/v1/user', {
            headers:{token: `Bearer ${accessToken}`}
        });
        dispatch(getUserSuccess(res.data));
    } catch(err) {
        dispatch(getUserFailed());
    }
}