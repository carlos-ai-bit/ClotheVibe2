/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Auth from "./Auth";
import Login from "./Login ";
import SignUp from "./SignUp ";
import PaymentGateway from "./PaymentGateway";
import ProductList from "./ProductList";
import ProductSearch from "./ProductSearch";
import Shoes from "./Shoes";
import TShirt from "./TShirt";
import Jeans from "./Jeans";
import Shorts from "./Shorts";
import Cap from "./Cap";
import Jersey from "./Jersey";
import Socks from "./Socks";
import UnderGarments from "./UnderGarments";
import Lingerie from "./Lingerie";
import GymWearWomen from "./GymWearWomen";
import GymWearMen from "./GymWearMen";
import Scarf from "./Scarf";
import FootballBoots from "./FootballBoots";
import Hijabs from "./Hijabs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Router>
        <Routes>
          {" "}
          <Route path="/" element={<ProductList />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/PaymentGateway" element={<PaymentGateway />} />
          <Route path="/ProductSearch" element={<ProductSearch />} />
          <Route path="/Shoes" element={<Shoes />} />
          <Route path="/TShirt" element={<TShirt />} />
          <Route path="/Jeans" element={<Jeans />} />
          <Route path="/Shorts" element={<Shorts />} />
          <Route path="/Cap" element={<Cap />} />
          <Route path="/Jersey" element={<Jersey />} />
          <Route path="/Socks" element={<Socks />} />
          <Route path="/UnderGarments" element={<UnderGarments />} />
          <Route path="/Lingerie" element={<Lingerie />} />
          <Route path="/GymWearWomen" element={<GymWearWomen />} />
          <Route path="/GymWearMen" element={<GymWearMen />} />
          <Route path="/Scarf" element={<Scarf />} />
          <Route path="/FootballBoots" element={<FootballBoots />} />
          <Route path="/Hijabs" element={<Hijabs />} />
          <Route path="/Auth" element={<Auth />} />

        </Routes>
      </Router>
    </div>
  );
};

export default App;
