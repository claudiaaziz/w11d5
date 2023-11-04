

// ! [1] Grab all the teas and hit the backend with it
export const requestTeas = () => {
  return fetch('/api/teas');
}

// ! [3] GET/POST fetch request to create tea in the backend
export const postTea = (tea) => {
  return (fetch('api/teas', {
    method: 'POST',
    body: JSON.stringify(tea),
    headers: {
      // Specifying we want to send JSON
      'Content-Type': 'application/json',
      // Specifying we want to receive JSON
      'Accept': 'application/json'
    }
  }))
}