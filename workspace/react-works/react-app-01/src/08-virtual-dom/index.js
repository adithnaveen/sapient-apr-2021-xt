import React, { Component } from 'react'

// working with virtual dom 
// import  from './08-virtual-dom'

/*
console.log("This is for testing... ");

let h1 = document.createElement("h1"); 
h1.setAttribute("id", "heading1");
h1.innerHTML = "Welcome to React Js"; 
document.getElementById("root").appendChild(h1)


let count = 1; 
setInterval(() => {
    let h1 = document.getElementById("heading1"); 
    h1.innerHTML = "Welcome to React Js";
    console.log("Updating Heading ", (count ++ ));
}, 1000);
*/ 

const SubApp =({subtitle}) => (
    <h3>{subtitle}</h3>
)

class App extends Component {
    state = {
        title:"ReactJS App"
    }
    count = 1; 
    componentDidMount() {
        let {title} = this.state;

        setInterval(() => {

            if(this.count %5===0) {
                if(title ==="ReactJS App") {
                    title = "React With Virtual Dom";
                }else {
                    title = "ReactJS App";
                }
            }

            this.setState({title}, () => {
                console.log("Updating Title ", (this.count ++));
            })
        }, 1000);

    }
    render() {
        // if you call set state here it will be infinite 
        return (<div>
                <h1>{this.state.title }</h1>
                <SubApp subtitle="Some Sub Title"/>
            </div>
        );
    }
}

export default App;