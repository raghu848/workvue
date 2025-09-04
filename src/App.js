import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PreSales from './pages/PreSales';
import PostSales from './pages/PostSales';
import Pricing from './pages/Pricing';
import CustomerStories from './pages/CustomerStories';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="home">
          <HomePage />
        </section>
        <section id="pre-sales">
          <PreSales />
        </section>
        <section id="post-sales">
          <PostSales />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="customer-stories">
          <CustomerStories />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
