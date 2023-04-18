import React from 'react';
import './App.css';
import '../src/assets/normalise.css';
import Cars from "./components/cars/Cars";
import UserForm from "./components/users/UserForm";

const App = () => {
    return (
        <div className={'wrap'}>
            <UserForm/>
            <hr/>
          <Cars/>
        </div>
    );
};

export default App;