import './App.css';
import '../src/assets/normalise.css'
import Users from "./components/users/users/Users";
import Launches from "./components/launches/launches/Launches";
import {RxRocket} from "react-icons/rx";
import {TbUsers} from "react-icons/tb";
import {GiClick} from "react-icons/gi";
import {useState} from "react";

function App() {

    const [showLaunches, setShowLaunches] = useState(false)

    return (
        <div className='wrap'>
            {!showLaunches && (<div className='page' >
                <h2><span><TbUsers/></span> USERS</h2>
                <Users/>
            </div>)}
            <br/>
            <div className='launches-page' onClick={() => {
                setShowLaunches(prev => !prev)
            }}>
                <div className={'rocket'}><RxRocket/> <i className={'rocket-text'}>LAUNCHES</i><span><GiClick/></span>
                </div>
                {showLaunches &&
                    (
                        <Launches/>
                    )}
            </div>
        </div>
    )
}

export default App;
