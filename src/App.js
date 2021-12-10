
import './App.css';
import {useState} from 'react';
function App() {
  const[result,setResult] =useState('');
  const[answer,setAnswer] =useState('');
  const handleClick =(e)=>{
    setResult(result.concat(e.target.name))
  }
  const clear =()=>{
    setResult('');
    setAnswer('');
  }
  const backspace =()=>{
    setResult(result.slice(0,result.length-1))
  }
  const calculation =()=>{
    try{
      setAnswer(Function("return "+(result))().toString());
    }catch(err){
      setAnswer("invalid operation")
    }
  }
  let eq='';
  if(answer!==''){
    eq="= "}
    else{
      eq=''
  }
  return(
    <div className="App">
    <div className="calc">
      <form>
        <input type="text" value={result} readOnly={true} />
        <input type="text" id="res" value={eq+answer} readOnly={true}/>

      </form>
      <div className="keys">
       <div className="operand">
        <button name="9" onClick={handleClick}>9</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="7" onClick={handleClick}>7</button>
        <button name="6" onClick={handleClick}>6</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="4" onClick={handleClick}>4</button>
        <button name="3" onClick={handleClick}>3</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="1" onClick={handleClick}>1</button>
        <button name="0" onClick={handleClick}>0</button>
        <button name="." onClick={handleClick}>.</button>
        </div>
      <div className="operations">
        <button  onClick={clear}>Clear</button>
        <button  onClick={backspace}>&#8592;</button>

        <button name="+" onClick={handleClick}>+</button>
        <button  name="-" onClick={handleClick}>-</button>
        <button  name="/" onClick={handleClick}>&divide;</button>
        <button  name="*" onClick={handleClick}>&times;</button>
<button className="heighlight" onClick={calculation}>Result</button>
</div>
</div>
</div>
        
</div>
    
  )
 
}

export default App;
