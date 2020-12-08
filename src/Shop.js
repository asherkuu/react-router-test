import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch("https://fortnite-api.theapinetwork.com/upcoming/get");
        const json = await data.json();
        setItems(json.data);
    };
    console.log(items);
    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <div>
            {items.length === 0 ? (
                <div>loading...</div>
            ) : (
                <div>
                    {items.map((item) => (
                        <div key={item.itemId}>
                            <Link to={`/shop/${item.itemId}`}>
                                <h4>{item.item.name}</h4>
                                <h6>{item.itemId}</h6>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Shop;
