'use client';
import React, { useEffect, useState } from 'react';
import axios from '../utils/api'; 
import Header2 from '../components/Header2';

function UserPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get('api/users'); 
        setUsers(response.data);
      } catch (err:any) {
        setError(err.response?.data?.message || 'Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className='bg-gray-100 min-h-screen'>
        <div>
            <Header2/>
        </div>

        <div className="p-6 ">
      <h1 className="text-2xl font-bold text-center mb-6">User List</h1>

      {loading && <p className="text-center">Loading...</p>}

      {error && (
        <div className="text-center text-red-500">
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && users.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user:any) => (
            <div
              key={user.id}
              className="bg-white shadow-md rounded-lg p-4"
            >
              <h2 className="text-lg font-semibold">{user.name}</h2>
              <p className="text-gray-600">Email: {user.email}</p>
              <p className="text-gray-600">ID: {user.id}</p>
            </div>
          ))}
        </div>
      ) : (
        !loading && <p className="text-center">No users found.</p>
      )}
    </div>
    </div>
  );
}

export default UserPage;
