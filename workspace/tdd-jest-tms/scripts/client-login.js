const fetch = require("node-fetch");

// i can pass the value from test case 
// also from controller <- comes from HTML
 exports.loginClient =   async (obj) => {
    try {
    const result = 
        await fetch("https://trainingmanagementapp.herokuapp.com/api/users/login/",{
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {"Content-Type": "application/json"}
        })
    console.log("obs in loginclient", obj );
    const data = await result.json()
    return data;
    }catch(err ) {
        return err; 
    }
    return null;
}