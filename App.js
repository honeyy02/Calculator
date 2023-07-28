import './App.css';
import {useRef, useState} from 'react';

function App() {
  const inputref = useRef(null);
  const resultref = useRef(null);
  const [result,setResult] = useState(0);

  function plus(e){
    e.preventDefault();
    setResult((result)=> result + Number(inputref.current.value));

  };

  function minus(e){
    e.preventDefault();
    setResult((result)=>result - Number(inputref.current.value));
  };
  function times(e){
    e.preventDefault();
    setResult((result)=>result * Number(inputref.current.value));
  };
  function divide(e){
    e.preventDefault();
    setResult((result)=>result / Number(inputref.current.value));
  };
  function resetInput(e){
    e.preventDefault();
    inputref.current.value=0;
  };
  function resetResult(e){
    e.preventDefault();
    setResult((preVal)=>preVal*0);
  };

  return (
    <div className ="App">
      <div>
      <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultref}>
         {result}
        </p>
        <input
        pattern="[0-9]"
        ref={inputref}
        type= "number"
        placeholder="Type a number"
        /><br/>
        <button onClick={plus}>Add</button>
        <button onClick={minus}>Subtract</button>
        <button onClick={times}>Mutiply</button>
        <button onClick={divide}>Divide</button>
        <button onClick={resetInput}>Reset input</button>
        <button onClick={resetResult}>Reset result</button>
      </form>
    </div>
    
  );
}

export default App;
