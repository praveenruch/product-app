import {useState}   from "react";
import styled from "styled-components";


export function AddProduct({addNewProduct, createUrl}) {

    const [name, setName] = useState("");

    const Label = styled.label`
        margin:10px
    `

    const Button = styled.button`
        background: transparent;
        border-radius: 3px;
        border: 2px solid #BF4F74;
        color: #BF4F74;
        margin: 0 10px;
        padding:3px 10px;
    `

    const addProduct = async(e) => {
        e.preventDefault();
        fetch(createUrl, {
            method: "POST",
            body: JSON.stringify({
                name: name,
            }),
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(res => res.json())
            .then(data => {
                addNewProduct(data);
            })
    }
    return (
        <form onSubmit={addProduct}>
            <Label>Name:</Label>
            <input type="text" name="productname" placeholder="Product Name" value={name} onChange={(e) => {
                setName(e.target.value);
            }} required/>
            <Button type="submit">Add Product</Button>
        </form>
    )
}