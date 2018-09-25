import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Hello } from './components/Hello';
import {Container}   from './components/Container';

declare let module: any
ReactDOM.render(<Container  />,

document.getElementById('root'));

if (module.hot) {
   module.hot.accept();
}