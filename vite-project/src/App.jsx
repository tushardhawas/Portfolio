import React from 'react';
import Header from './component/Header';
import Welcome from './component/Welcome';
import Projects from './component/Projects';
import Footer from './component/Footer';
import Card from './component/Card';

function App() {
  return (
    <div className="container">

    <div className="App">
      <Header />
      <main className='Main'>
        <Welcome />
        <Projects />
      </main>
      <Footer />
    </div>
    </div>
  );
}

export default App;
