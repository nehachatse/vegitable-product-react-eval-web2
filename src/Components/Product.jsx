import React from "react";
import ProductInput from "./ProductInput";
import ProductItem from "./ProductItem";
import Selector from "./Selector";

export default function Product() {
    const [data, setData] = React.useState([]);
    const [category, setCategory] = React.useState("fruit")

    React.useEffect( () => {
        fetch("http://localhost:3000/products")
        .then( (res) => res.json())
        .then( (res) => setData(res))
        .catch( (err) => console.log(err))
    }, [])

    const onSubmit = (newData) => {
        console.log("data = ", newData);
        const config = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(newData)
        }
        fetch("http://localhost:3000/products", config)
        setData([...data, newData]);
        
    }

    const selectCato = (type) => {
        setCategory(type)
    }
    console.log("data = ", data);
    return (
        <>
            <ProductInput submitProduct={onSubmit} />
            <Selector selectCato={selectCato} category={category}/>
            <ProductItem data={data.filter( (ele) => ele.catego === category) } />
        </>
    )
}