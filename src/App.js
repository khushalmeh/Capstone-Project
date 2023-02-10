import Layout from './components/Layout/Layout';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import pagenotfound from './pages/pagenotfound';
import ContactUs from './pages/ContactUs';

function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path = "/" element = {<Home />}/>
    <Route path = "/About" element = {<About/>}/>
    <Route path = "/Contact" element = {<Contact/>}/>
    <Route path = "/Menu" element = {<Menu/>}/>
    <Route path = "/form" element = {<ContactUs/>}/>
    <Route path = "*" element = {<pagenotfound/>}/> 
   </Routes>
   </BrowserRouter>
  );
}

export default App;
