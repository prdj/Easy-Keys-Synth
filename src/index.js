import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import SoundProvider from './context/SoundContext';
import Store from './context/Store';

ReactDOM.render(
  <SoundProvider>
    <Store>
      <App />
    </Store>
  </SoundProvider>,
  document.getElementById('root')
);


