import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/index'
import About from './pages/About/index'
import Contact from './pages/Contact/index'
import Header from './components/Header/index'
import Menu from './pages/Menu/index'
import Blog from './pages/Blog/index'
import Book from './pages/Book/index';
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
    <Route path='/book' element={<Book/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
