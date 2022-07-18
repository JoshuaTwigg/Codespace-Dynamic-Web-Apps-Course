// GET REQUEST
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())//return object as a json text
  .then(data => console.log(data));//using arrow function inside chained .then()






// PATCH REQUEST
  const data = {
    "go sleep": false
  } //the property we'll replace it

fetch('https://jsonplaceholder.typicode.com/todos', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data), //parsing object variable created above
})






//PUT REQUEST
const data2 = {
    "userId": 1,
    "id": 1,
    "title": "study",
    "completed": true
  } //the object we'll replace it with




fetch('https://jsonplaceholder.typicode.com/todos/10', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data2), //parsing object variable created above
})


// POST REQUEST
fetch('https://jsonplaceholder.typicode.com/todos/10', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data2), //parsing object variable created above
})

