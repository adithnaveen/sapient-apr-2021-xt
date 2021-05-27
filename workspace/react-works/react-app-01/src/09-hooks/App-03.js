// useEffect -> is used as sidecar which is basically used for logging, fetching etc 
import React, { useState, useEffect } from 'react'


const App = () => {
    const [name, setName] = useState("Ayush");
    const [admin, setAdmin] = useState(false);

    // 1. useEffect is a function 
    // 2. useEffect by default will be applied to all useState 
    // 3. you can have named useEffect but correlate to useState 
    // 4. if you dont pass any named state value to useEffect it will be 
    // executed only once 
    useEffect(() => {
        document.title = `This page Belongs to ${name}`
        console.log(`This page Belongs to ${name}`);
    }, [])

    useEffect(() => {
        console.log(`${name} is admin : ${admin ? "Yes" : "No"}`);
    }, [])

    return (
        <div>
            <h4>Hello Mr {name}</h4>
            <h4>Are you admin : {admin ? "Yes" : "No"}</h4>
            <hr />
            <button
                className="btn btn-danger"
                onClick={() => {
                    setName("Ayush Bhattacharya")
                }}>Get Full Name</button>

            <button
                className="btn btn-danger"
                onClick={() => {
                    setAdmin(true)
                }}>Change Admin</button>
        </div>
    )
}

export default App;
