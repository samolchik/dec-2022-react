import logo from './logo.svg';
import Simpsons from './components/simpsonsFamily/simpsons/Simpsons';
import Persons from './components/rickandmorty/persons/Persons';

import {SIMPSONS} from './mock/mock.simpsons';
import {RICKANDMORTY} from './mock/mock.rick';

import './App.css';
import '../src/assets/normalise.css'

function App() {
    return (
        <div className='wrap'>
            <div className='simpsons-family'>
                <h2>SIMPSON FAMILY</h2>
                <Simpsons key={SIMPSONS.id} simpsons={SIMPSONS}/>
            </div>

            <div className='rickandmorty'>
                <h2>RICK AND MORTY</h2>
                <Persons key={RICKANDMORTY.id} persons={RICKANDMORTY}/>
            </div>
        </div>
    );
}
export default App;
