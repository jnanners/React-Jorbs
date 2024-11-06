import React from 'react'

const App = () => {

  const name = 'John';
  const x = 10;
  const y = 20;
  const names = ['Brad', 'Mary', 'Joe', 'Lisa'];


  return (
    <div>
      <div className='text-5xl'>
        App
      </div>
      <p>
        My name is {name} and I am almost {x + y}
      </p>
      <ul>
        {names.map((name) => (
          <li>{name} is cool</li>
        ))}
      </ul>
    </div>
  )
}

export default App