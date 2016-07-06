import '../node_modules/bootswatch/paper/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const people = ['neil', 'bridget', 'dylan'];

ReactDOM.render(<App inputs={people}/>, document.querySelector('#app'));
