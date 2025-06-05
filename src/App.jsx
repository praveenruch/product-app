import {useEffect, useState} from 'react'
import {AddProduct} from "./components/AddProduct.jsx";
import {ProductList} from "./components/ProductList.jsx";

import './App.css'

function App() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true);
        const fetchProducts = async () => {
            try{
                const res = await fetch('http://localhost:8080/api/products');
                const json = await res.json();
                setProducts(json);
                setLoading(false);
            }
            catch(err){
                console.log(err);
                setError(err);
                setLoading(false);
            }
        }
        fetchProducts();
    },[setProducts,setLoading,setError]);

    function addNewProduct(product) {
        setProducts([...products, product]);
    }

  return (
    <>
        {loading &&  <p>Loading products...</p>}
        {error && <p>error loading products</p>}
        <AddProduct addNewProduct={addNewProduct} />
        <ProductList products={products}></ProductList>

    </>
  )
}

export default App
