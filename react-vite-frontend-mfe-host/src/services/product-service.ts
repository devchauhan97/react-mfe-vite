import api from ".";

const ProductService = {

  get: async () => { 
        return  api.get("api/products").then((response) => {
            return response.data;
        }).catch((error) => {
            console.error("Error fetching products:", error);
            throw error;
        });
  }
}

export default ProductService;

 