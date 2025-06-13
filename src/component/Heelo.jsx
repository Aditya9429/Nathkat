import React, { useEffect, useState } from 'react'

export default function Heelo() {
    const [update, setUpdate] = useState([]);
    const [loading, setLoading] = useState(false);
    async function fetchData() {
        try {
            setLoading(true);
            const apiResponse = await fetch('https://fakestoreapi.com/products');
            const result = await apiResponse.json();
            console.log(result);
           
            if (result && result.length > 0) {
                setLoading(false);
                setUpdate(result)
            }
        }
        catch (e) {
            console.log(e);
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>
            {
                update && update.length > 0 ?
                    update.map((item) => (
                        <div key={item.id}>
                            <p>{item.category}</p>

                            <img src= {item.image} alt={item.category} />
                        </div>
                    ))
                    : null
            }
        </div>
    )
}
