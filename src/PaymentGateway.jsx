/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const PaymentGateway = () => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePaymentSubmit = (event) => {
    event.preventDefault();

    // Perform payment processing logic here based on the selected payment method
    // This can include API calls to the payment gateway provider

    // Reset the payment method after successful payment
    setPaymentMethod("");
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Payment Gateway Integration</h1>
      <form onSubmit={handlePaymentSubmit}>
        <div className="mb-4">
          <label htmlFor="paymentMethod" className="block font-bold mb-2">
            Select Payment Method:
          </label>
          <select
            id="paymentMethod"
            className="w-full p-2 border border-gray-300 rounded"
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
            required
          >
            <option value="">Select</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="stripe">Stripe</option>
          </select>
        </div>
        {paymentMethod && (
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Pay with {paymentMethod}
          </button>
        )}
      </form>
    </div>
  );
};
export default PaymentGateway;
