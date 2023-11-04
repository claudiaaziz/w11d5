

// ! [1] Grab all the teas and hit the backend with it
export const requestPokemons = () => {
  return fetch('/api/pokemon');
}

export const requestPokemon = (id) => {
  return fetch(`/api/pokemon/${id}`);
}

// ! [3] GET/POST fetch request to create tea in the backend
export const postPokemon = (pokemon) => {
  // debugger
  return (fetch('/api/pokemon', {
    method: 'POST',
    body: JSON.stringify(pokemon),
    headers: {
      // Specifying we want to send JSON
      'Content-Type': 'application/json',
      // Specifying we want to receive JSON
      'Accept': 'application/json'
    }
  }))
}

export const requestPokemonEdit = (pokemon) => {
  return (fetch(`/api/pokemon/${pokemon.id}`, {
    method: 'PATCH',
    headers:  {
      // Specifying we want to send JSON
      'Content-Type': 'application/json',
      // Specifying we want to receive JSON
      'Accept': 'application/json'
    },
    body: JSON.stringify(pokemon)
  }))
}