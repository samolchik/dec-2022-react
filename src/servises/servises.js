export const getUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
}

export const getLaunches = () => {
    return fetch('https://api.spacexdata.com/v3/launches')
        .then(value => value.json())
}

