import React from 'react'

export const Child1 = React.memo(({onClick}) => {
  return (
   <> <div>Child1</div>
     <p>In this example, the handleClick function is recreated on every render, which can cause unnecessary re-renders of child components that depend on it. By using the useCallback hook, we can memoize the function and prevent unnecessary re-renders.</p>

   
   
   <Child1 onClick={onClick}>Click me </Child1></>
  )
}
);