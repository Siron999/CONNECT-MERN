import React,{useState} from 'react';
import useStyles from './styles';
import {TextField,Paper,Button,Typography} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {registerUser} from '../../actions/user';
import { useHistory } from 'react-router-dom';





export default function Register() {
    const[userData,setUserData]=useState({name:'', email:'' , password:'', passwordCheck:'' });
    const classes= useStyles();
    const history= useHistory();

    const dispatch = useDispatch();


    const handleSubmit=(e)=>{
        e.preventDefault();
         
        try {
            dispatch(registerUser(userData));

    
        } catch (error) {
            console.log(error.message);
        };

        
        
        
       
        
        clear();
        history.push("/");
    };
    
    const clear=()=>{

        setUserData({name:'', email:'' , password:'', passwordCheck:'' });

    };
   
    return (
       <Paper className={classes.paper}>
           <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography className={classes.lTitle} variant="h5">REGISTER</Typography>
            <TextField  name="name" variant="outlined" label ="Name" fullWidth value={userData.name} onChange={(e)=> setUserData({...userData, name:e.target.value})}/>
            <TextField  name="email" variant="outlined" label ="Email" fullWidth value={userData.email} onChange={(e)=> setUserData({...userData, email:e.target.value})}/>
            <TextField  name="password" variant="outlined" label ="Password" type="password" fullWidth value={userData.password} onChange={(e)=> setUserData({...userData, password:e.target.value})}/>
            <TextField  name="passwordCheck" variant="outlined" label ="PasswordCheck" type="password" fullWidth value={userData.passwordCheck} onChange={(e)=> setUserData({...userData, passwordCheck:e.target.value})}/>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button className={classes.buttonSubmit2}variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
           </form>
       </Paper>
    )
};
