import React, {useState} from 'react'



const Calci = () => {
    const [input1, setInput1]=useState<number>(0);
    const [input2, setInput2]=useState<string>('+');
    const [input3, setInput3]=useState<number>(0);
    const [result, setResult]=useState<number>(0);

    const performOp=(e: any)=>{
        e.preventDefault()
        if(input2=='+'){
        setResult(input1+input3);            
        }
        else if(input2=='-'){
            setResult(input1-input3);            
            }
        else if(input2=='*'){
                setResult(input1*input3);            
                }
        else if(input2=='/'){
            setResult(input1/input3);            
            }
            
    }
  return (
    <div><form>
        <input type="number" value={input1} onChange={(e) => setInput1(parseInt(e.target.value))}/>
        <input type="text" value={input2} onChange={(e) => setInput2(e.target.value)}/>
        <input type="number" value={input3} onChange={(e)=> setInput3(parseInt(e.target.value))}/>
        <button onClick={performOp}>Calculate</button>
        <p>Result: {result}</p>
        </form></div>
  )
}

export default Calci