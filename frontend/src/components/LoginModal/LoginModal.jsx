import { Button, Card, CardActionArea, CardContent, Modal, TextField, Typography } from "@mui/material";

const LoginModal = ({show, close}) => {

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
                <CardActionArea id="login-modal-action-area">
                    <Button size="small">Register</Button>
                    <Button size="small">Login</Button>
                </CardActionArea>
            </Card>
        </Modal>
    )
}

export default LoginModal;