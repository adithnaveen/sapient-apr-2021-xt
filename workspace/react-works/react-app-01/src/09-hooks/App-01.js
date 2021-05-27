import React, { useState } from 'react'


const App = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Manish");
    const [checked, setChecked] = useState(false);

    return (
        <div>
            <h1>React Hook Example</h1>
            <h4>Count Value {count}</h4>
            <h4>Name is {name}</h4>
            <h4>Check box Value {checked ? "Checked" : "UnChecked"}</h4>

            <hr />
            <button className="btn btn-primary"
                onClick={() => {
                    setCount(count + 1)
                }}
            >Increment Count</button>

            <button
                className="btn btn-primary"
                onClick={() => {
                    setName("Manish Kumar")
                }}>Chnage Name</button>
            <br />
            Checked Status: <input type="checkbox" value={checked} onChange={() => {
                setChecked((checked) => !checked)
            }} />
        </div>
    )
}

export default App;