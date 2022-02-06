import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Typography } from '@material-ui/core';
import { WorkersState } from '../context/Context';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
  },
  title:{  
      fontSize : "1.2rem",
      fontWeight : "600"
  },
  form :{
      backgroundColor : "#fff",
      padding : "1rem",
      width : "30rem",
      borderRadius : "6px",
      boxShadow : "0px 0px 10px 1px black"
  },
  inputs:{
      marginTop : "1rem",
      display : "flex",
      flexDirection : "column",
  },
  input:{
      marginBottom : "1rem",
  },
  container : {
    display: "flex",
    alignItems : "center",
    justifyContent : "center"
  },
}));

export default function EditWorker() {
  const { setNewEmail, setNewFullName, setNewPhone, setNewSalary, setNewDate} = WorkersState();
  const classes = useStyles();

  const {id} = useParams();

  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <Typography variant="h4" className ={classes.title}>
            Worker Number {id}
        </Typography>
        <div className={classes.inputs}>
          <TextField label="Email" variant="outlined" fullWidth
            className={classes.input} 
            onClick={(e) => setNewEmail(e.target.value)}
            InputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}/>
          <TextField label="Full Name" variant="outlined" fullWidth
          onClick={(e) => setNewFullName(e.target.value)}
            className={classes.input} 
            InputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}/>
          <TextField label="Phone" variant="outlined" fullWidth
          onClick={(e) => setNewPhone(e.target.value)}
            className={classes.input} 
            InputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}/>
          <TextField label="Salary" variant="outlined" fullWidth
          onClick={(e) => setNewSalary(e.target.value)}
            className={classes.input} 
            InputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}/>
            <TextField label="dd/mm/yyyy" variant="outlined" fullWidth
            onClick={(e) => setNewDate(e.target.value)}
            className={classes.input} 
            InputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}/>
          </div>
            <Button 
            variant="contained" color="primary">Submit</Button>
      </div>
    </div>
  );
}