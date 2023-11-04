import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { createPokemon, getPokemon, showPokemon } from './store/pokemon';
import * as PokemonAPIUtil from "./util/pokemon_api_util";


const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  window.store = store;
  window.getPokemon = getPokemon;
  window.PokemonAPIUtil = PokemonAPIUtil;
  window.showPokemon = showPokemon;
  window.createPokemon = createPokemon;
  window.postPokemon = PokemonAPIUtil.postPokemon;
}

function Root() {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
