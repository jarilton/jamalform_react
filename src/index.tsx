import React from 'react';
import ReactDOM from 'react-dom';
import {createServer} from 'miragejs'
import { App } from './App';

createServer ({
  routes() {
    this.namespace = 'api';

    this.get('form', () => {
      return [
        {
          id: 1,
          name: 'Jamal',
          surname: 'Curry',
          age: 23,
          sex: 'Maculino',
          email: 'jamal@jamal.com',
          password: '1234'
        },
        {
          id: 2,
          name: 'Thalia',
          surname: 'Favaro',
          age: 24,
          sex: 'Feminino',
          email: 'thalia@thalia.com',
          password: '5678'
        },
        {
          id: 3,
          name: 'Alisson',
          surname: 'Macedo',
          age: 30,
          sex: 'Maculino',
          email: 'alison@alisson.com',
          password: '1234'
        }

      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
  