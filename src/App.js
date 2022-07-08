
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


import PokemonDetails from './components/pokemonDetails';
import Home from "./components/home";
import PokemonList from "./components/pokemonList"

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">HomePage</Link>

            </li>
            <li>
              <Link to="/pokemonList">Pokemon List</Link>
            </li>
            <li>
              <Link to="/pokemondetails">Pokemon Details</Link>
            </li>
            
          
            
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          
          
          <Route path='/' element={<Home/>} />
          <Route path='/pokemonlist' element={<PokemonList/>} />
          <Route path='/pokemondetails' element={<PokemonDetails/>} />
          

           

        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
