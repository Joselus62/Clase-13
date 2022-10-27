import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from './components/movies/Movies';
import Contador from './components/contador/Contador';
import './App.css';

const movieData = [
  {
  thumbnail: require ('./components/containers/img/Aconcagua.jpg'),
  altText: 'Imagen1',
  title: 'Cerro Aconcagua'
},
{
  thumbnail: require ('./components/containers/img/Monumento.jpg'),
  altText: 'Imagen2',
  title: 'Monumento al Ejército de los Andes'
},
{
  thumbnail: require ('./components/containers/img/Potrerillos.jpg'),
  altText: 'Imagen3',
  title: 'Dique Potrerillos'
},
{
  thumbnail: require ('./components/containers/img/ValleGrande.jpg'),
  altText: 'Imagen4',
  tilte: 'Dique Valle Grande'
},
{
  thumbnail: require ('./components/containers/img/Viñedo.jpg'),
  altText: 'Imagen5',
  title: 'Viñedo Mendocino'
}
];

function App() {

  const myDataList = movieData.map( (element) => {
        return ( <img src={ element.thumbnail } alt={ element.title }/> )
  } );
  // Voy a pasarle un array vacío al componente movie
  // y voy a construir una lista de imagenes basados en un array de datos.

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
