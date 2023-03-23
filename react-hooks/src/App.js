
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(0);

  useEffect(()=>{

  }, [value]);
  return (
    <div className="App">
      <p>Count value is : {value}</p>
      <button onClick={()=> setValue(0)}>Reset</button>
      <button onClick={()=> setValue(value +1)}>Plus (+)</button>
      <button onClick={()=>{
        if(value===0){
          return;
        }
        setValue(value -1)
      } }>Minus (-)</button>
    </div>
  );
}

export default App;
