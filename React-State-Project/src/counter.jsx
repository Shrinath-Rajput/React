import {state, useState} from "react";


function Counter(){

    let [count, setCount] = useState(0);

    function Increment(){
        setCount(count + 1);
    }
    
function Decrement(){
        setCount(count - 1);
    }
    
    return(
        <div className="counter">
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
    )
}

export default Counter;