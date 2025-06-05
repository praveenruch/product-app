import {useEffect, useState} from 'react'
import {AddProduct} from "./components/AddProduct.jsx";
import {ProductList} from "./components/ProductList.jsx";

import './App.css'

function App() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false);


    const createAPIUrl = import.meta.env.VITE_CREATE_API_URL? import.meta.env.VITE_CREATE_API_URL: "http://localhost:8080/api/create";
    const fetchAPIUrl = import.meta.env.VITE_FETCH_API_URL? import.meta.env.VITE_FETCH_API_URL: "http://localhost:8080/api/products";

    useEffect(() => {
        setLoading(true);
        const fetchProducts = async () => {
            try{
                const res = await fetch(fetchAPIUrl, {});
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
    },[setProducts,setLoading,setError,fetchAPIUrl]);

    function addNewProduct(product) {
        setProducts([...products, product]);
    }

  return (
    <>
        {loading &&  <p>Loading products...</p>}
        {error && <p>error loading products</p>}
        <AddProduct addNewProduct={addNewProduct} createUrl={createAPIUrl} />
        <ProductList products={products}></ProductList>

    </>
  )
}

export default App
