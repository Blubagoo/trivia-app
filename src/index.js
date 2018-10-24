import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { Provider } from 'react-redux';

const quizApp = document.getElementById('root');
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, quizApp);
registerServiceWorker();
