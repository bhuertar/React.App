import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick() {
    
  }

  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  

  return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
          <p className="List" onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>
            {puppy.name}
          </p>
          
        );
      })}
      <p>{ featPupId && (
        <div className="Details">
          <h2>{featuredPup.name}</h2>
          <ul className="Personal">
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
            <li>ID: {featuredPup.id}</li>
            <li>Cute? {featuredPup.isCute.toString()}</li>
          </ul>
        </div>
      )}</p>
    </div>
  );
}

export default App
