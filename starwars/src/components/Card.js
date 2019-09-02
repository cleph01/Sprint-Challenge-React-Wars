import React from "react"; //So we can make use of JSX
import styled from 'styled-components';


const CardDiv = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    border-radius: 5px;
    box-shadow: 0 1px 6px -2px #000;
    background-color: #FFF;
    margin-bottom: 30px;
`;

function Card(props){
    
    console.log(props.character.length !== 0 && props.character, "card");
    
    return  (

        <CardDiv>
            <h3>Character Name: {props.character.name}</h3>   
        </CardDiv>    

    ) ;

}

export default Card;