import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Link, Route, BrowserRouter as Router  } from 'react-router-dom';


ReactDOM.render(
    <Router>
        <App />
    </Router>, document.getElementById('root'));
