import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

//pages
import Home from './pages/Home/Home';
import Checkout from './pages/Checkout/Checkout';
// import Registration from './containers/Registration';


// Components
import Header from './containers/Header/Header';
import Footer from './components/Footer/Footer';

var App = function() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Router>
          <Header/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
            </Routes>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
