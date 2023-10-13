import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route, Link} from "react-router-dom"
import ForEmployers from './components/ForEmployers';
import Login from './components/Login';
import ForTrainers from './components/ForTrainers';
import Logo from './components/Logo';

import { BsPerson } from "react-icons/bs";
import { HiBriefcase} from "react-icons/hi";



function App() {
  return (
    <div className="App">
      <BrowserRouter>



      <nav>
       
        <Link to="/logo">
          <img className='image-logo' src="https://conveytechlabs.com/optcpthub/assets/img/ccddd2fbf30925436e9189933ddec568.png" width="50px" height="50px"></img>
        </Link>
        <Link className='for-trainers' to="/for">
        <BsPerson className='icon'/>
          FOR TRAINERS</Link>
        <Link to="/login">
        <BsPerson className='icon'/>
          LOGIN</Link>
        <Link to="/foremployes" className='for-employes'>
        <HiBriefcase className='icon'/>
          FOR EMPLOYES</Link>
      </nav>


      <Routes>
        <Route path='/logo' element={<Logo></Logo>}></Route>
        <Route path='/for' element={<ForTrainers></ForTrainers>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/foremployes' element={<ForEmployers></ForEmployers>}></Route>

      </Routes>
      </BrowserRouter>
      <div>
      
      </div>

      
      
    </div>
  );
}

export default App;
