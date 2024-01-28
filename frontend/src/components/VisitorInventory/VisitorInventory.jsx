import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

const VisitorInventory = ( { url } ) => {
    let [items, setItems] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setItems(data)
            })
            .catch((err) => console.log(err))
    }, [])

    return;
}

export default VisitorInventory;