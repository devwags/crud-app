import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { formatDescription } from "../../utils/formatDescription";


const ItemDetails = () => {
    const { id } = useParams();
    const [ item, setItem ] = useState({})

    useEffect(() => {
        fetch(`http://localhost:8080/api/items/${id}`)
            .then((res) => res.json())
            .then((data) => setItem(data))
            .catch((err) => console.log(err))
            //eslint-disable-next-line
    }, []) 

    return (
        <>
            {item &&  
            <Card display="flex">
                <Box display="flex">
                    <CardMedia 
                        component="img"
                        alt={item?.itemName}
                        image={item?.imageUrl}
                        height="500"
                        sx={{objectFit:"contain"}}
                    />
                    <CardContent>
                        <Typography fontWeight="bold">{item?.itemName}</Typography>
                        <Typography>Quantity: {item?.quantity}</Typography>
                        <Typography mt="1em">{item?.description}</Typography>
                    </CardContent>
                </Box>
            </Card>
            
            }
        </>
    )
}

export default ItemDetails;