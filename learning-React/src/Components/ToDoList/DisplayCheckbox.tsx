import React, { useState } from 'react'


type IProps = {
    viewTable: boolean,
    setViewTable:(item: boolean)=>void
}

export default function DisplayCheckbox(props: IProps) {
    // const [checkboxValue, setCheckboxValue] =useState<boolean>(false)
  return (
    <div>
        <span>
        <input type="checkbox" checked={props.viewTable} onChange={()=>props.setViewTable(!props.viewTable)} />Show Completed Tasks
        </span>
    </div>
  )
}
