import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import Form from "react-bootstrap/Form";

let emailRegex;
emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

function DataFetching() {
    const [user, setUser] = useState({})
    const [emailError, setEmailError] = useState(false)
    const [loading, setLoad] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)
    const [id, setId] = useState("")

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                setUser(res.data)
                setLoad(false)
            })
            .catch(err => {
                console.log(err)
                setLoad(false)
                setHasError(true)
            })
    }, [idFromButtonClick])


    const handleClick = () => {
        //validateEmail(id);
        setIdFromButtonClick(id);
        setTimeout(()=> setLoad(false), 70000)
    }

    const validateEmail = (email) => {

        if (!email.includes("@") || email === emailRegex) {
            setEmailError(true);
        }else{
            setLoad(true);
            setIdFromButtonClick(id);
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        setEmailError(false);
        setHasError(false);
        setId(e.target.value);
    }


    return (
        <div>
            <Form.Control
                type="email"
                name='email'
                onChange={handleChange}
                value={id}
                required
            />

            {
                loading ? <Alert severity="info">Buscando...</Alert> : hasError ? <Alert severity="error">No te encontramos...</Alert> : null
            }

            { emailError?  <div style={{ fontSize: 12, color: "red" }}>Ingrese un email valido</div> : null }
            <br/>

            <Button
                onClick={handleClick}
                variant="contained"
                className="btn"
                type="submit"
            >Buscame</Button>

        </div>
    )
}

export default DataFetching