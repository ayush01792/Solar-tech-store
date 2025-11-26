import './App.css';

import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Home from "./Pages/Home";
import Contact from './Pages/Contact';
import About from "./Pages/About"
import Features from './Pages/Features';
import Testimonial from './Pages/Testimonial';
import Team from './Pages/Team';
import Service from './Pages/Service';
import Quote from './Pages/Quote';
import Project from './Pages/Project';
import Page404 from './Pages/Page404';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthProvider from './Context/AuthContext';
import ProductPage from './Pages/ProductPage';
import CartPage from './Pages/CartPage';
import CheckoutPage from './Pages/CheckoutPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from './Pages/CartProvider';
import MyOrders from './Pages/MyOrders';
import SubService from './Pages/SubService';
import SubService1 from './Pages/SubService1';
import SubService2 from './Pages/SubService2';
import SubService3 from './Pages/SubService3';
import SubService4 from './Pages/SubService4';
import SubService5 from './Pages/SubService5';

function App() {
  return (
    <>
     <CartProvider>
      <Router>
        <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Features" element={<Features />}></Route>
          <Route path="/Page404" element={<Page404 />}></Route>
          <Route path="/Project" element={<Project />}></Route>
          <Route path="/Quote" element={<Quote />}></Route>
          <Route path="/Service" element={<Service />}></Route>
          <Route path="/Team" element={<Team />}></Route>
          <Route path="/Testimonial" element={<Testimonial />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/ProductPage" element={<ProductPage />}></Route>
          <Route path="/CartPage" element={<CartPage />}></Route>
          <Route path="/CheckoutPage" element={<CheckoutPage />}></Route>
          <Route path="/MyOrders" element={<MyOrders />}></Route>
          <Route path="/SubService" element={<SubService />}></Route>
          <Route path="/SubService1" element={<SubService1 />}></Route>
          <Route path="/SubService2" element={<SubService2 />}></Route>
          <Route path="/SubService3" element={<SubService3 />}></Route>
          <Route path="/SubService4" element={<SubService4 />}></Route>
          <Route path="/SubService5" element={<SubService5 />}></Route>
        </Routes>
        <Footer />
        </AuthProvider>
      </Router>
      </CartProvider>
      <ToastContainer/>

    </>
  );
}

export default App;
