import React ,{useEffect,useState} from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
import { Card, Col, Row,Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './InventoryItemDetail.css'
const InventoryItemDetail = () => {
    const [quan,  setQuan]=useState();
    const [sell,setSell]=useState();
    const [product,setProduct]=useState({});
    const [stock,setStock]=useState();
    const {id}=useParams();
    const [itemDetail,setItemDetail]=useState([]);
    const navigate=useNavigate();
   

const manageInventoryRedirect=()=>{
    navigate('/manageInventory')
}
    useEffect(()=>{
     fetch(`https://pure-beach-56668.herokuapp.com/item/${id}`)
     .then(res=>res.json())
     .then(
         data=>{setItemDetail(data)
       setQuan(data.quantity);
       setSell(data.sold);
        })
   
    },[id]) 
   

 const {_id,image,name,description,quantity,price,supplier,sold}=itemDetail;

 
 //const [quan,  setQuan]=useState(itemDetail.quantity);
 
//console.log(quantities);
//console.log(quantities);
//console.log(quan);
useEffect(()=>{
    //quantitysetter();
},[])
const quantitysetter=()=>{
    //a=a-1;
    const solds=sell+1;
    const quantities=quan-1;
    setQuan( quantities);
    setSell(solds);

      const updateQuantity={quantities,solds}
    // console.log( JSON.stringify(quan))
     const url = `http://localhost:5000/item/${id}`;
     fetch(url, {
         method: 'PUT',
         headers: {
             'content-type': 'application/json'
         },
         body: JSON.stringify(updateQuantity)
     })
     .then(res => res.json())
     .then(data =>{
         console.log('success', data);
         //alert('Quantity updated successfully!!!');
       toast('Quantity & Sell Updated')
        
     })

   }
//restock handle
   
  const  handleRestock=(event)=>{
    event.preventDefault();
    const stocks=parseInt(stock);
    const restock=quan+stocks;
    setQuan(restock);
    console.log(restock);
  
    
    const updateQuantity={restock}
    console.log(updateQuantity);
  // console.log( JSON.stringify(quan))
   const url = `http://localhost:5000/restock/${id}`;
   fetch(url, {
       method: 'PUT',
       headers: {
           'content-type': 'application/json'
       },
       body: JSON.stringify(updateQuantity)
   })
   .then(res => res.json())
   .then(data =>{
       console.log('success', data);
       alert('stock updated successfully!!!');
      
   })

  }

  const quantityUpdate=()=>{
      let newQuantity=quantity-1;

      setProduct(newQuantity);

     const url = `http://localhost:5000/item/${id}`;
     fetch(url, {
         method: 'PUT',
         headers: {
             'content-type': 'application/json'
         },
         body: JSON.stringify(newQuantity)
     })
     .then(res => res.json())
     .then(data =>{
         console.log('success', data);
         alert('users added successfully!!!');
        
     })



    //setQuantities(quantity-1);
    //   let quant=itemDetaquantity-1;
    //   const newQuantity={...itemDetail,quant};
    // setQuantities(newQuantity);
  }
    return (
        <div className='mt-5'>
      <Col>
      <div className="container card w-75">
<div className="row ">
  <div className="col-6">
  <img  src={image} alt="" srcSet="" />
  </div>
  <div className="col-6">
  <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
          {description}
        
          </Card.Text>
          <Card.Text>
          Price:{price} <br></br>
       Quantity:   {quan ===0 ? <p className='text-danger'>Sold Out</p>:quan } <br></br>
      
      Sold :{sell}  <br></br>
         Supplier: {supplier}

              </Card.Text>
              <button className='btn btn-dark' onClick={quantitysetter}  >Delivered </button>
                      </Card.Body>

  </div>
</div>
</div>

   
    </Col>   
    <div className='card w-50 container mx-auto m-3'>
    <Form onSubmit={handleRestock} className='m-5'>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Restock Quantity</Form.Label>
    <Form.Control type="number" onChange={(event)=>setStock(event.target.value)} placeholder="Enter Quantity" required />
  </Form.Group>
  <Button variant="dark" type="submit">
  Restock
  </Button>
  </Form>
  </div>
  <div className='d-flex align-item-center justify-content-center'>
  <button className='btn btn-dark ' onClick={manageInventoryRedirect}>Manage Inventory</button> 
  </div>
   
     <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>

        </div>
    );
};

export default InventoryItemDetail;