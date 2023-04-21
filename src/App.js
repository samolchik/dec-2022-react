import {Navigate, Route, Routes} from "react-router-dom";

import AlbumsPage from "./pages/AlbumsPage/AlbumsPage";
import CommentsPage from "./pages/CommentsPage/CommentsPage";
import Layout from "./pages/Layout/Layout";
import Post from "./components/Post/Post";
import TodosPage from "./pages/TodosPage/TodosPage";

import './App.css';
import '../src/assets/normalise.css'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to={'todos'}/>}/>
                    <Route path={'todos'} element={<TodosPage/>}/>
                    <Route path={'albums'} element={<AlbumsPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}>
                        <Route path={':postId'} element={<Post/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    )
        ;
}

export default App;
