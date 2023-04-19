import React from 'react';
import './App.css';
import '../src/assets/normalise.css';
import Cars from "./components/cars/Cars";
import UserForm from "./components/users/UserForm";
import Users from "./components/users/users";

const App = () => {
    return (
        <div className={'wrap'}>
            <Users/>
            <hr/>
            <Cars/>
        </div>
    );
};

export default App;