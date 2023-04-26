import {Navigate, Route, Routes} from "react-router-dom";

import CommentsPage from "./pages/CommentsPage/CommentsPage";
import Layout from "../src/Layout/Layout";
import PostsPage from "./pages/PostsPage/PostsPage";

import './App.css';
import '../src/assets/normalise.css'
import AnimalsPage from "./pages/AnimalsPage/AnimalsPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to={'posts'}/>}/>
                    <Route path={'posts'} element={<PostsPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}/>
                    <Route path={'animals'} element={<AnimalsPage/>}/>
                </Route>
            </Routes>
        </div>
    )
        ;
}

export default App;
