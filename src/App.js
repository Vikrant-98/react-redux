import React from 'react';
import Books from './component/books';
import {Provider} from 'react-redux';
import store from './redux/store/store'
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Books/>
    </div>
    </Provider>
  );
}

export default App;
