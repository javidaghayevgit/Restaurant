import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './components/Header'
import Menu from './pages/Menu/index'
import Blog from './pages/Blog';
import Reservation from './pages/Reservation';
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
