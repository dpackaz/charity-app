import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
// import {createRoot} from 'react-dom/client'
// const container = document.getElementById('root')

// const root = createRoot(container)
// root.render(<App />)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
