import { Button, Card, CardActions, CardContent, Modal, TextField, Typography } from "@mui/material";
import { modalStyle } from "../../utils/modalStyle";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

const ItemModal = ({showItemModal, setShowItemModal, itemEditMode, setItemEditMode, selectedItem}) => {
    const [inputName, setInputName] = useState('');
    const [inputDescription, setInputDescription] = useState('');
    const [inputQuantity, setInputQuantity] = useState(0);
    const [inputUrl, setInputUrl] = useState('');
    const {authUser} = useAuth();

    useEffect(() => {
        if (selectedItem) {
            setInputName(selectedItem.itemName)
            setInputDescription(selectedItem.description)
            setInputQuantity(selectedItem.quantity)
            setInputUrl(selectedItem.imageUrl)
        }
    }, [selectedItem])

    const addItem = async () => {
        const userId = authUser.id;
        await fetch('http://localhost:8080/api/items', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userId, itemName: inputName, description: inputDescription, quantity: inputQuantity, imageUrl: inputUrl})
        })
        setShowItemModal(false);
    }

    const updateItem = async () => {
        const userId = authUser.id;
        await fetch(`http://localhost:8080/api/items/${selectedItem.id}`, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: selectedItem.id, userId, itemName: inputName, description: inputDescription, quantity: inputQuantity, imageUrl: inputUrl})
        })
        setShowItemModal(false);
    }

    const handleClose = () => {
        setItemEditMode(false);
        setShowItemModal(false);
    }

    return (
        <Modal
            open={showItemModal}
            onClose={handleClose}
        >
            <Card sx={modalStyle}>
                <CardContent>
                    <Typography fontWeight={400} fontSize={24} textAlign="center">Item Manager</Typography>
                    <Typography textAlign="center" mb="2em">Enter Item Details Below</Typography>
                    <TextField id="input-item-name" label="Item Name" variant="outlined" fullWidth defaultValue={selectedItem?.itemName} onChange={(e)=>setInputName(e.target.value)}sx={{mb: '.5em'}}/>
                    <TextField id="input-description" label="Description" variant="outlined" fullWidth defaultValue={selectedItem?.description} onChange={(e)=>setInputDescription(e.target.value)} sx={{mb: '.5em'}}/>
                    <TextField id="input-quantity" label="Quantity" variant="outlined" type="number" fullWidth defaultValue={selectedItem?.quantity} onChange={(e)=>setInputQuantity(e.target.value)} sx={{mb: '.5em'}}/>
                    <TextField id="input-image-url" label="Image URL" variant="outlined" fullWidth defaultValue={selectedItem?.imageUrl} onChange={(e)=>setInputUrl(e.target.value)} sx={{mb: '.5em'}}/>
                </CardContent>
                <CardActions id="login-modal-action-area">
                    <Button size="small" onClick={() => setShowItemModal(false)}>Cancel</Button>
                    {itemEditMode ? 
                        <Button size="small" onClick={updateItem}>Update</Button> :
                        <Button size="small" onClick={addItem}>Create</Button>
                    }
                </CardActions>
            </Card>
        </Modal>
    )
}

export default ItemModal;