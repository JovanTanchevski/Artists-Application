import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './components/Login/LoginPage';
import { Navbar } from './components/Navbar/Navbar';
import { ArtistHomePage } from './components/ArtistComponents/ArtistHomePage';
import { VisitorHomePage } from './components/VisitorComponents/VisitorHomePage';
import { VisitorListingPage } from './components/VisitorComponents/VisitorListing';
import './App.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/artist-page" element={<ArtistHomePage />} />
        <Route path="/visitor-page" element={<VisitorHomePage />} />
        <Route path="/visitor-listing-page" element={<VisitorListingPage />} />
        <Route path="*" element={<p>404 Error</p>} />
      </Routes>
    </div>
  );
}

export default App;
