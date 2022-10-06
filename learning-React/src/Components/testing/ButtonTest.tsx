import React, {useState} from 'react'

export default function ButtonTest() {

    const [counter, SetCounter] = useState<number>(0);

    const IncrementCounter = () => {
        SetCounter(prevState => prevState + 1)
    }

  return (
    <div>
        <button data-testid='increment' onClick={IncrementCounter} >Increment Counter</button>
        <p data-testid='counter'>{counter}</p>
    </div>
  )
}
