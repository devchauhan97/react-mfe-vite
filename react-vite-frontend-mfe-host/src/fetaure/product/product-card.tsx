// 2. A presentation-only card component
import { memo } from 'react'; 

const ProductCard = memo(function ProductCard({ product, onAddToCart }) {

    console.log("Rendering ProductCard:", product.product_name);
  return (
    <div className="product-card">
        <div className="product-image">
          {/* <img src={product.image_url} alt={product.product_name} /> */}
        
            <h3>{product.product_name}</h3>
            <p>${product.price}</p>
        </div>
      <button onClick={() => onAddToCart(product.id)}>
        Add to Cart
      </button>
    </div>
  );
});

export default ProductCard;