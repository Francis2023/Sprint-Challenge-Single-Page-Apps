import React, { useState,useEffect } from "react";



     

export default function SearchForm () {
  
  

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(character);

  

  useEffect(() => {
    
    const results = character.filter(character => {
       return character.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setSearchResults(results);
  }, [searchTerm]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  
  return (
    
    <section className="search-form">
     <form>
       <label htmlFor = "Character">Search:</label>
       <input
         id="Character"
         type="text"
         name="textfield"
         placeholder="Search"
         value={character}
         onChange={handleChange}
       />

     </form>
     <div className="character-list">
        <ul>
            {searchResults.map(character => {
            return <li key={character}>{character}</li>;
          })}
        </ul>
      </div>
    </section>
  );
}
