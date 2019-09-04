import React, {useState, useEffect} from 'react';
import './App.css';
import styled from 'styled-components';
import axios from 'axios';
import CardList from './components/CardList';




const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

 
  const PaginationDiv = styled.div`
      display: flex;
      justify-content: center;
      margin-bottom: 15px;
  `;

  const PageWrapper = styled.div`
      
      display: flex;
      justify-content: space-between;
  `;

  const Button = styled.button`
      padding: 6px 10px;
      width: 75px;
      margin: 5px;
      border: none;
      border-radius: 3px;
      color: #000;
      background: #f0f0f0;
`;


   // Initialize state to hold the StarWars names object
   const [names, setNames] = useState([]);

   //Pagination
   const [page, setPage] = useState('https://swapi.co/api/people/?page=1');
   const [next, setNext] = useState('');
   const [previous, setPrevious] = useState('');

  useEffect(() => {
      // This axios GET request will return the object
      axios
        .get(page)
        // Which is then set to state
        .then( response => {
            setNames(response.data.results);
            setNext(response.data.next);
            setPrevious(response.data.previous);
          
          })
        //Error Handler
        .catch(err => console.log(err));
    }, []);

    // console.log(names.length !== 0 && names, "app");

  return  (

    <div className="App">
      <h1 className="Header">React Wars</h1>
      <PaginationDiv>
        <PageWrapper>
          <Button onClick={ () => setPage(previous) }>Previous</Button>
          <Button onClick={ () => setPage(next) }>Next</Button>
        </PageWrapper>
      </PaginationDiv>
      <CardList data={names} /> 
    </div>

  );
}

export default App;
