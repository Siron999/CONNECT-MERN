import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
        },
      },
    paper:{
        padding: theme.spacing(2),
        marginTop:'15px',
        
       
    },
  lTitle:{
      alignSelf:'center',
      marginBottom:'10px',
      color:'#424874',
  },
  form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    buttonSubmit: {
        marginBottom: 10,
        background:'#424874',
        '&:hover': {
          backgroundColor: '#51588d',
        },
    },
    buttonSubmit2:{
        background:'#DCD6F7',
        color:'#424874',
        '&:hover': {
          backgroundColor: '#c2bcdd',
        }
      
      },
  
}));