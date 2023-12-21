import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Header from './Components/Header/Header'
import Menu from './pages/Menu/Menu';
import Blog from './pages/Blog/Blog';
import Reservation from './pages/Reservation/Reservation';

function App() {
  return (
    <div className="app">
    <BrowserRouter>
      <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/menu' element={<Menu/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/reservation' element={<Reservation/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
