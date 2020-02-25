import React, { useState,useEffect } from "react";
import CharacterCard from "./CharacterCard"


     

export default function SearchForm (props) {
  
  //const character = props.character;
  //console.log(character)
  
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(props.character);

  

  useEffect(() => {
    
    const results = props.character.filter(character => {
      console.log(character)
       return character.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setSearchResults(results);
  }, [searchTerm]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  
  return (
    
    <section className="search-form">
     <form>
       <label htmlFor = "Character">Search:  </label>
       <input
         id="Character"
         type="text"
         name="textfield"
         placeholder="Search"
         //value={character}
         onChange={handleChange}
       />

     </form>
     <div className="character-list">
        
            {searchResults.map(character => {
              console.log(character)
            return (
               <CharacterCard key={character.id} character={character} />
            )
          })}
        
      </div>
    </section>
  );
}
