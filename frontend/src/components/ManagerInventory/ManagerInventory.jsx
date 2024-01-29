import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, IconButton } from "@mui/material"
import { AddCircle, Delete, Edit} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { formatDescription } from "../../utils/formatDescription";
import ItemModal from "../ItemModal/ItemModal";

const ManagerInventory = () => {
    const [items, setItems] = useState();
    const [showItemModal, setShowItemModal] = useState(false);
    const {authUser} = useAuth();
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`http://localhost:8080/api/users/${authUser?.id}/items`)
            .then((res) => res.json())
            .then((items) => setItems(items))
            .catch((err) => console.log(err))
            //eslint-disable-next-line
    },[items])

    const deleteItem = async (itemId) => {
        await fetch(`http://localhost:8080/api/items/`, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: itemId})
        })
    }

    return (
        <>
            <Grid container spacing={2} pt="1em" px="1em">
                {items && items.map((item) => (
                    <Grid key={item.id} item xs={3}>
                        <Card>
                            <CardMedia 
                                onClick={()=>navigate(`/item/${item?.id}`)}
                                component="img"
                                alt={item?.itemName}
                                image={item?.imageUrl}
                                height="300"
                                sx={{cursor:'pointer'}}
                            />
                            <CardContent>
                                <Typography fontWeight="bold">{item?.itemName}</Typography>
                                <Typography>Quantity: {item?.quantity}</Typography>
                                <Typography mt="1em">{formatDescription(item?.description)}</Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton aria-label="edit">
                                    <Edit />
                                </IconButton>
                                <IconButton aria-label="delete" onClick={()=>deleteItem(item.id)}>
                                    <Delete />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
                <Grid item alignSelf="center" xs={3}>
                    <IconButton height="300" size="large" fontSize="large" onClick={()=>setShowItemModal(true)}>
                        <AddCircle />
                    </IconButton>
                </Grid>
            </Grid>
            <ItemModal showItemModal={showItemModal} setShowItemModal={setShowItemModal}></ItemModal>
        </>
    )
}

export default ManagerInventory;