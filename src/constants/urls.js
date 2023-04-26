const baseURL = 'https://jsonplaceholder.typicode.com';

const posts = '/posts';
const urls = {
    posts: {
        posts,
        byId: (id) => `${posts}/${id}`
    },
    comments: '/comments',
}


export {
    baseURL,
    urls
};