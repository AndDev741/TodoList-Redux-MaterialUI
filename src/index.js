import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store';

console.log('Initial state:', store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('State after dispatch: ', store.getState());
});
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about reducers' })
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about stores' })
store.dispatch({ type: 'todos/todoToggled', payload: 0 })
store.dispatch({ type: 'todos/todoToggled', payload: 1 })
store.dispatch({ type: 'filters/statusFilterChanged', payload: 'Active' })

unsubscribe();

store.dispatch({type: 'todos/todoAdded', payload: 'Try creating a store'})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

