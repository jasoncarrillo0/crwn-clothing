import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/_Top-Level/App';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
    <Provider store={store}>
        <Router>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </Router>
    </Provider>, document.getElementById('root'));
