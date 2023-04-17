import './App.css';
import '../src/assets/normalise.css';
import UserForm from "./components/userForm/UserForm";
import CommentForm from "./components/commentForm/CommentForm";
import Cars from "./components/cars/Cars";

function App() {

    return (
        <div className='wrap'>
            <div className={'container'}>
                <UserForm/>
                <CommentForm/>
            </div>
            <Cars/>
        </div>
    )
}

export default App;
