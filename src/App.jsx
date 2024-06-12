import Data from "./Data"
import Nav from "./Nav";
import Restaurant from "./Restaurant"
import "./App.css"
import { useState } from "react";

export default function App(){
  const [name,setName]=useState("");
  const [rate,setRate]=useState(0);
  const [restList, setRestList] = useState(Data.slice(0, 24));
  function handleName(e){
    setName(e.target.value)
    if(e.target.value.length>3){
      setRestList(Data.filter((ele)=>{
        return ele.name.toLowerCase().includes(name.toLowerCase())
      }))
    }
    else{
      setRestList(Data.slice(0, 24));
    }
  }
  function handleRate(e){
    setRate(e.target.value)
    if(e.target.value>0){
      setRestList(Data.filter((ele)=>{
        return ele.stars>=rate;
      }))
    }
    else{
      setRestList(Data.slice(0, 24));
    }
  }

  return(
    <div>
      <Nav></Nav>
      <Restaurant name={name} namefunc={handleName} rate={rate} ratefunc={handleRate} restList={restList} setRestList={setRestList}/>
    </div>
  )
}