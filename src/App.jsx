import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Inici from './components/Section';
import Footer from './components/Footer';
import Noticies from './components/Noticies'


const Videojocs = () => <div>Pàgina de Videojocs en desenvolupament</div>;
const Contacte = () => <div>Pàgina de Contacte en desenvolupament</div>;

class App extends React.Component {
  render() {
    return (
      <>
        <div>
          <Header />
        </div>
        <main>
          <Routes>
            <Route path="/" element={<Inici />} />
            <Route path="/noticies" element={<Noticies />} />
            <Route path="/videojocs" element={<Videojocs />} />
            <Route path="/contacte" element={<Contacte />} />
          </Routes>
        </main>

        <div>
          <Footer />
        </div>
      </>
    )
  }
}
export default App;