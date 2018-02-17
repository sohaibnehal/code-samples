
const fetchPost = async() =>  await (await fetch('https://jsonplaceholder.typicode.com/posts/1')).json();

const handleError = fn => (...params) => fn(...params).catch(console.error);

const response = handleError(fetchPost);
console.log(response);