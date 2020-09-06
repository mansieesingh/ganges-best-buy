import React from 'react';
import Header from './js/components/Header/Header';
import './App.scss';
import Body from './js/components/Body/Body';
import SearchSection from './js/components/SearchSection/SearchSection';

function App() {
  return (
    <div className="outfox-app">
      <Header />
      <main>
        <Body />
        <SearchSection />
      </main>
    </div>
  );
}

export default App;
