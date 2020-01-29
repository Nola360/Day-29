const http = new EasyHTTP;
// const http = new EasyHTTP

// console.log(http);
// Get Users

// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));


// User Data
const data = {
  name: 'Kobe Bryant',
  number: 824,
  team: 'Los Angeles Lakers'

}

// Create User
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));



// // Update User
// http.put('https://jsonplaceholder.typicode.com/users/8', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Delete Users
http.delete('https://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data))
  .catch(err => console.log(err));