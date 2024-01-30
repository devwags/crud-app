import { Alert, Button, Card, CardActions, CardContent, Modal, TextField, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { modalStyle } from '../../utils/modalStyle'

const LoginModal = ({show, close}) => {
    const {setIsLoggedIn, setAuthUser } = useAuth();
    const [showRegister, setShowRegister] = useState(false);
    const [showGoodRegistrationAlert, setShowGoodRegistrationAlert] = useState(false)
    const [showBadRegistrationAlert, setShowBadRegistrationAlert] = useState(false)
    const [showBadLoginAlert, setShowBadLoginAlert] = useState(false);
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const login = async () => {

        const response = await fetch('http://localhost:8080/api/users/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: username, password: password})
        })
        const body = await response.json()
        
        response.status === 200 ? handleGoodLogin(body) : handleBadLogin();
    }

    const register = async () => {
        clearAlerts();
        const response = await fetch('http://localhost:8080/api/users/register', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({firstname, lastname, username, password})
        })
        const body = await response.json()

        response.status === 200 ? handleGoodRegistration() : handleBadRegistration()
    }

    const handleGoodLogin = (user) => {
        setIsLoggedIn(true)
        setAuthUser(user);
        close();
        navigate(`/user/${user?.id}/items`)
    }

    const handleBadLogin = () => {
        setShowBadLoginAlert(true);
    }

    const handleGoodRegistration = () => {
        setShowGoodRegistrationAlert(true);
        setShowRegister(false);

    }
    
    const handleBadRegistration = () => {
        setShowBadRegistrationAlert(true);
    }

    const clearAlerts = () => {
        setShowBadLoginAlert(false)
        setShowGoodRegistrationAlert(false)
        setShowBadRegistrationAlert(false)
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
                    {showRegister && <>
                        <TextField id="input-firstname" label="First Name" variant="outlined" fullWidth sx={{mb: '.5em'}} onChange={(e) => setFirstName(e.target.value)}/>
                        <TextField id="input-lastname" label="Last Name" variant="outlined" fullWidth sx={{mb: '.5em'}} onChange={(e) => setLastName(e.target.value)}/>  
                    </>}
                    <TextField id="input-username" label="Username" variant="outlined" fullWidth sx={{mb: '.5em'}} onChange={(e) => setUserName(e.target.value)}/>
                    <TextField id="input-password" label="Password" variant="outlined" fullWidth sx={{mb: '.5em'}} onChange={(e) => setPassword(e.target.value)}/>
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
                {showBadLoginAlert && <Alert severity="error">Invalid Login</Alert>}
                {showGoodRegistrationAlert && <Alert severity="success">Registration Successful</Alert>}
                {showBadRegistrationAlert && <Alert severity="error">Registration Failed</Alert>}
            </Card>
        </Modal>
    )
}

export default LoginModal;