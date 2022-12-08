import './scss/app.scss';

import Header from './components/Header';
import SideBar from './components/SideBar';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__container">
        <div className="App__side-bar">
          <SideBar />
        </div>
        <div className="App__About">
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;
