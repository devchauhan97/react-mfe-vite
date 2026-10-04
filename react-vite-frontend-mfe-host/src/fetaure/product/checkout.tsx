import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import api from '../../services';
import PaymentService from '../../services/payment-service';

// Load your Publishable Key (Safe for the frontend)
const stripePromise = loadStripe('pk_test_51UIjsLHCJNUHkVwMY3WxvoHIzqEh0TY0df6wv6VUpj68hzYBG1aA3FJIgIxlHrorbhDvyK6TXX0xZyhsPmc8ShhP00BfumoNTB');

function CheckoutForm() {

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    // 1. Call your backend to create a PaymentIntent and get the clientSecret
    const res = await PaymentService.get();
    const { clientSecret } = await res.json();

    // 2. Confirm the payment on the client side
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else if (result.paymentIntent.status === 'succeeded') {
      console.log('Payment successful!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>Pay</button>
    </form>
  );
}

// Wrap your app or component
export default function Checkout() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}
