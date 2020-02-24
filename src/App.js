import React from "react";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import SearchForm from "./components/SearchForm";
import WelcomePage from "./components/WelcomePage";
//import LocationCard from "./components/LocationCard";



export default function App() {
  return (
    
    <main>
      <Header />
      <SearchForm />
      <Route exact path = "/" component={WelcomePage} />
      <Route path = "/CharacterCard" component={CharacterList} />
    
    </main>
    
 
  );
}
