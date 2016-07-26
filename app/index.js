import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Main from './components/Index';
import store from './store';

const root = document.getElementById('root');
// store.subscribe(() => {
//   console.log(store.getState());
// });

// utilizando redux-promise-middleware
// store.dispatch({
//   type: 'promise',
//   payload: axios.get(`http://rest.learncode.academy/api/wstern/users`)
// })

ReactDOM.render(
  <Provider store={store}>
    <Main/>
  </Provider>,
  root
);
