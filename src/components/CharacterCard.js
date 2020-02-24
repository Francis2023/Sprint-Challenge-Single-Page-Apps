import React from "react";
//import CharacterList from "./CharacterList"

export default function CharacterCard (props){
  return (
  <div>
    <h2>{props.character.name}</h2>
    <div>{props.character.species}</div>
  </div>
  )
}
