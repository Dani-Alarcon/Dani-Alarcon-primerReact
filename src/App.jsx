import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header'
import Inici from './components/Section'
import Footer from './components/Footer'
import Noticies from './components/Noticies'
import Videojocs from './components/Videojocs'


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
            <Route path="/videojocs" element={<Videojocs />} />
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