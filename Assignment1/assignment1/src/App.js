import Header from './Header';
import Footer from './Footer';
import Categories from './Categories';
import './styles.css';
// import './App.css';

function App() {
  return (
    
    <div className="App">
      <Header/>
      <Categories/>
      <Footer/>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
