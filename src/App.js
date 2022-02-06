import { makeStyles } from '@mui/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import CreateWorkers from './components/CreateWorkers';
import EditWorker from './components/EditWorker';
import Worker from './components/Worker';
function App() {

  const useStyles = makeStyles((theme) => ({
    container : {
      width : "85%",
      margin : "2rem auto"
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Worker />}/>
          <Route path="/add" element = {<CreateWorkers />}/>
          <Route path="/edit/:id" element = {<EditWorker />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
