import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from './components/movies/Movies';
import Contador from './components/contador/Contador'


const movieData = [ {
    thumbnail: require ('./components/containers/img/Aconcagua.jpg'),
    title: 'Cerro Aconcagua'
  },
  {
    thumbnail: require ('./components/containers/img/Monumento.jpg'),
    title: 'Monumento al Ejército de los Andes'
  },
  {
    thumbnail: require ('./components/containers/img/Potrerillos.jpg'),
    title: 'Dique Potrerillos'
  },
  {
    thumbnail: require ('./components/containers/img/ValleGrande.jpg'),
    title: 'Dique Valle Grande'
  },
  {
    thumbnail: require ('./components/containers/img/Viñedo.jpg'),
    title: 'Viñedo Mendocino'
  }
  
];


function App() {  

  const myDataList = movieData.map ( (element) => {
    return ( <img src={ element.thumbnail } alt= {element.title}/>)
  });
  
    return (
      <div className="App">
        <Contador></Contador>
        <Movies data={[]}>
          {myDataList}

        </Movies>
        </div>
  );
}

export default App;

