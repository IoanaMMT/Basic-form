
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import * as React from 'react';
import { useState } from 'react';

export default function BasicForm () { 
    const[entry, setEntry] = useState({
                                        firstName: "",
                                        surName: "",
                                        email: ""
    });

    const[submittedData, setSubmittedData]= useState(null)

    const handleChange = (e) => {
        const{name, value} = e.target;
        setEntry((prevEntry) =>({...prevEntry, [name]: value,}));
        
    }

    const handleClick = () => {
        setSubmittedData(entry);
        console.log('Submitted:', submittedData);
    }

    const ariaLabel = { 'aria-label': 'description' };

    return (
        <>
            <div className='container'>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div className='inputs'>
                        <Input placeholder="First Name" 
                                inputProps={ariaLabel} 
                                type = "text"
                                name = "firstName"
                                value = {entry.firstName}
                                onChange = {handleChange}/>
                        <Input placeholder="Surname" 
                                inputProps={ariaLabel} 
                                type = "text"
                                name = "surName"
                                value = {entry.surName}
                                onChange = {handleChange}/>
                        <Input placeholder="Email" error 
                                inputProps={ariaLabel} 
                                type = "email"
                                name = "email"
                                value = {entry.email}
                                onChange = {handleChange}/>
                    </div>
                    <button onClick={handleClick}>Submit</button>
                </Box>
            </div>

        </>
    )
}

