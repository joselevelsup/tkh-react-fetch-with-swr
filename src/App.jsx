import { useSWR } from "swr";

//The fetcher here is an async function that accepts the key of SWR, and returns the data.
//You can use any library to handle data fetching. In this case, we are using axios
//Yes this function is not labeled as async/await cause it uses promises
const fetcher = (url) => axios.get(url).then(res => res.data)

function App() {
    //We use the useSWR hook to fetch the data based on the key that is provided as well as the fetcher function
    //The key with useSWR is the url that you want to fetch from. useSWR does use caching as well. The url will be the key in useSWR's cache
    //Then destructure to get only the isLoading, error, and data properties
    //isLoading lets the component know whether the data fetching is still going on or not
    //error provides if any error has occurred and if so, what is it?
    //data is the actual data that was returned from the query
    const { isLoading, data, error } = useSWR("https://pokeapi.co/api/v2/pokemon/ditto", fetcher);

    //We use the isLoading to see if we are still fetching data
    //If so, return this jsx for this component
    if(isLoading){
        return (
            <div>Loading Pokemon data...</div>    
        )
    }

    //We use the error to detect if any errors have occurred.
    //If so, return this jsx for this component
    if(error){
        return (
            <div>There was an error with getting data</div>
        )
    }

    //If all is good with the data fetching, return this jsx
    return (
        <>
            {
                /**Checking if we did get any data. Can't be too careful */
                data && (
                    <>
                        {/**Render the data from data fetching */}
                        <div>{data.name}</div>
                        <img src={data.sprites.front_default} />
                    </>
                )
            }
        </>
    )
}

export default App
