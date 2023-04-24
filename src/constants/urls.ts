const baseURL = 'https://jsonplaceholder.typicode.com';

const posts = '/posts';

const urls = {
    todos: '/todos',
    albums: '/albums',
    comments: '/comments',
    posts: {
        posts,
        byId: (id: string) => `${posts}/${id}`
    }
};

export {
    baseURL,
    urls
};