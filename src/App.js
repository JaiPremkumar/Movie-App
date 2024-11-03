import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import NavApp from './NavApp';
import MoiveCart from './MovieCart';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/search' element={<MoiveCart/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
