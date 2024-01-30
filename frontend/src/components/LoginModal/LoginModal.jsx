import { Alert, Button, Card, CardActions, CardContent, Modal, TextField, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { modalStyle } from '../../utils/modalStyle'

const LoginModal = ({show, close}) => {
    const {setIsLoggedIn, setAuthUser } = useAuth();
    const [showRegister, setShowRegister] = useState();
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    const login = async () => {
        const username = document.getElementById("input-username").value;
        const password = document.getElementById("input-password").value;

        const response = await fetch('http://localhost:8080/api/users/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: username, password: password})
        })
        const body = await response.json()
        
        response.status === 200 ? handleSuccess(body) : handleBadStatus();
    }

    const register = async () => {

    }

    const handleSuccess = (user) => {
        setIsLoggedIn(true)
        setAuthUser(user);
        close();
        navigate(`/user/${user?.id}/items`)
    }

    const handleBadStatus = () => {
        setShowAlert(true);
    }
    
    return (
        <Modal
            open={show}
            onClose={() => {
                setShowRegister(false);
                close();
            }}
        >
            <Card sx={modalStyle}>
                <CardContent>
                    <Typography fontWeight={400} fontSize={24} textAlign="center">Sign In</Typography>
                    <Typography textAlign="center" mb="2em">Inventory Manager Account</Typography>
                    <TextField id="input-username" label="Username" variant="outlined" fullWidth sx={{mb: '.5em'}}/>
                    <TextField id="input-password" label="Password" variant="outlined" fullWidth sx={{mb: '.5em'}}/>
                    {showRegister && <>
                        <TextField id="input-firstname" label="First Name" variant="outlined" fullWidth sx={{mb: '.5em'}}/>
                        <TextField id="input-lastname" label="Last Name" variant="outlined" fullWidth sx={{mb: '.5em'}}/>  
                    </>}
                </CardContent>
                <CardActions id="login-modal-action-area">
                    {showRegister ? <>
                        <Button size="small" onClick={() => setShowRegister(false)}>Cancel</Button>
                        <Button size="small" onClick={register}>Register</Button>
                    </> 
                    : <>
                        <Button size="small" onClick={() => setShowRegister(true)}>Register</Button>
                        <Button size="small" onClick={login}>Login</Button>
                    </>}
                </CardActions>
                {showAlert && <Alert severity="error">Invalid Login</Alert>}
            </Card>
        </Modal>
    )
}

export default LoginModal;