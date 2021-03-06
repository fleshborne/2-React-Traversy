import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import StickyFooter from 'react-sticky-footer';
import Posts from './components/Posts';
import PostForm from './components/PostForm';

import store from './store';

// const store = createStore(() => [], {}, applyMiddleware);

function App() {
  const [scrollDepth, setScrollDepth] = useState(0);

  function determineUserScrollDepth() {
    const scrolled =
      document.documentElement.scrollTop || document.body.scrollTop;
    setScrollDepth(scrolled);
  }

  useEffect(() => {
    window.addEventListener('scroll', determineUserScrollDepth);
  });

  return (
    <Provider store={store}>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <PostForm />
          <Posts />
        </header>
      </div>
      <footer></footer>
      <StickyFooter
        bottomThreshold={50}
        normalStyles={{
          backgroundColor: '#999999',
          padding: '2rem',
        }}
        stickyStyles={{
          backgroundColor: 'rgba(255,255,255,.8)',
          padding: '2rem',
        }}
      >
        Wow you've scrolled this: {Math.round(scrollDepth)}, far!
      </StickyFooter>
    </Provider>
  );
}

export default App;
