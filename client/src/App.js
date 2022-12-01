import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
//import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
//import CreateVideogame from './components/CreateVideogame/CreateVideogame';
//import Detail from './components/Detail/Detail';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Routes>
      <Route    path='/home' element={<Home/>}/>
      {/* <Route exact path='/' element={<LandingPage/>}/>
      <Route  exact path='/videogame' element={<CreateVideogame/>}/>
      <Route  exact path='/home/:id' element={<Detail/>}/> */}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
