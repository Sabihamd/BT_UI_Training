import React from 'react'
import { Url } from 'url'
// import data from './MovieData'

type IData={

  imgSrc: string;
  title: string;
  text: string;
}
type IProps = {
  data: IData[];
}

export default function DisplayMovies({data}: IProps) {
  
  return (
    <div>
      {/* {
        data.map((el: IData)=>{ return (<div><img src={el.imgSrc}></img>
        <div>Title: {el.title}</div>
        <div>Text: {el.text}</div></div>
        )})
      }       */}
      {
        data.map((el: IData, index: number)=>
        <div key={index}>
             <img src={el.imgSrc}/>
             Title: {el.title}
             Text: {el.text}
        </div>
        
        )
      }  
    </div>

  )
}

