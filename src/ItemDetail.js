import React, { useState, useEffect } from "react";

const Item = ({ match }) => {
    useEffect(() => {
        fetchItem();
    }, []);

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
        const item = await data.json();
        setItem(item.data);
        console.log(item);
    };

    return (
        <div>
            {!item.itemId ? (
                <div>loading...</div>
            ) : (
                <div>
                    <img src={item.item.images.background} alt="image" />
                </div>
            )}
        </div>
    );
};

export default Item;
