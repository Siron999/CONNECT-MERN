import React from 'react';
import Post from './Post/Post';
import useStyles from './styles';
import {useSelector} from 'react-redux';
import {Grid} from '@material-ui/core';
import NoPost from './NoPost';

export default function Posts() {
    const classes= useStyles();
    const posts=useSelector((state)=> state.posts);


    return (
       !posts.length ? <NoPost /> :(
           <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post)=>(
                    <Grid key={post._id} item size={12} sm={6}>
                        <Post post={post} />
                    </Grid>

                ))}

           </Grid>
       )
    
       )
}
