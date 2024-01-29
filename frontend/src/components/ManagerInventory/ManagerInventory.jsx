import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { formatDescription } from "../../utils/formatDescription";

const ManagerInventory = () => {
    const [items, setItems] = useState();
    const {authUser} = useAuth();
    const navigate = useNavigate

    useEffect(()=>{
        fetch(`http://localhost:8080/api/users/${authUser?.id}/inventory`)
            .then((res) => res.json())
            .then((items) => setItems(items))
            .catch((err) => console.log(err))
    },[])

    return (
        <Grid container spacing={2} pt="1em" px="1em">
            {items && items.map((item) => (
                <Grid key={item.id} item xs={3}>
                    <Card onClick={()=>navigate(`/item/${item?.id}`)} sx={{cursor:'pointer'}}>
                        <CardMedia 
                            component="img"
                            alt={item?.itemName}
                            image={item?.imageUrl}
                            height="300"
                        />
                        <CardContent>
                            <Typography fontWeight="bold">{item?.itemName}</Typography>
                            <Typography>Quantity: {item?.quantity}</Typography>
                            <Typography mt="1em">{formatDescription(item?.description)}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}

export default ManagerInventory;