import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login';
import Navbar from './pages/Navbar';
import Signup from './pages/signup';
import BrowseProduct from './pages/BrowseProduct';
import AddProduct from './pages/AddProduct';
import ViewProduct from './pages/ViewProduct';
import './App.css';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
    
    <BrowserRouter>
     <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Home" element={<Home />}/>
          <Route path="Login" element={<Login />}/>
          <Route path="Signup" element={<Signup />}/>
          <Route path="BrowseProduct" element={<BrowseProduct />}/>
          <Route path="AddProduct" element={<AddProduct />}/>
          <Route path="ViewProduct" element={<ViewProduct />}/>
          <Route path="*" element={<NotFound />}/>

        </Routes>
      </main>
    </BrowserRouter>
    </div>
  );
}

export default App;
