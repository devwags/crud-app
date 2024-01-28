import { useEffect, useState } from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { formatDescription } from "../../utils/formatDescription";

const VisitorInventory = ( { url } ) => {
    let [items, setItems] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setItems(data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <Grid container spacing={2} pt="1em" px="1em">
            {items && items.map((item) => (
                <Grid key={item.id} item xs={3}>
                    <Card>
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

export default VisitorInventory;