const service = {
    //Using default Parameter Values
    getPost: (postId = 1) => fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`),
    getComments: (postId = 1) => fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments?postId=${postId}`)
};

//Async function to fetch data concurrently
const fetchData = async() => {
    //To handle errors
    try {
        const [ postResponse, commentsResponse ] = await Promise.all([service.getPost(), service.getComments()]);
        const [ post, comments ] = await Promise.all([postResponse.json(), commentsResponse.json()]);
        console.log(post, comments);
        //Logging out the responses
    } catch (err) {
        console.log(err);
    }
};