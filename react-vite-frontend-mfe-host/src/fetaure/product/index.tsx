import { useCallback, useState } from "react";
import ProductCard from "./product-card";
import ProductList from "./product-list";
import { useNavigate } from "react-router-dom";


const productLink='https://buy.stripe.com/test_00w4gzfOB2RZ43o2rmaVa02'
const Product = (props:any) => {
  const [cart, setCart] = useState([]);
  const navigation = useNavigate(); // Access navigation from react-router-dom

  // useCallback protects ProductCard from re-rendering 
  // because the function reference stays the same
  const handleAddToCart = useCallback((productId:any) => {
    console.log("Adding product to cart:", productId);
    setCart((prevCart:any[]) => [...prevCart, productId]);
  }, []);
  const redirectToLogin = () => {
    window.location.href = productLink;
    
  };
  return (
    <div>
        
        <h1>Product List </h1> 
          <ProductList>
            {
            props.products.map((product:any) => (
                <ProductCard
                    key={product.product_id}
                    product={product}
                    onAddToCart={handleAddToCart}
                />
            ))}
        </ProductList>
        <button onClick={redirectToLogin}>View Cart</button>
    </div>
  )
}
export default Product;