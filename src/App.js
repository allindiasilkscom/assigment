
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Cards from './components/Carts'
import {Routes,Route}from "react-router-dom"
import CartsDetails from './components/CartsDetails';


function App() {
  return (
  <>
  <Header/>
  <Routes>
    <Route path='/' element={<Cards/>}/>
    <Route path='/cart' element={<CartsDetails/>}/>
  </Routes>
 </>
  );
}

export default App;
