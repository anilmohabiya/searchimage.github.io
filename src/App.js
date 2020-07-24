import React, { useState } from 'react';
import Anil from './Anil';

const App =(props)=>{

 const [img,setImg]=useState('');
 const InputEvent=(event)=>{
  const Data= event.target.value;
  setImg(Data)
 };
 
  return(
    <>
    <div className="searchbar">
   
      <input type="text" placeholder="Serch" onChange={InputEvent} value={img}/>
     {img ==="" ?null: <Anil name={img}/>} 
      </div>
    </>
   
  );
};
export default App;
