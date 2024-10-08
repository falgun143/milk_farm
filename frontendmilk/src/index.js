import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import $ from 'jquery';
import 'jquery';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'lightbox2/dist/css/lightbox.min.css';
import 'lightbox2';

import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { Provider  } from 'react-redux';
import { store } from './store/store';
import { StateProvider } from './components/StateProvider';
import reducer, { initialState } from './components/reducer';

import 'bootstrap/scss/bootstrapD.scss'
import 'animate.css/animate.min.css';
import WOW from 'wowjs';


window.jQuery = $; // Expose jQuery globally
window.$ = $; // Expose jQuery globally
new WOW.WOW().init();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <StateProvider initialState={initialState} reducer={reducer} >
      <RouterProvider router={router}/>
      </StateProvider>
    </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
