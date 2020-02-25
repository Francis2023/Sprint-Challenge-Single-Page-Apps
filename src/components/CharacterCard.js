import React from "react";
//import CharacterList from "./CharacterList"
import styled from 'styled-components'

const h2 = styled.h2`
  text-align:center;
  width: 30%;
  min-width: 400px;
`
const Specie = styled.h5`
width: 30%;
min-width: 400px;
`
const Card = styled.div`
display:flex;
flex-wrap:wrap;
justify-content: 
height: 40%;
width: 30%;
min-width: 400px;
margin: 5px auto;
`

export default function CharacterCard (props){
  console.log(props)
  return (
  <Card>
    <h2>{props.character.name}</h2>
    <Specie>Species: {props.character.species}</Specie>
    <img src={props.character.image} />
  </Card>
  )
}
