import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" >
      <header className="App-header" >
        <img src={logo} className="App-logo" alt="logo"/>
        <h1>
          My First React App
        </h1>
        <p>
          This is just a static website, but it's made with react to test CI/CD pipeline.
        </p>
        <p>
          All I wanted to do was to write something to test this feature and also try for the first time
          this pretty cool framework.
        </p>
        <p>
          This website is hosted on Github Pages, more info at <a className="App-link" href="https://pages.github.com/" target="_blank" rel="noreferrer noopener">https://pages.github.com/
          </a>
        </p>
        <p>
          This paragraph was added to test if pipeline worked and apparently it does :D.
        </p>
      </header>
    </div>
  );
}

export default App;
