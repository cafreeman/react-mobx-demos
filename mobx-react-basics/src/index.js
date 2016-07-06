import '../node_modules/bootswatch/paper/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'
import Store from './Store';

const people = ['neil', 'bridget', 'dylan'];

const store = new Store(people);

ReactDOM.render(<App store={store} />, document.querySelector('#app'))
