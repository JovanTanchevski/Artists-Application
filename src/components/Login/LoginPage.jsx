import { useEffect } from 'react';
import logo from '../../images/Logo.png';
import './Login.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const LoginPage = () => {
  const navigate = useNavigate();
  const [selectedArtist, setSelectedArtist] = useState('');
  const [users, setUsers] = useState([]);
  const navigateToArtistPage = (e) => {
    e.preventDefault();
    if (selectedArtist) {
      localStorage.setItem('currentUser', JSON.stringify(selectedArtist));
      navigate('/artist-page');
    }
  };
  const navigateToVisitorPage = (e) => {
    e.preventDefault();
    navigate('/visitor-page');
  };
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="login-page">
      <img src={logo} alt="logo-image" />
      <div className="login-content">
        <div className="artists-login-content" onClick={navigateToArtistPage}>
          <h2>Join as Artist</h2>
          <select
            onChange={(e) => {
              setSelectedArtist(e.target.value);
            }}
            placeholder="Choose"
            name="select"
            id="select"
          >
            <option value="/" disabled selected>
              Choose
            </option>
            {users.map((user) => (
              <option key={user.id} value={user.name}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <div className="visitor-login-content" onClick={navigateToVisitorPage}>
          <h2>Join as Visitor</h2>
        </div>
      </div>
    </div>
  );
};
