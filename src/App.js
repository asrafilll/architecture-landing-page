import logo from './images/logosinbakons.png';

function App() {
  return (
    <div className="App">

      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} className="w-24" alt="Logo Sinbakons" />
        <nav className="space-x-8">
          <a href="#">Beranda</a>
          <a href="#">Portfolio</a>
          <a href="#">Tentang Kami</a>
          <a href="#" className="pl-8">Hubungi Kami</a>
        </nav>
      </div>

    </div>
  );
}

export default App;
