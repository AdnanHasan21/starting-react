import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Razzak', 'Jashim', 'Bappa', 'Gabbar', 'Shuvo'];

  var person = {name: "Adnan", Job:"Student"}
  var person2 = {name: "Dola", Job:"Intern Kortese"}
  var person3 = {name: "Shyamol dada", Job:"Banker"}


  const product= [
    {name: 'Photoshop' , price: '$90.99'},
    {name: 'Animator' , price: '$100'},
    {name: 'Illustrator' , price: '$80'}
  ]
  const productNames = product.map(product => product.name);
  console.log(productNames);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter></Counter>
        <Users></Users>
        <ul>

        {
          nayoks.map(nayok => <li>{nayok}</li> )
        }
          <li> {nayoks[0]} </li>
          <li> {nayoks[1]} </li>
          <li> {nayoks[2]} </li>
          <li> {nayoks[3]} </li>
        </ul>

        <h3>My heading: {person.name+' '+person.job} </h3>
        <h2>Wedding: {person2.name+' '+"WEDS"+' '+person3.name} </h2>
        <p>My first react paragraph</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br/>

        <Product name= {product[0].name} price={product[0].price}></Product>
        <Product name= {product[1].name} price={product[1].price}></Product>
        <Product name= {product[2].name} price={product[2].price}></Product>
        <br/>
        <Anotherperson name='Ishrat Rini' address='Gazipur, Kapasia'></Anotherperson>
        <Anotherperson name='Nazmus Sakib' address= 'Dhaka, Magbazar'></Anotherperson>
        <Anotherperson name= 'Asif' address='Gazipur, Jaydevpur'></Anotherperson>
      </header>
    </div>
  );
}

function Product(props){
 const productStyle={
   border: '2px solid green',
   borderRadius : '5px',
   backgroundColor: 'lightgray',
   height: '200px', 
   width: '200px',
   float: 'left',
   margin: '10px'
 }
 
  return(
    <div style={productStyle}>
      <h4> {props.name} </h4>
      <h6> {props.price} </h6>
      <button>Buy Now</button>
    </div>
  )
}

function Counter(){
  const [ count, setCount] = useState(0);
  const handleIncreased = () => setCount(count+1);
  //  {
  //   const newCount = count + 1;
  //   setCount(count+1);
  // }
  
  return(
    <div>
      <h2>Count: {count} </h2>
      <button onClick={() => setCount(count+1)}>Increase</button> 
      <button onClick={() => setCount(count-1)}>Decrease</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
   
  return(
    <div>
      <h3>Dynamic Users: {users.length} </h3>
      <ul>
        {
          users.map( user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Anotherperson(props){
  const anotherpersonStyle={
    border: '2px solid red',
    margin: '10px'
  } 
  return(
     <div style={anotherpersonStyle}>
       <h3> {props.name} </h3>
       <p> {props.address} </p>
     </div>
   )
 }
export default App;
