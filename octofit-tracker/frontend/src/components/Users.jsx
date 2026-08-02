import { useEffect, useState } from 'react';
import { getApiUrl, resolveCollection } from '../utils/api';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await fetch(getApiUrl('users'));
        if (!response.ok) {
          throw new Error('Failed to load users');
        }
        const data = await response.json();
        setUsers(resolveCollection(data));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h2 className="h4">Users</h2>
        <ul className="list-group list-group-flush">
          {users.map((user) => (
            <li className="list-group-item" key={user._id || user.id || user.email}>
              <strong>{user.name}</strong> <span className="text-muted">({user.email})</span>
              <div className="small text-muted">
                Fitness: {user.fitnessLevel || 'Unknown'} • Streak: {user.streak ?? 0}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Users;
