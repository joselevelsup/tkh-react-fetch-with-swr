import { useRequest } from '../hooks/useRequest';

export const Pokemon = (pokemon) => {
  const { name } = pokemon.pokemon;
  console.log(`Pokemon component: `, pokemon.pokemon)
  const { data, error } = useRequest('/pokemon', name);
  // console.log(data);

  const ErrorHandling = () => {
    if (!data) return <h1>Loading...</h1>;
    if (error) return <h1>Something went wrong!</h1>;
  };

  return (
    <>
      {data && (
        <div className="card">
          <span className="card-id">#{data.id}</span>
          <img
            className="card-image"
            src={data.sprites.front_default}
            alt={name}
          />
          <h2 className="card-name">{name}</h2>
          <span className="card-details">
            <h3>
              <i>Type</i>
            </h3>
            <ul className="type-list">
              {data.types.map((poke) => (
                <li key={poke.type.name}>{poke.type.name.toUpperCase()}</li>
              ))}
            </ul>
          </span>
        </div>
      )}
      : {<ErrorHandling />}
    </>
  );
};
