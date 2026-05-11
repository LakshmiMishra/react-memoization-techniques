
import {  useState ,useMemo} from 'react'
import './App.css'
import {Child} from './Child'
//import {Child1} from './Child1'
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
// const handleClick=()=>{
//   console.log('Button clicked');
// }
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
         
           <p>Child Component 1:</p>
           
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

            <p>In this example, 
            the handleClick function is recreated on every render, 
            which can cause unnecessary re-renders of child components
             that depend on it. 
             By using the useCallback hook,
              we can memoize the function and prevent 
              unnecessary re-renders.</p>
              {/* <Child1  onClick={handleClick}/> */}
       
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
