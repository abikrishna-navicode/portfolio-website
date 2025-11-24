import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';


export default function App() {
return (
<div className="app-frame">
<Header />
<main>
<Hero />
<Skills />
<About/>
<Projects />
<Contact />
</main>
<Footer />
<ScrollToTop/>
</div>
);
}