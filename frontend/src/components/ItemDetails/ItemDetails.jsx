import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ItemDetails = () => {
    const { id } = useParams();
    const [ item, setItem ] = useState({})

    useEffect(() => {
        fetch(`http://localhost:8080/api/items/${id}`)
            .then((res) => res.json())
            .then((data) => setItem(data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <>
            {item && <Grid container spacing={2}>
                <Grid item> 
                    
                </Grid> 
            </Grid>
            }
        </>
    )
}

export default ItemDetails;