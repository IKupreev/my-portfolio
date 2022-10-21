import './App.css';

import Header from './components/Header';
import SideBar from './components/SideBar';


function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <section>
        <div>Hello World</div>
        <span>
          <p>Works</p>
        </span>
      </section>
    </div>
  );
}

export default App;
