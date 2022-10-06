import React, {useState, useMemo} from 'react'

export default function UseMemoDemo() {

    const [counterOne, setCounterOne] = useState<number>(0);
    const [counterTwo, setCounterTwo] = useState<number>(0);

    const incrementOne = () => {
        setCounterOne(counterOne+1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo+1)
    }

    const isEven = () => {
        return counterOne %2 ===0;
    }
  return (
    <div>
      <button onClick={incrementOne}>Increment Counter One : {counterOne}</button><br/>
      <span>{isEven() ? 'Even' : 'Odd' }</span><br/>
      <button onClick={incrementTwo}>Increment Counter Two : {counterTwo}</button>
    </div>
  )
}
