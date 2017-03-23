import axios from 'axios';

export function tweetsRequest(cb) {
    
    return axios.get('https://jsonplaceholder.typicode.com/posts').then(function(res) {
        cb(res.data);
    });
    
    //return axios.get('https://jsonplaceholder.typicode.com/posts');
}
