
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage/Homepage';
import Shop from './pages/Shop/Shop';
import NavBar from './components/NavBar/NavBar';
import { ContextProvider } from './context/CartContext';
import FormPay from './pages/FormPay/FormPay';
import Cesta from './pages/Cesta/Cesta';
import FinalPage from './pages/FinalPage/FinalPage';



function App() {
  return (
    <div className="App">
      <ContextProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Shop' element={<Shop/>}/>
        <Route path='/Form' element={<FormPay/>}/>
        <Route path='/Cesta' element={<Cesta/>}/>
        <Route path='/Final' element={<FinalPage/>}/>
      </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
