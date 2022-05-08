import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';
import PrivateAuth from './PrivateAuth/PrivateAuth';
import InventoryItemDetail from './InventoryItemDetail/InventoryItemDetail';
import ManageInventory from './ManageInventory/ManageInventory';
import AddInventoryItem from './AddInventoryItem/AddInventoryItem';
import MyItem from './MyItem/MyItem';
import NotFound from './NotFound/NotFound';
import Blog from './Blog/Blog';
import CategoryWiseProduct from './CategoryWiseProduct/CategoryWiseProduct';
import Footer from './Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>} ></Route>
        <Route path='/categorywiseproduct/:category' element={<CategoryWiseProduct></CategoryWiseProduct>}></Route>
        <Route path='/inventory/:id' element={<PrivateAuth>
   <InventoryItemDetail></InventoryItemDetail>
        </PrivateAuth>}></Route>
        <Route path='/manageInventory' element={<PrivateAuth><ManageInventory></ManageInventory></PrivateAuth> }></Route>
        <Route path='/addInventoryItem' element={<PrivateAuth><AddInventoryItem></AddInventoryItem></PrivateAuth> }></Route>
        <Route path='/myItem' element={<PrivateAuth><MyItem></MyItem></PrivateAuth>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
         <Route path='*' element={<NotFound></NotFound>}></Route> 

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
