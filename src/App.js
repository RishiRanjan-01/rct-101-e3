import "./App.css";
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import { Navbar } from "./components/Navbar";
import RequiredAuth from './hoc/RequiredAuth'
function App() {
  return (
    <div className="App">
      {
        // Code here
         <div>
           <Navbar/>
        <Routes>
          <Route path="/" element={
          <RequiredAuth>
            <Home/>
          </RequiredAuth>}
          />
          <Route path = '/login' element={<Login/>}/>
        </Routes>
         </div>
      }
    </div>
  );
}

export default App;
