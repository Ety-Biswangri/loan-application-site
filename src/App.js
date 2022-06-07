import { Route, Routes } from 'react-router-dom';
import './App.css';
import BusinessDetails from './components/BusinessDetails/BusinessDetails';
import Footer from './components/Footer/Footer';
import LoanApplication from './components/LoanApplication/LoanApplication';
import LoginPage from './components/Login/LoginPage/LoginPage';
import Register from './components/Login/Register/Register';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import MyProfile from './components/MyProfile/MyProfile';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={
          <RequireAuth>
            <MyProfile></MyProfile>
          </RequireAuth>
        }></Route>
        <Route path='/myProfile' element={
          <RequireAuth>
            <MyProfile></MyProfile>
          </RequireAuth>
        }></Route>
        <Route path='/businessDetails' element={
          <RequireAuth>
            <BusinessDetails></BusinessDetails>
          </RequireAuth>
        }></Route>
        <Route path='/loanApplication' element={
          <RequireAuth>
            <LoanApplication></LoanApplication>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
