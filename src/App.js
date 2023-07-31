
import { useState } from 'react';
import './App.css';

function App() {
  const Info = [
    {name:'Arnab',id:'048'},
    {name:'Redoy',id:'050'},
    {name:'Shovon',id:'014'}
  ];
  
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello</p>
        <Counter></Counter>
        {
          Info.map((it)=>
            <Person props={it}></Person >
          )
        }
      </header>
    </div>
  );
}

function Counter(){
  const [count,setCount]=useState(69);
  const IncreaseCount=()=>{
    const newCount=count+1;
    setCount(newCount);
  }
  const DecreaseCount=()=>{
    const newCount=count-1;
    setCount(newCount);
  }
  return (
    <div>
      <h1>
        Count: {count}
      </h1>
      <button onClick={IncreaseCount}>
        Increase
      </button>
      <button onClick={DecreaseCount}>
        Decrease
      </button>
    </div>
  )
}

function Person({props}) {
  const personStyle = {
    border: '2px solid yellow',
    margin: '10px'
  };
  return (
    <div style={personStyle}>
      <h1>
        {props.name}
      </h1>
      <h3>
        {props.id}
      </h3>
    </div>
  )
}

export default App;
