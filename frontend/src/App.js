import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

//pages
import Home from './pages/Home';
import Checkout from './pages/Checkout';
// import Registration from './containers/Registration';



var App = function() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
