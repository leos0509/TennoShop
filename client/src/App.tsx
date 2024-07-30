import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/pages/home-page/home-page';
import { CartPage } from './components/pages/cart-page/cart-page';
import { LoginPage } from './components/pages/login-page/login-page';
import { SignupPage } from './components/pages/signup-page/signup-page';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
