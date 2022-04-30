import React ,{useEffect,useState} from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
import { Card, Col, Row,Button } from 'react-bootstrap';
const InventoryItemDetail = () => {
    const [quan,  setQuan]=useState();
    const {id}=useParams();
    const [itemDetail,setItemDetail]=useState([]);
    const navigate=useNavigate();
const manageInventoryRedirect=()=>{
    navigate('/manageInventory')
}
    useEffect(()=>{
     fetch(`http://localhost:5000/item/${id}`)
     .then(res=>res.json())
     .then(
         data=>{setItemDetail(data)
        setQuan(data.quantity);
        })
   
    },[id]) 
   

 const {_id,image,name,description,quantity,price,supplier}=itemDetail;

 
 //const [quan,  setQuan]=useState(itemDetail.quantity);
 
//console.log(quantities);
//console.log(quantities);
console.log(quan);
useEffect(()=>{
    //quantitysetter();
},[])
const quantitysetter=()=>{
    //a=a-1;
      setQuan( quan-1);
   }

  const quantityUpdate=()=>{
      
    //setQuantities(quantity-1);
    //   let quant=itemDetaquantity-1;
    //   const newQuantity={...itemDetail,quant};
    // setQuantities(newQuantity);
  }
    return (
        <div className='w-50 mx-auto'>
      <Col>
      <Card>
        <Card.Img variant="top" src={image} className='h-50'   />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
          {description}
        
          </Card.Text>
          <Card.Text>
          Price:{price} <br></br>
        Quantity: {quan} <br></br>
         Supplier: {supplier}
              </Card.Text>
              <button className='btn btn-success' onClick={quantitysetter}  >Delivered </button>
                      </Card.Body>

      </Card>
    </Col>   
     <button className='btn btn-success' onClick={manageInventoryRedirect}>Manage Inventory</button> 
        </div>
    );
};

export default InventoryItemDetail;