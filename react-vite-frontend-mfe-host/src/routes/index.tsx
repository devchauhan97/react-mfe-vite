import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "../fetaure/dashboard";
import Login from "../fetaure/login";
import Checkout from "../fetaure/product/checkout";
import Payment from "../fetaure/payment";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/paymentsuccess" element={<Payment />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
