import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
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

  formtitle:{
    color:'#424874',
  },
}));