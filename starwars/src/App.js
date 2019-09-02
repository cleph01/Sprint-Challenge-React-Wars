import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import CardList from './components/CardList';




const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // Initialize state to hold the StarWars names object
  const [names, setNames] = useState([]);
  

  useEffect(() => {
      // This axios GET request will return the object
      axios
        .get("https://swapi.co/api/people/")
        // Which is then set to state
        .then( response => setNames(response.data.results))
        //Error Handler
        .catch(err => console.log(err));
    }, []);

    console.log(names.length !== 0 && names, "app");

  return  (

    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CardList data={names} /> 
    </div>

  );
}

export default App;
