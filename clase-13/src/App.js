
import Movies from './components/movies/Movies';
import Contador from './components/contador/Contador';
import './App.css';

const movieData = [
  {thumbnail: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmendoza.tur.ar%2Fwp-content%2Fuploads%2F2021%2F10%2FDSC6234.jpg&imgrefurl=https%3A%2F%2Fmendoza.tur.ar%2F&tbnid=72Q-Tn4jDFqiUM&vet=12ahUKEwjzp5WNq4D7AhXPrZUCHReuDJYQMygCegUIARDjAQ..i&docid=yG7mEyaI45fqYM&w=1500&h=1001&itg=1&q=Mendoza&hl=es-419&ved=2ahUKEwjzp5WNq4D7AhXPrZUCHReuDJYQMygCegUIARDjAQ" , urlvideo: "" , preview: "", title:""},
  {thumbnail: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmendoza.tur.ar%2Fwp-content%2Fuploads%2F2021%2F10%2FDSC6234.jpg&imgrefurl=https%3A%2F%2Fmendoza.tur.ar%2F&tbnid=72Q-Tn4jDFqiUM&vet=12ahUKEwjzp5WNq4D7AhXPrZUCHReuDJYQMygCegUIARDjAQ..i&docid=yG7mEyaI45fqYM&w=1500&h=1001&itg=1&q=Mendoza&hl=es-419&ved=2ahUKEwjzp5WNq4D7AhXPrZUCHReuDJYQMygCegUIARDjAQ" , urlvideo: "" , preview: "", title: ""},
  {thumbnail: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.redcabanias.com%2Fblog%2Fwp-content%2Fuploads%2F2019%2F06%2Fmm1.jpg&imgrefurl=https%3A%2F%2Fwww.redcabanias.com%2Fblog%2F15-cosas-para-hacer-en-mendoza%2F&tbnid=W6SCjmRQHQihcM&vet=12ahUKEwjzp5WNq4D7AhXPrZUCHReuDJYQMygFegUIARDpAQ..i&docid=MfN9S6vGms98sM&w=505&h=519&q=Mendoza&hl=es-419&ved=2ahUKEwjzp5WNq4D7AhXPrZUCHReuDJYQMygFegUIARDpAQ" , urlvideo: "" , preview: "", title: ""}
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
