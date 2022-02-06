import { Paper, Table, TableBody, 
TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Delete, BorderColor } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Workers = () => {

  const useStyle = makeStyles((theme) => ({
    tableHead : {
      height : "4rem",
      backgroundColor : "skyblue",
    },
    tBody : {
      height : "3rem",
      "&:hover" : {
        backgroundColor : "#00000011",
      }
    },
    delete : {
      color : "#ff3838",
      cursor : "pointer",
      marginRight : "0.4rem"
    },
    edit : {
      color : "#0f7e05",
      cursor : "pointer"
    },
    title : {
      padding : "1rem 0",
      display : "flex",
      alignItems : "center",
      justifyContent : "space-between",
    },
    btn: {
      padding : "0.5rem",
      borderRadius : "5px",
      cursor : 'pointer',
      border : "none",
      backgroundColor : "skyblue",
      fontWeight : "500",
      "&:hover" : {
        backgroundColor : "#03778b45"
      }
    }
  }));
  const classes = useStyle();

  const rows = useSelector(state => state);

  const dispatch = useDispatch();

  return (
        <div className={classes.container}>
          <div className={classes.title}>
            <h4>Workers Lists</h4>
            <Link to="/add"><button className={classes.btn}>Create New</button></Link>
          </div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead >
                  <TableRow className={classes.tableHead}>
                    <TableCell style={{fontWeight : "600"}}>Email</TableCell>
                    <TableCell style={{fontWeight : "600"}} align="right">Full Name</TableCell>
                    <TableCell style={{fontWeight : "600"}} align="right">Phone NO</TableCell>
                    <TableCell style={{fontWeight : "600"}} align="right">Salary</TableCell>
                    <TableCell style={{fontWeight : "600"}} align="right">Enter Date</TableCell>
                    <TableCell style={{fontWeight : "600"}} align="right">Delete/Edit</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      className={classes.tBody}
                    >
                      <TableCell component="th" scope="row">
                        {row.email}
                      </TableCell>
                      <TableCell style={{fontWeight : "400"}} align="right">{row.fullName}</TableCell>
                      <TableCell style={{fontWeight : "400"}} align="right">{row.phone}</TableCell>
                      <TableCell style={{fontWeight : "400"}} align="right">${row.salary}</TableCell>
                      <TableCell style={{fontWeight : "400"}} align="right">{row.date}</TableCell>
                      <TableCell align="right">
                          <Delete onClick={() => {dispatch({type : "REMOVE_ITEM", payload : row.id})}} className={classes.delete} />
                          <Link to={`/edit/${row.id}`}><BorderColor className={classes.edit}/></Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
        </div>
  );
};

export default Workers;
