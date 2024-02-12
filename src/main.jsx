import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from "axios";
import { SWRConfig } from 'swr'
import App from './App.jsx'

//The fetcher here is an async usefunction that accepts the key of SWR, and returns the data.
//You can use any library to handle data fetching. In this case, we are using axios
//Yes this function is not labeled as async/await cause it uses promises
// const fetcher = (url) => axios.get(url).then(res => res.data);
const fetcher = (...args) => axios.get(...args).then((res) => res.data);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher }}>
      <App />      
    </SWRConfig>
  </React.StrictMode>,
)
