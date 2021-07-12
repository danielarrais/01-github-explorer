import { useState } from 'react';

function Counter() {
    let [counter, setCounter] = useState(0);

    function increment() {
        setCounter((prevState) => {
            return prevState + 1;
        });
    }

    return (
        <div>
            <h2> {counter} </h2>
            <button type="button" onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter;