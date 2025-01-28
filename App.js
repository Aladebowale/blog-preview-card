import './App.css';
import Home from './Pages/Home';
import Stating from './components/Stating';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ShoeCollection from './components/Shoe';
// import Card from './components/Card';
// import SCards from './components/SCards';
// import SingleCard from './components/SingleCard';
import PlayerCard from './components/PlayerBlog';
import Players from '../src/components/PlayersBG';
import PlayerDb from './components/PlayerDb';


function App() {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Stating' element={<Stating/>}/>
          {/* <Route path='/Shoe' element={<ShoeCollection/>}/> */}
          {/* <Route path='/Card' element={<Card/>}/> */}
          {/* <Route path='/SCards' element={<SCards/>}/> */}
          {/* <Route path='/Card/:id' element={<SingleCard/>}/> */}
          <Route path= '/Player' element={<Players/>}/>
          <Route path= '/Player/:id' element={<PlayerCard/>}/>
          <Route path= '/PlayerDb' element={<PlayerDb/>}/>
          <Route path= '/PlayerDb/:id' element={<PlayerCard/>}/>
        </Routes>
      </Router>
    
    </div>
    
  );
}

export default App;
