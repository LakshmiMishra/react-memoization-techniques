
import {  useState ,useMemo} from 'react'
import './App.css'
import {Child} from './Child'

function App() {
  
const[count,setCount]=useState(0);
const[number,setNumber]=useState(2);

function expensiveCalculation() {
  console.log('Expensive calculation performed');
  let result=0;
  for(let i=0;i<1000000000;i++){
    result+=number;
  }
  return result;
};
const expensiveResult=useMemo(()=>expensiveCalculation(),[number]);
  return (
    <>
      <section id="center">
<div style={{ border: '1px solid #ccc', padding: '10px' }}>
          <h1>React State Update Demo</h1>
          <h2>Count: {count}</h2>
          <p>In this example, we have a count state that updates whenever the increment or decrement buttons are clicked.
           Each time the count changes, the entire component re-renders, including the Child component.
            However, since the Child component is wrapped with React.memo, 
            it will only re-render when its props change, 
            which in this case is never after the initial render.</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '10px' }}>
          <h1>React.Memo Demo</h1>
       <h2>Count: {count}</h2>
         
           <p>Child Component:</p>
           
          <Child name="John"/>
        </div>
     <div style={{ border: '1px solid #ccc', padding: '10px' }}>
          <h1>useMemo Demo</h1>
           <h2>Count: {count}</h2>
          <p>Expensive calculation result: {expensiveResult}</p>                 
          <p>In this example, the expensive calculation is performed on every render, which can lead to performance issues. To optimize this, we can use the useMemo hook to memoize the result of the expensive calculation, so it only re-computes when necessary.</p>
        </div>
          <div style={{ border: '1px solid #ccc', padding: '10px' }}>
          <h1>useCallback Demo</h1>
           <h2>Count: {count}</h2>
          <p>Expensive calculation result: {expensiveResult}</p>  
          <p>In this example, we have a 
            handleSearch function that is passed as a prop to the Child component.     </p>            
       <p>Without useCallback, the handleSearch function would be recreated on every render, causing the Child component to re-render unnecessarily. By using useCallback, we can memoize the handleSearch function, ensuring that it only changes when its dependencies change, thus preventing unnecessary re-renders of the Child component.</p>
        </div>
        <div>
           <button onClick={()=>setCount(count+1)}>Increment</button>
          <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
      </section>

      <div className="ticks"></div>

      
    </>
  )
}

export default App
