import api from ".";

const PaymentService = {

  get: async () => { 
        return  api.get("api/create-payment-intent").then((response) => {
            return response.data;
        }).catch((error) => {
            console.error("Error fetching products:", error);
            throw error;
        });
  }
}

export default PaymentService;

 