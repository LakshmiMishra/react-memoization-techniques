import React from 'react';

export const Child = React.memo(({ name }) => {
    console.log('Child component rendered ONLY WHEN COMPONET WAS MOUNTED FIRST TIME');
  return (
   <div style={{ border: '1px solid #ccc', padding: '10px' }}>
      
      I am child component, my name is {name}.
       <p>Child component rendered ONLY once when the component was mounted first
        time because of React.Memo. If React.Memo is not used then when ever there is a change in the parent component,  the 
        child component will re rendered unneccary</p>
    </div>
   
  )
});
