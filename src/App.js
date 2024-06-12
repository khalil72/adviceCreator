import logo from './logo.svg';
import './App.css';
import Contents from './components/Contents';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const[dataGet  , setDataGet] = useState();
  const [loading , setLoading] = useState(true);
  const api= 'https://api.adviceslip.com/advice';
  const fetchAdvice = async() => {
    try {
      const response  = await axios.get(api);
      setDataGet(response?.data?.slip);
      setLoading(false);
      
    }
    catch{
      console.log("error show");
      setLoading(false);
    }
  };
     
  useEffect(()=>{
   fetchAdvice();
      
  },[])
 if(loading){
  return <p>loading...</p>
 }
 
 
  return (
    <section className='app d-flex justify-content-center align-items-center text-center'>
       <Card className='card d-flex flex-column justify-content-center align-items-center '>
    
          <Contents  slipData={dataGet} apiGet={fetchAdvice}/>
       
        
      </Card>
      
    </section>
  );
}

export default App;
