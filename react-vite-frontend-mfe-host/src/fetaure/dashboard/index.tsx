import  { useEffect, useState } from "react";
import ProductService from "./../../services/product-service";

import Product from "../product";

const dashboard = () => {
    const [products, setProducts] = useState([]);
    const [timer, setTimer] = useState(0);
    useEffect(() => {
       ProductService.get().then((data) => {
        console.log("Products:", data);
            setProducts(data);
        }).catch((error) => {
            console.error("Error fetching products:", error);
        });
    }, []);
    
    return (
        <div> 
            <p>Welcome to the dashboard!</p>

            <Product products={products} />
        </div>
    )
}
export default dashboard;