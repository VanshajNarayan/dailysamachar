import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
// import FirstPage from './Components/FirstPage';
import Navbar from './Components/NavbarFolder/Navbar';
import Home from './Components/HomeFolder/Home';
import Business from './Components/BusinessFolder/Business';
import Sports from './Components/SportsFolder/Sports';
import Entertainment from './Components/EntertainmentFolder/Entertainment';
import Science from './Components/ScienceFolder/Science';
import Health from './Components/HealthFolder/Health';
import General from './Components/GeneralFolder/General';
import Technology from './Components/TechnologyFolder/Technology';
// import { NewsApi } from './Components/NewsApiPage';

function App() {
  return (
    <div className="App">
      {/* <FirstPage newsApi = {NewsApi} /> */}
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/business' element = {<Business/>} />
          <Route path='/sports' element = {<Sports/>} />
          <Route path='/entertainment' element = {<Entertainment/>} />
          <Route path='/science' element = {<Science/>} />
          <Route path='/general' element = {<General/>} />
          <Route path='/health' element = {<Health/>} />
          <Route path='/technology' element = {<Technology/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
