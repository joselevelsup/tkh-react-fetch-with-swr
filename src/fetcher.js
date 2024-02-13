import axios from "axios";

//The fetcher here is an async usefunction that accepts the key of SWR, and returns the data.
//You can use any library to handle data fetching. In this case, we are using axios
//Yes this function is not labeled as async/await cause it uses promises
const fetcher = (...args) => axios.get(...args).then((res) => res.data);

export default fetcher;
