import { Alert, Button, Card, CardActions, CardContent, Modal, TextField, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginModal = ({show, close}) => {
    const {setIsLoggedIn, setAuthUser } = useAuth();
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 250,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        borderRadius: '25px',
        boxShadow: 24,
        p: 4,
      };

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
            onClose={close}
        >
            <Card sx={style}>
                <CardContent>
                    <Typography fontWeight={400} fontSize={24} textAlign="center">Sign In</Typography>
                    <Typography textAlign="center" mb="2em">Inventory Manager Account</Typography>
                    <TextField id="input-username" label="Username" variant="outlined" fullWidth sx={{mb: '.5em'}}/>
                    <TextField id="input-password" label="Password" variant="outlined" fullWidth/>
                </CardContent>
                <CardActions id="login-modal-action-area">
                    <Button size="small">Register</Button>
                    <Button size="small" onClick={login}>Login</Button>
                </CardActions>
                {showAlert && <Alert severity="error">Invalid Login</Alert>}
            </Card>
        </Modal>
    )
}

export default LoginModal;