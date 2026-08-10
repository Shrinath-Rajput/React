import {state, useState} from "react";


function Counter(){

    let [count, setCount] = useState(0);

    function Increment(){
        setCount(count + 1);
    }
    
    
    return(
        <div className="counter">
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={Increment}>Increment</button>
        </div>
    )
}

export default Counter;