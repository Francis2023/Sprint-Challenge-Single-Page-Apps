import React from "react";
import Header from "./components/Header";
import { Route,Link} from "react-router-dom";
import CharacterList from "./components/CharacterList";
import SearchForm from "./components/SearchForm";
import WelcomePage from "./components/WelcomePage";
//import LocationCard from "./components/LocationCard";
import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  align-content:center;
  background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  color: black;
  margin: 1.5em 1em;
  padding: 0.25em 1em;
`
const Nav = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
`
 
export default function App() {
  return (
    
    <main>
      <Header />
      <Nav>
        <Link to="/">
          <Button>
          Home
          </Button>
          </Link>
        <Link to="/CharacterCard">
          <Button>
          Cards
          </Button>
          </Link>
      </Nav>
      
      <Route exact path = "/" component={WelcomePage} />
      <Route exact path = "/CharacterCard" component={CharacterList} />
    
    </main>
    
 
  );
}
