import React from 'react'
type IProps = {
    index: number
    name: string
    printMyNameCallback:(data:string)=>void
    className: string
}
export default function SimpleButton(props:IProps) {
  return (
    <div>
        <button onClick={()=>props.printMyNameCallback(props.name)}>
            {props.name}
        </button>
    </div>
  )
}

// SimpleButton.defaultProps = {
//     className: 'btn btn-success'
// }