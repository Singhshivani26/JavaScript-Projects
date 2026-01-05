// Fetching a single to-do item
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => {
    console.log('To-Do Item:', data);
    document.getElementById('todo-data').textContent = JSON.stringify(data, null, 2);
  })
  .catch(error => console.error('Error fetching To-Do Item:', error));

// Fetching a single post
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => {
    console.log('Post:', data);
    document.getElementById('post-data').textContent = JSON.stringify(data, null, 2);
  })
  .catch(error => console.error('Error fetching Post:', error));

// Fetching multiple posts concurrently using Promise.all
let postPromise1 = fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => response.json());
let postPromise2 = fetch('https://jsonplaceholder.typicode.com/posts/2').then(response => response.json());
let postPromise3 = fetch('https://jsonplaceholder.typicode.com/posts/3').then(response => response.json());

Promise.all([postPromise1, postPromise2, postPromise3])
  .then(data => {
    console.log('Multiple Posts:', data);
    document.getElementById('multiple-posts').textContent = JSON.stringify(data, null, 2);
  })
  .catch(error => console.error('Error fetching posts:', error));
