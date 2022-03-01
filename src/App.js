import React, { useEffect, useState } from 'react';
import './App.css';
import RecipeList from './RecipeList.js';
import {sweetPancakes, savoryPancakes, experimentalPancakes} from "./data.js"

export default function App() {
  const [selected, setSelected] = useState("sweet")
  const [data, setData] = useState ([]);
  const list = [
  {
    id: "sweet",
  title: "Sweet",
},
{
  id:"savory",
  title: "Savory"
},
{
  id: "experimental",
  title: "Unusual"
},
];

useEffect (() => {
  switch (selected) {
    case "sweet":
      setData(sweetPancakes);
      break;
    case "savory":
      setData(savoryPancakes);
      break;
    case "experimental":
      setData(experimentalPancakes);
      break;
    default:
      setData(sweetPancakes)
  }
},[selected]);

  return (
    <div className="App" >
      <h1>Happy Pancake Day!!</h1>
      <p>Select the tabs below for different pancake ideas</p>
      <div className='recipieList' >
      <ul > 
        {list.map((item) => (
          <RecipeList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
        ))}
      </ul>
      <div className='container' > 
      {data.map((d) => (
        <div key={d.key} className='item' >
          <div >
            <a href={d.link} target="_blank" rel='noreferrer'>
            <img src={d.img} 
            alt={d.title}/> 
            </a>
          </div>
            <h3>{d.title}</h3>
        </div>
        
      ))}
          </div>
      </div>
    </div>
  );
}


