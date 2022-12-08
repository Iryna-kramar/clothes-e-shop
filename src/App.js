import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
// import { Login, Register } from "./components";
import Store from "./pages/Store";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";
import Navbar from "./components/Navbar";
import {ShoppingCartProvider} from "./context/ShoppingCartContext"

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/store" element={<Store />} />
          <Route path="/" element={<Store />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
