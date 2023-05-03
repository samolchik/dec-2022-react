const carsAPI = 'http://owu.linkpc.net/carsAPI/v1';
const jsonAPI = 'https://jsonplaceholder.typicode.com';

const cars = '/cars'

const urls = {
    users: '/users',
    comments: '/comments',
    cars: {
        cars,
        byId: (id) => `${cars}/${id}`
    }
};

export {
    carsAPI,
    jsonAPI,
    urls
};