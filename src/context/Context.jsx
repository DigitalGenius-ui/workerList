import React, { createContext, useContext, useState } from 'react';

export const WorkerContext = createContext();

const Context = (props) => {

    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(false);

    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [salary, setSalary] = useState("");
    const [date, setDate] = useState("");

    const [newEmail, setNewEmail] = useState("");
    const [newFullName, setNewFullName] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const [newSalary, setNewSalary] = useState("");
    const [newDate, setNewDate] = useState("");

    return(
        <WorkerContext.Provider value={{
            open, setOpen,
            edit, setEdit,
            
            email, setEmail,
            fullName, setFullName,
            phone, setPhone,
            salary, setSalary,
            date, setDate,

            newEmail, setNewEmail,
            newFullName, setNewFullName,
            newPhone, setNewPhone,
            newSalary, setNewSalary,
            newDate, setNewDate,
            
        }}>
            {props.children}
        </WorkerContext.Provider>
    );
}

export default Context;


export const WorkersState = () => useContext(WorkerContext);