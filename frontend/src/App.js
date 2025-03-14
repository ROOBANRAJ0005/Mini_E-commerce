import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProductDetails } from './pages/ProductDetails';
import { Cart } from './pages/Cart';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {

  const [cartItems,setCartItems] = useState([]);
  console.log(cartItems.length)
  return (
    <div className="App">
        <BrowserRouter>
        <ToastContainer theme='dark' position='top-center' />
         <Header cartItems={cartItems}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/search" element={<Home/>}/>
                <Route path="/product/:id" element={<ProductDetails cartItems={cartItems} setCartItems={setCartItems}/>}/>
                <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>}/>
            </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
