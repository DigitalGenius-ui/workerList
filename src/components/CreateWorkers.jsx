import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { WorkersState } from '../context/Context';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container : {
    display: "flex",
    alignItems : "center",
    justifyContent : "center"
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
  }
}));

export default function CreateWorker() {
  const { setEmail, 
  setFullName, setPhone, setSalary, setDate, email, fullName, phone ,salary, date} = WorkersState();
  const classes = useStyles();

  const workers = useSelector((state) => state.worker);
  const checkEmail = workers.find(worker => worker.email === email && email);
  const checkPhone = workers.find(worker => worker.phone === parseInt(phone));
  const checkUser = workers.find(worker => worker.fullName === fullName && fullName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addItem = () => {
    if(!email || !fullName || !phone || !salary || !date){
        return alert("Please fill all the spaces");
      }
    if(checkEmail){
      return alert("This Email Already Exist");
    }
    if(checkPhone){
      return alert("This Number Already Exist");
    }
    if(checkUser){
      return alert("This Number Already Exist");
    }

    const data = {
      id : workers[workers.length -1 ].id + 1,
      email, fullName, phone ,salary, date
    }
    dispatch({
        type : "ADD_ITEM",
        payload : data,
    });
    navigate("/");
    setEmail(""); setFullName(""); setPhone(""); setSalary(""); setDate("");
  }
  
  return (
    <div className={classes.container}>
        <div className={classes.form}>
          <Typography variant="h4" className ={classes.title}>
              Create New Worker
          </Typography>
            <div className={classes.inputs}>
              <input placeholder="Email"
                type ="email"
                className={classes.input}
                style={{padding : "1rem 0.6rem"}} 
                onChange={(e) => setEmail(e.target.value)}
                value={email}/>

              <input placeholder="Full Name"
                className={classes.input}
                style={{padding : "1rem 0.6rem"}} 
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}/>

              <input placeholder="Phone" 
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                style={{padding : "1rem 0.6rem"}}
                type="number"
                className={classes.input} />

              <input placeholder="Salary"
                onChange={(e) => setSalary(e.target.value)}
                value={salary}
                style={{padding : "1rem 0.6rem"}}
                type="number"
                className={classes.input} />

              <input placeholder="dd/mm/yyyy" 
                onChange={(e) => setDate(e.target.value)}
                value={date}
                style={{padding : "1rem 0.6rem"}}
                className={classes.input}/>
            </div>
              <Button 
              onClick={addItem}
              variant="contained" color="primary">Submit</Button>
        </div>
    </div>
  );
}