import logo from './logo.svg';
import Movies from './components/movies/Movies';
import Contador from './components/contador/Contador';
import './App.css';

const movieData = [
  {thumbnail:"", urlvideo:"", preview:"", title:""},
  {thumbnail:"", urlvideo:"", preview:"", title:""},
  {thumbnail:"", urlvideo:"", preview:"", title:""}
];

function App() {

  const myDataList = movieData.map((element) => {
        return ( <img src={ element.thumbnail } alt={ element.title }/> )
  } );
  // Voy a pasarle un array vacío al componente movie
  // y voy a construir una lista de imagenes basados en

  return (
    <div className="App">
      <Contador></Contador>
      <Movies data={[]}>
        {myDataList}
      </Movies>
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
