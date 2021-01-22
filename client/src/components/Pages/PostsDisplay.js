import React,{useEffect} from 'react';
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';

import {useDispatch,useSelector} from 'react-redux';
import memories from '../../images/memories.png';
import connect from '../../images/logo.png';
import Posts from '../Posts/Posts';
import Form from '../Forms/Form';
import useStyles from '../../styles';
import { getPosts } from '../../actions/posts';
import { tokenCheck } from "../../actions/user";

const PostsDisplay = ()=>{
    const classes= useStyles();
    const dispatch=useDispatch();
    const current_user=useSelector((state)=> state.current_user.user._id);
    // const current_logged=useSelector((state)=> state.current_user.user.name);
    // console.log(current_logged);

    useEffect(() => {
        if(current_user!==null){
        dispatch(getPosts());
        };
        // if(current_logged==="what up"){
        //     dispatch(getPosts());
        // };
        
     }, [current_user,dispatch]);
    
    
useEffect(() => {
   
    dispatch(tokenCheck());

}, [dispatch]);

    


    return(
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">CONNECT</Typography>
                <img className={classes.image} src={connect} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts  />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>

    )


};

export default PostsDisplay;