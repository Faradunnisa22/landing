import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services';
import About from './components/About';
import Products from './components/Products';
import 'flowbite/dist/flowbite.css';
import './App.css'
import Blog from './components/Blog';
import Newsletter from './components/Newsletter';
import MyFooter from './components/MyFooter';


function App() {
  

  return (
    <>
    <Navbar/>
    <Home/>
    <Services/>
    <About/>
    <Products/>
    <Blog/>
    <Newsletter/>
    <MyFooter/>
    </>
  )
}

export default App
