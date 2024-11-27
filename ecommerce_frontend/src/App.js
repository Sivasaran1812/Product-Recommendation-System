//import logo from './logo.svg';
import './App.css';
import NavBar from '../src/components/NavBar'
import { Routes,Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import Collection from '../src/pages/Collection';
import About from '../src/pages/About';
import Contact from '../src/pages/Contact';
import Login from '../src/pages/Login';
import Cart from '../src/pages/Cart';
import Product from '../src/pages/Product';
import PlaceOrder from '../src/pages/PlaceOrder';
import Orders from '../src/pages/Orders';



function App() {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <NavBar/>     
      {/* Navigating between pages */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
        <Route path='/orders' element={<Orders/>}/>
      </Routes>
    </div>
   );
}

export default App;
