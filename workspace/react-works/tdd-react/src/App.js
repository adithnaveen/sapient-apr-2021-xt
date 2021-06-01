import React from 'react'
import CounterApp from './CounterApp';
const MyComp = () => {
  return (
    <div>
      <h2>This is My Component</h2>
    </div>
  )
}

const App = () => {

  return (
    <div className="App">
      <h2>Counter Application</h2>
      <CounterApp />
      <MyComp />
    </div>
  );
}

export default App;