import React from 'react';
import ReactDOM from 'react-dom';
// import './netflix.css';
// import Netflixapp from './Netflixapp.jsx';
// import Clickme from "./Click me game/clickme";
// import Challenge from './Hooks challenge/chellenge.jsx';
// import Clock from './digitalclock/clock.jsx';
// import App from './Events/App.jsx'
// import Form from './Forms/forms.jsx';
// import App from "./ToDo List App/Apptodo.jsx";
// import Increase from "./increase and decrease app/increase.jsx";
// import Keeperapp from './Google keeper app/keeperApp.jsx';
// import ContextApi from './context api/contextApi.jsx'
// import App from './useEffect/App';
// import ComA from './API/comA'
// import App from './React Router/App.jsx'
import App from './React website/App'
import {BrowserRouter} from 'react-router-dom';



ReactDOM.render(
    <BrowserRouter><App/></BrowserRouter>
,document.getElementById('root')
)