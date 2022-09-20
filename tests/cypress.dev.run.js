const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImUwNzM5ZDYyLWYxZDktNDgxMi1hMWE4LTU3NDVmMTg5M2E3ZC0xNjYzNjM2NzAxNTI3IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiZWRlZWJjNTctMjM0Ni00NjdiLWFlZDAtZWFhODNjZjg4YzYxIiwidHlwZSI6InQifQ.KmrCURgYbXl61uOh3jnjsEYhBxufx1S1yrhiZFzgQWk'
cypress.run({
  browser: 'chrome',
  baseUrl: 'http://localhost:3000',
  env: {
    apiUrl: 'http://localhost:3333'
  }
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})