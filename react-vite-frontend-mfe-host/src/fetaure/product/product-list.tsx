// 1. A pure, generic list component
function ProductList({ children }) {
  return <div className="product-grid">{children}</div>;
}

export default ProductList;