import './styles/style.css';
import PokemonLogo from '/images/pokemon.png';
import { useRequest } from './hooks/useRequest';
import { AudioPlayer } from './components/AudioPlayer';
import { Pokemon } from './components/Pokemon';

function App() {
  //Destructure to get only the isLoading, error, and data properties
  //isLoading lets the component know whether the data fetching is still going on or not
  //error provides if any error has occurred and if so, what is it?
  //data is the actual data that was returned from the query
  const { isLoading, data, error } = useRequest('/pokemon');

  const DisplayPokemon = () => {
    /**Checking if we did get any data. Can't be too careful */
    if (data) {
      return (
          <div className="row">
            {
              // <h2>{result.name}</h2>
              data.results.map((pokemon) => {
                return (
                  // <h2 key={pokemon.name}>{pokemon.name}</h2>
                  <Pokemon key={pokemon.name} pokemon={pokemon} />
                );
              })
            }
          </div>
      );
    }
  };

  const ErrorHandling = () => {
    //We use the isLoading to see if we are still fetching data
    //If so, return this jsx for this component
    if (isLoading) {
      return <div>Loading Pokemon data...</div>;
    }
    //We use the error to detect if any errors have occurred.
    //If so, return this jsx for this component
    if (error) {
      return <div>{error}: There was an error with getting data</div>;
    }
  };

  //If all is good with the data fetching, return this jsx
  return (
    <>
      <img className="pokemon-logo" src={PokemonLogo} />
      {/* <AudioPlayer /> */}
      {<DisplayPokemon />} : {<ErrorHandling />}
    </>
  );
}

export default App;
