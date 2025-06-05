import styled from "styled-components";

export function ProductList({products}) {

    const Product = styled.div`
      margin:10px;
  `
    return (
        <div>
        <h2>Products</h2>
            {
                products && products.map((product, index) => (
                    <Product key={index}>
                        {product.name}
                    </Product>
                ))
            }
        </div>
    )
}