import React from 'react'
import ReactDOM from 'react-dom/client'
import { SWRConfig } from 'swr'
import App from './App.jsx'
import fetcher from  "./fetcher";
// import BasicExample from "./BasicExample.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*If you want to see a basic example being used, just uncomment the import above on line 6, uncomment line 16, and comment out the 3 components below */}
    {/*<BasicExample />*/}
    <SWRConfig value={{ fetcher }}>
      <App />      
    </SWRConfig>
  </React.StrictMode>,
)
