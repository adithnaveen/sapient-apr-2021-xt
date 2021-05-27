import React, { useReducer } from 'react';


function App() {
    const [number, setNumber] = useReducer((number, newNumber) => number + newNumber, 0);

    return(
        <h1 onClick={() => setNumber(10)}>{number}</h1>
    )
}

export default  App; 


