import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Recipes from './pages/Recipes/Recipes'
import Services from './pages/Services/Services'
import About from './pages/About/About'
import News from './pages/News/News'
import Contact from './pages/Contact/Contact'
import Header from './Components/Header/Header'
function App() {
  return (
    <div className="app">
    <BrowserRouter>
      <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/recipes' element={<Recipes/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/news' element={<News/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
