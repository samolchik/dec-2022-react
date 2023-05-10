import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {CarPage} from "./pages/CarPage";
import {MainLayout} from "./layout";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'cars'}/>}/>
                <Route path={'cars'} element={<CarPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;