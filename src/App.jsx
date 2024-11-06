import React from 'react'

const App = () => {

  const name = 'John';
  const x = 10;
  const y = 20;


  return (
    <div>
      <div className='text-5xl'>App</div>
      <p>My name is {name} and I am almost {x + y}</p>
    </div>
  )
}

export default App