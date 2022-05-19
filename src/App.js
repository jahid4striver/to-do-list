import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import ProtectedRoute from './components/Login/ProtectedRoute';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path='/' element={<ProtectedRoute>
        <Home/>
       </ProtectedRoute>}></Route>
       <Route path='/login' element={<Login/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
