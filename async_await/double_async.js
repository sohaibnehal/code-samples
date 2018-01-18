//Async function to fetch data
const fetchData = async() => {
    //To handle errors
    try {
        const post = await (await fetch('https://jsonplaceholder.typicode.com/posts/1')).json();
    } catch (err) {
        console.log(err);
    }
};