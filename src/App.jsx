import logo from './logo.svg';
import './App.css';
import { Route ,Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Header from './components/header/header';
function App() {
  return (
    <>
    <Header/>
  <Routes>
    <Route path='/' element = {<Home/>}></Route>
    <Route path='/about' element = {<About/>}></Route>
    <Route path='/contacts' element = {<Contacts/>}></Route>
  </Routes>

   
    </>
  );
}

export default App;
