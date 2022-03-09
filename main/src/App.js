import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState,useEffect } from 'react';



// http://localhost/store/wp-json/wc/store/products






function App() {

  const [data,setData] = useState('')
  const [response,setResponse] = useState([])




  useEffect(()=>{
    axios.get('http://localhost/store/wp-json/wc/store/products')
    .then(function (response) {
   
      // handle success
      setResponse(response.data)
  
      // setData(response.data[0].name)
      // setResponse(response)
      // console.log(response)
      
  })


  })

return (
    <div className="App">
     <div className='title'><img className='logo' src={require('./logo.png')} width="200px"/> <h1>Catalouge</h1></div>
     <div className='flex-container'>
    {response.map((shirts, index)=>{
      return (
      
      <div key={shirts.id} className="box"><h1>{shirts.name}</h1><a target="_blank" href={shirts.permalink}><img className='product-img' src={shirts.images[0].thumbnail}/></a><h3>$ {parseFloat(shirts.prices.price/100)}<br/>was $<strike>{(shirts.prices.regular_price/100)}</strike></h3></div>
      )
      
    })} 
    </div>
    </div>
  );
}

export default App;
