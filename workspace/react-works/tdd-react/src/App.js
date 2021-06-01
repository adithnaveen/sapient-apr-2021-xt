import React from 'react'

const MyComp = () => {
  return (
    <div>
      <h2>This is My Component</h2>
    </div>
  )
}

const App = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div className="App">
      <h2 id="header">Counter Application</h2>
      <h3 id="counter-value">{count}</h3>
      <button id="incr-button"
        onClick={() => {
          setCount(count + 1)
        }}
      >Increment</button>

      <button id="decr-button"
        onClick={() => {
          setCount(count - 1)
        }}
      >Decrement</button>
      <MyComp />
    </div>
  );
}

export default App;