import React from 'react'
import './App.css';
import data from './data'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
      <BrowserRouter>
    <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>
                <Link to="/">trendol</Link>
                <a href="index.html"></a>
            </div>
            <div className="header-links">
                <a href="cart.html">Sepetim</a>
                <a href="signin.html">Giriş Yap</a>
            </div>
        </header>
        <aside className="sidebar">
            <h3>Kategoriler</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>X</button>
            <ul>
                <li>
                    <a href="index.html">Kazak</a>
                </li>
                <li>
                    <a href="index.html">Pantolon</a>
                </li>
            </ul>
        </aside>
        <main className="main">
            <div classNameName="content">
            <Route path="/" exact={true} component={HomeScreen} />
            <Route  path="/products/:id"   component={ProductScreen} />
               
            </div>
        </main>
        <footer className="footer"> Tüm Hakları Saklıdır </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
