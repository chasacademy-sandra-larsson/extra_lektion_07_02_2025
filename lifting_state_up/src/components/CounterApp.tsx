import { useState } from "react";


function CounterApp() {
    const [count, setCount] = useState(0);

    // Callback handlers 
    const increment = () => setCount(prevCount => prevCount + 1)
    const decrement = () => setCount(prevCount => prevCount - 1)

    return(
        <>
            <h1>Counter: {count}</h1>
            <IncrementBtn  onIncrement={increment}/>
            <DecrementBtn  onDecrement={decrement}/>
        </>
    ) 

}

type IncrementBtnProps = {
    onIncrement: () => void ;
}

function IncrementBtn({onIncrement}: IncrementBtnProps) {
    return <button onClick={onIncrement}>Öka</button>
}

type DecrementBtnProps = {
    onDecrement: () => void ;
}

function DecrementBtn({onDecrement}: DecrementBtnProps) {
    return <button onClick={onDecrement}>Minska</button>
}

export default CounterApp;