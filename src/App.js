import './index.css';
import Header from './Header';
import Home from './Home';
import PlayerSection from './PlayerSection';
import TopScorers from './TopScorers';
import TopAssists from './TopAssists';
import TopRebounders from './TopRebounders';
import ComparePlayers from './ComparePlayers';
import Footer from './Footer';
import { Routes, Route, useNavigate } from 'react-router-dom';
function App() {
  
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/playerbyname' element={<PlayerSection/>}/>
        <Route path='/topscorers' element={<TopScorers/>}/>
        <Route path='/topscorersplayoffs' element={<TopScorers/>}/>
        <Route path='/topassists' element={<TopAssists/>}/>
        <Route path='/topassistsplayoffs' element={<TopAssists/>}/>
        <Route path='/toprebounders' element={<TopRebounders/>}/>
        <Route path='/compareplayers' element={<ComparePlayers/>} />
      </Routes>
    </div>
  );

}


export default App;
