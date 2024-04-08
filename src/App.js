import React, { useContext } from 'react';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/login'; 
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import '../src/style.scss';
import { AuthContext } from './context/AuthContext';

function App() {
    const {currentUser} = useContext(AuthContext);
    console.log(currentUser)
    
    const ProtectedRoute = ({children})=>{
        console.log(currentUser)
        if(!currentUser){
            return(
                <Navigate to='/login' />
            )
        }
            return(children)
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
