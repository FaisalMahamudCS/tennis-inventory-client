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

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>} ></Route>
        <Route path='/inventory/:id' element={<PrivateAuth>
   <InventoryItemDetail></InventoryItemDetail>
        </PrivateAuth>}></Route>
        <Route path='/manageInventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/addInventoryItem' element={<AddInventoryItem></AddInventoryItem>}></Route>
        <Route path='/myItem' element={<MyItem></MyItem>}></Route>
      </Routes>
    </div>
  );
}

export default App;
