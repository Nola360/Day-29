// ASYNC AWAIT

// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello World!'), 5000);
//   });

//   const error = false;

//   if (!error) {
//     const res = await promise; //Wait until promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error('Somthing went wrong...'))
//   }
// }



// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));


// ASYNC AWAIT WITH FETCH

async function getUsers() {

  // Await response of fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // Proceed once resolved
  const data = await response.json();
  // Process once second promise is resolved
  return data;

}

getUsers().then(users => console.log(users));