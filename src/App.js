import React, { useEffect } from "react";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import CheckOut from "./Components/CheckOut/CheckOut";
import Login from "./Components/Login/Login";
import { useStateValue } from "./Components/StateProvider/StateProvider";
import { auth } from "./firebase";
import Payment from "./Components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders/Orders";

const promise = loadStripe(
  "pk_test_51MekSYGsGIWBR0R5UC2dbpcSBNO1zPpfxLQxci0cpImzH0uYkzpCU2JeLiHVDGvfIsjmVlJoon63Wxa0ANhvBii100slOoLySP"
);

function App() {
  const [{ basket }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/orders" element={[<Header />, <Orders />]} />
        <Route path="/" element={[<Header />, <Home />]} />
        <Route path="/checkout" element={[<Header />, <CheckOut />]} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/payment"
          element={[
            <Header />,
            <Elements stripe={promise}>
              <Payment />
            </Elements>,
          ]}
        />
      </Routes>
    </div>
  );
}

export default App;
