import './scss/app.scss';

import {
  Routes,
  Route
} from "react-router-dom";

import Header from './components/Header';
import SideBar from './components/SideBar';
import About from './pages/About';
import Skills from './pages/Skills';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__container">
        <div className="App__side-bar">
          <SideBar />
        </div>
        <div className="App__About">
          <Routes>
            <Route path='/' element= {<About />}/>
            <Route path='/skills' element= {<Skills />}/>
            <Route path='*' element= {<NotFound />}/>
          </Routes>
          
        </div>
      </div>
    </div>
  );
}

export default App;
