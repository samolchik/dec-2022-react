import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import AlbumsPage from "./pages/AlbumsPage";
import CommentsPage from "./pages/CommentsPage";
import MainLayout from "./layout/MainLayout";
import Post from "./components/Post/Post";
import TodosPage from "./pages/TodosPage";
import './App.css';
import '../src/assets/normalise.css';

const App = () => {
    return (
        <div className={'wrap'}>
          <Routes>
              <Route path={'/'} element={<MainLayout/>}>
                  <Route index element={<Navigate to={'todos'}/>}/>
                  <Route path={'todos'} element={<TodosPage/>}/>
                  <Route path={'albums'} element={<AlbumsPage/>}/>
                  <Route path={'comments'} element={<CommentsPage/>}>
                      <Route path={':postId'} element={<Post/>}/>
                  </Route>
              </Route>
          </Routes>
        </div>
    );
};

export default App;