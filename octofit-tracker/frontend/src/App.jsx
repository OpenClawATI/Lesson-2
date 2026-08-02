import { NavLink, Route, Routes } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/users', label: 'Users' },
  { to: '/teams', label: 'Teams' },
  { to: '/activities', label: 'Activities' },
  { to: '/leaderboard', label: 'Leaderboard' },
  { to: '/workouts', label: 'Workouts' },
];

function App() {
  return (
    <div className="min-vh-100 bg-light">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <span className="navbar-brand mb-0 h1">OctoFit Tracker</span>
          <div className="navbar-nav ms-auto">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className="nav-link" end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      <main className="container py-4">
        <div className="p-4 mb-4 bg-white rounded-3 border shadow-sm">
          <h1 className="display-6 fw-bold">Modern multi-tier fitness tracking</h1>
          <p className="text-muted mb-0">
            Configure VITE_CODESPACE_NAME in .env.local to use Codespaces URLs such as
            https://{import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/.
            If it is unset, the app falls back to localhost.
          </p>
        </div>

        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
