import './scss/app.scss';

import Header from './components/Header';
import SideBar from './components/SideBar';
import About from './components/About';

function App() {
  return (
    <div class="App">
      <Header />
      <div class="App__container">
        <div class="App__side-bar">
          <SideBar />
        </div>
        <div class="App__About">
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;
