import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
function App()
{
	const [result, setResult] = useState("");
	const inputRef = useRef(null);

	useEffect(() => inputRef.current.focus())

	function handleClick(e)
	{
		setResult(result+ e.target.name);
	}

	function backspace() {
		setResult(result.slice(0, result.length - 1));
	}

	function clear(){
		setResult("");
	}

	function calculate(){
		try{
			setResult(eval(result).toString());
		} catch(error){
			setResult("Error");
		}
	}
	return (
		<div className="calc-app">
			<img src="/images/1.svg"></img>
			<from>
				<input class="form-control" id="focusedInput" type="text" value={result} ref={inputRef} />
			</from>
			

			<div className="keypad">
				<button class="btn btn-danger" id="clear" onClick={clear}>Clear</button>
				<button class="btn btn-warning"id="backspace" onClick={backspace}>C</button>

				<button class="btn btn-primary"name="+" onClick={handleClick}>+</button>
				<button class="btn btn-secondary"name="7" onClick={handleClick}>7</button>
				<button class="btn btn-secondary"name="8" onClick={handleClick}>8</button>
				<button class="btn btn-secondary"name="9" onClick={handleClick}>9</button>
				<button class="btn btn-primary"name="-" onClick={handleClick}>-</button>
				<button class="btn btn-secondary"name="4" onClick={handleClick}>4</button>
				<button class="btn btn-secondary"name="5" onClick={handleClick}>5</button>
				<button class="btn btn-secondary"name="6" onClick={handleClick}>6</button>
				<button class="btn btn-primary"name="*" onClick={handleClick}>&times;</button>
				<button class="btn btn-secondary"name="1" onClick={handleClick}>1</button>
				<button class="btn btn-secondary"name="2" onClick={handleClick}>2</button>
				<button class="btn btn-secondary"name="3" onClick={handleClick}>3</button>
				<button class="btn btn-primary"name="/" onClick={handleClick}>/</button>
				<button class="btn btn-secondary"name="0" onClick={handleClick}>0</button>
				<button class="btn btn-secondary"name="." onClick={handleClick}>.</button>
				
				<button className="btn btn-success" id="result" onClick={calculate}>Result</button>
				
			</div>
		</div>
		    
	)

}

export default App;
