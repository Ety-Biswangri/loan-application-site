import { Route, Routes } from 'react-router-dom';
import './App.css';
import BusinessDetails from './components/BusinessDetails/BusinessDetails';
import Home from './components/Home/Home';
import LoanApplication from './components/LoanApplication/LoanApplication';
import MyProfile from './components/MyProfile/MyProfile';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/myProfile' element={<MyProfile></MyProfile>}></Route>
        <Route path='/businessDetails' element={<BusinessDetails></BusinessDetails>}></Route>
        <Route path='/loanApplication' element={<LoanApplication></LoanApplication>}></Route>
      </Routes>
    </div>
  );
}

export default App;
