import React from "react";
import styles from "./ProductInput.module.css"

export default function ProductInput({submitProduct}) {
    const [formData, setFormData] = React.useState({});

    const onchangeHandle = (e) => {
        let { name, value} = e.currentTarget;

        setFormData( {
            ...formData,
            [name] : value
        })
    }

    const addProduct = (e) => {
        e.preventDefault();
        console.log(formData)
        submitProduct(formData);
        setFormData({})
    }
    console.log("formData", formData)

    return (
        <div>
            
            <form onSubmit={addProduct}>
                <h1>CREATE PRODUCT</h1>
                <div><input type="text" placeholder="Enter product name..." name="title" value={formData.title} onChange={onchangeHandle}/></div>
                <div><input type="number" placeholder="Enter product cost..." name="cost" value={formData.cost} onChange={onchangeHandle} /></div>
                <div>
                    <select name="catego" value={formData.value} onChange={onchangeHandle} style={{width:"102%"}}>
                        <option value="">SELECT</option>
                        <option value="fruit">FRUIT</option>
                        <option value= "vegitable">VEGETABLE</option>
                        <option value="provision">PROVISION</option>
                    </select>
                </div>
                <div><input type="text" placeholder="Paste Image URL Here" name="url" value={formData.url} onChange={onchangeHandle}/></div>
                <div><input type="submit" value="SUBMIT" className={styles.submit}/> </div>

                
                
            </form>
        </div>
    )
}