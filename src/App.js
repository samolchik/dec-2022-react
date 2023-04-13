import Posts from './components/posts/posts/Posts';
import './App.css';
import '../src/assets/normalise.css'
import Users from "./components/users/users/Users";
import Launches from "./components/launches/launches/Launches";
import {RxRocket} from "react-icons/rx";

function App() {



    return (
        <div className='wrap'>
            <div className='page'>
                <h2>USERS</h2>
                <Posts/>
                <Users/>
            </div>
            <br/>
            <div className='launches-page'>
                <div className={'rocket'}> <RxRocket/> 2006 - 2019 years </div>
                <Launches/>
            </div>
        </div>
    )
}

export default App;
