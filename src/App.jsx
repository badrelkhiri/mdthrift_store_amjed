import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/Navbar.jsx';
import Home from './component/home.jsx';
import Items from './component/Items.jsx';
import Fashion from './component/fashion.jsx';
import Diffrent from './component/diffrentSection.jsx';
import Join from './component/join.jsx';
import Footer from './component/footer.jsx';
import Products from './component/products.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/" element={
            <>
              <section id="home">
                <Home />
              </section>
              <section id="items">
                <Items />
              </section>
              <section id="fashion">
                <Fashion />
              </section>
              <section id="diffrent">
                <Diffrent />
              </section>
              <section id="join">
                <Join />
              </section>
            </>
          } />
        </Routes>
        
        <section id="footer">
          <Footer />
        </section>
      </div>
    </Router>
  );
}

export default App;