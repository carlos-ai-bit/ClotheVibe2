/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform payment processing logic here
    // You can send the payment details to a backend API

    // Clear form fields after payment is processed
    setCardNumber("");
    setExpiryDate("");
    setCvv("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white rounded shadow"
    >
      <h2 className="text-xl font-bold mb-4">Payment Details</h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Card Number
        </label>
        <input
          type="text"
          value={cardNumber}
          onChange={handleCardNumberChange}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          placeholder="Enter card number"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Expiry Date
        </label>
        <input
          type="text"
          value={expiryDate}
          onChange={handleExpiryDateChange}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          placeholder="MM/YY"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">CVV</label>
        <input
          type="text"
          value={cvv}
          onChange={handleCvvChange}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          placeholder="Enter CVV"
        />
      </div>

      <button
        type="submit"
        className="bg-indigo-500 text-white px-4 py-2 rounded font-semibold hover:bg-indigo-600"
      >
        Pay Now
      </button>
    </form>
  );
};

export default PaymentForm;
