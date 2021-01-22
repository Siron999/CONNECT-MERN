import React from 'react'
import { useHistory } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import {logout} from '../../actions/user';
import { getPosts } from '../../actions/posts';

export default function AuthOptions() {
    const history= useHistory();
    const dispatch = useDispatch();
    let loggedUser=useSelector((state)=> state.current_user.user._id);
  
  
    const register=()=>{
        history.push("/register");
    };
    const login=()=>{
        history.push("/login");
    };


    const logoutUser=()=>{
        
        dispatch(logout());

        dispatch(getPosts());

       
      

    };






    

    return (
        <nav className="auth-option">
            {(loggedUser) ? (
            <button onClick={logoutUser} >Logout</button>
            ) :(
                <>
            <button onClick={register}>Register</button>
            <button onClick={login}>Login</button>
            </>
            )

        }   
        </nav>
    )
}
