// Using async/await to fetch data from two APIs
//Using endpoints from https://jsonplaceholder.typicode.com

//Requiring axios module
const axios = require('axios');

//Defining API requests as a service
const service = {
    //Using default Parameter Values
    getPost: (postId = 1) => axios({url: 'https://jsonplaceholder.typicode.com/posts/' + postId}),
    getComments: (postId = 1) => axios({url: 'https://jsonplaceholder.typicode.com/posts/' + postId + '/comments?postId=' + postId})
};

//Async function to fetch data
const fetchData = async() => {
    //To handle errors
    try {
        //getComments would not be hit until getPost is resolved
        const post = await service.getPost();
        const comments = await service.getComments();

        //Logging out the responses
        console.log('Responses', {
            post: post['data'],
            comments: comments['data']
        });
    } catch (err) {
        console.log(err);
    }
};

//Parallel async function to fetch data
const fetchDataParallel = async() => {
    //To handle errors
    try {
        //getComments would not be hit until getPost is resolved
        const [post, comments] = Promise.all([service.getPost(), service.getComments()]);
        //Logging out the responses
        console.log('Responses', {
            post: post['data'],
            comments: comments['data']
        });
    } catch (err) {
        console.log(err);
    }
};