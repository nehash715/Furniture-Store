import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import MainComp from './component/MainComp';
import Task3Main from './component/tas3main';
import Task5main from './component/Task5main';
import Task6main from './component/task6main';
import FurnitureStoreMain from './component/FurnitureStoreMain';
import Main1task from './component/A3#21';
import PlayerSystem from './component/PlayerSystem';
import Store13 from './component/store1.3';
import Counter from "./component/Counter"
import CountAB from './component/CountAB';
import MainCompNums from './component/MainCompNums';
import MainComphook from './component/mainComphook';
import Formhoookmain from './component/Formhoookmain';
import Task331main from './component/Task331main';
import CartDisplay from './component/CartDisplay';

import {createStore} from "redux";
import { Provider } from 'react-redux';

import ReduxMain1 from './component/ReduxMain1';
import reducer from './component/Reducer1';
 
import Redux4main from './component/Redux4main';
import AllPlayer from  './component/AllPlayer'
import MyShop from './component/MyShop';
import Todo from './component/Todo';
import CartRedux from './component/CartRedux';
import BookMyShow from './component/BookMyShow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const store=createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  

  //console.log(store.getState())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
  <BrowserRouter>
  <BookMyShow/>
  </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
