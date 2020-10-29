import logo from './logo.svg';
import './App.css';
// import '~video-react/dist/video-react.css'; // import css
import { Player } from 'video-react';
// import '~video-react/dist/video-react.css'; // import css
// import '~styles/scss/video-react'; // or import scss




function App() {
  return (
    <div className="App">
    <Player>
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
    </Player>
      {/*<header className="App-header">
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
      </header>*/}
    </div>
  );
}

export default App;