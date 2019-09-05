import React from "react";
//Import Card Component
import Card from "./Card.js";





const CardList = (props) => {
  // STEP 2 - add the imported data to state

    console.log(props.data, 'card-list');

  return (

          props.data.map((character, index) => {
            return <Card key={index} character={character} />
          })
          

  );
};

export default CardList;