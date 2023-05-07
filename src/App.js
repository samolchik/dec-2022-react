import {Navigate, Route, Routes} from "react-router-dom";

import {CarPage} from "./pages";
import {MainLayout} from "./layout";
import './App.css';

function App() {

  return (
    <Routes>
      <Route path={'/'} element={<MainLayout/>}>
          <Route index element={<Navigate to={'cars'}/>}/>
          <Route path={'cars'} element={<CarPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
