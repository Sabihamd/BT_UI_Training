import React from 'react'
import SimpleButton from './SimpleButton'

type IProps = {
    index: number
    name: string
    printMyNameCallback:(data:string)=>void
}

export default function DisplayTable(props: IProps) {
  return (
    <>
            <td>{props.index}</td>
            <td>{props.name}</td>
            <td>
            <SimpleButton {...props} className="btn btn-danger"
            />
            </td>
            {/* <td>
                <SimpleButton {...props}/>
            </td> */}
        </>
  )
}

